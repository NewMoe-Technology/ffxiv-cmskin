import { Icon, Button, Tooltip } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Component } from 'react';
import classnames from 'classnames/bind';
import { View, Lang } from '../../components';
import ViewHeader from './ViewHeader';
import TabSplash from './TabSplash';
import TabList from './TabList';
import { getSetting } from '../../utils/getSetting';
import _ from 'lodash';
import Package from '../../../package.json';

import style from './index.scss';

const { Header, Content, Bar, Footer, Split } = View;
const Setting = [
  'uiMini',
  'uiTrans',
  'uiAutoMini',
  'uiAutoMiniActive',
  'normalFull',
  'normalMini',
  'normalDamage',
  'normalHeal',
  'normalTank',
  'titleBehaviour',
  'hideName'
];

const State = state => {
  const act = state.act.encounterDatas[state.setting.historyPage];
  return {
    timeout: 0,
    Encounter: act ? act.Encounter : {},
    Combatant: act ? act.Combatant : {},
    Chart: act ? act.Chart : {},
    isActive: act ? act.isActive : false,
    ...getSetting(Setting, state.setting),
  };
};

const TransparentIcon = () => (
  <svg t="1770830670791" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor">
    <path d="M0 768V512h256v256H0z m0-512V0h256v256H0z m256 768V768h256v256H256z m0-512V256h256v256H256z m256 256V512h256v256H512z m0-512V0h256v256H512z m256 768V768h256v256H768z m0-512V256h256v256H768z"></path>
  </svg>
);

class Overlay extends Component {
  state = {
    tab: 'dps',
  };

  tabClass = tab => {
    const tabClass = classnames.bind(style)('tab', { active: this.state.tab === tab });
    return (
      <span key={tab} className={tabClass} onClick={() => this.setState({ tab: tab })}>
        {Lang(`footer.${tab}`)}
      </span>
    );
  };

  render() {
    const $ = this.props;

    let BarInner = <span className={style.title}>{Lang('normal.waiting')}</span>;
    let ContentInner = <TabSplash data={Package} />;
    let FooterInner = [];

    if ($.isActive) window.active = true;

    if (window.active) {
      if ($.uiAutoMiniActive) {
        const ifMini = $.Combatant.length > $.uiAutoMini;
        if ($.uiMini !== ifMini)
          this.props.dispatch({ type: 'setting/update', payload: { uiMini: ifMini } });
      }

      BarInner = $.normalFull.map(item => (
        <span key={item} className={style.title}>
          {Lang(`encounter.${item}`)}: {_.result($.Encounter, item)}
        </span>
      ));

      ContentInner = (
        <TabList
          tab={this.state.tab}
          Combatant={$.Combatant}
          Encounter={$.Encounter}
          chart={$.Chart}
          time={$.Encounter ? $.Encounter.duration : ''}
        />
      );

      FooterInner = [this.tabClass('dps'), this.tabClass('heal'), this.tabClass('tank')];
    }

    BarInner = $.uiMini ? null : <Bar key="bar">{BarInner}</Bar>;

    const RightItem = [
      window.websocket ? (
        <Link to="/qrcode" key="qrcode">
          <Icon type="scan" />
        </Link>
      ) : null,
      <Link to="/team" key="team">
        <Icon type="line-chart" />
      </Link>,
      <Link to="/history" key="history">
        <Icon type="clock-circle-o" />
      </Link>,
      <span key="separate-line" style={{ borderRight: "1px solid var(--cmskin-generic-grey)", display: "inline-block", width: "1px", alignSelf: "stretch", margin: "5px 10px" }}></span>,
      <Tooltip key="hide-name" title={$.hideName ? Lang('menu.hideName.on') : Lang('menu.hideName.off')}>
        <Button ghost type="link" icon={$.hideName ? "eye" : "eye-invisible"} size="small" style={{ width: "16px", marginRight: ".5rem" }} onClick={() => this.props.dispatch({ type: 'setting/update', payload: { hideName: !$.hideName } })} />
      </Tooltip>,
      <Tooltip key="mini-mode" title={$.uiMini ? Lang('menu.uiMini.on') : Lang('menu.uiMini.off')}>
        <Button ghost type="link" icon={$.uiMini ? "arrows-alt" : "shrink"} size="small" style={{ width: "16px", marginRight: ".5rem" }} onClick={() => this.props.dispatch({ type: 'setting/update', payload: { uiMini: !$.uiMini } })} />
      </Tooltip>,
      <Tooltip key="transparent-mode" title={$.uiTrans ? Lang('menu.uiTrans.on') : Lang('menu.uiTrans.off')}>
        <Button ghost type="link" size="small" style={{ padding: "0" }} onClick={() => this.props.dispatch({ type: 'setting/update', payload: { uiTrans: !$.uiTrans } })}>
            <Icon component={TransparentIcon} />
        </Button>
      </Tooltip>,
    ];

    const RightContent = !window.active ? null : (
      <div className={style.rightContent}>{RightItem}</div>
    );

    return [
      <Header key="header" uiMini={$.uiMini}>
        <ViewHeader option={$.normalMini} data={$.Encounter} log={Package} uiMini={$.uiMini} titleBehaviour={$.titleBehaviour} />
      </Header>,
      BarInner,
      <Content key="body">{ContentInner}</Content>,
      <Split key="split" />,
      <Footer key="footer" rightContent={RightContent}>
        {FooterInner}
      </Footer>,
    ];
  }
}

export default connect(State)(Overlay);
