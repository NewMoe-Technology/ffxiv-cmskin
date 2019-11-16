import { Message, Lang, View, Button, Back } from '../../../components';
import { getSetting } from '../../../utils/getSetting';
import { Component } from 'react';
import style from '../index.scss';

const { Split, Footer } = View;

const FooterLite = () => [
  <Split key="split" />,
  <Footer key="footer" className={style.foot}>
    <Back />
  </Footer>,
];

class PageComponent extends Component {
  onDefault = () => {
    const Default = {
      timekey: this.state.timekey + 1,
      ...getSetting(this.Setting, this.props.setting, true),
    };
    this.setState(Default);
    Message.success(Lang('setting.message.reset'));
  };

  onSave = () => {
    window.lang = this.state.lang;
    this.setState({ timekey: this.state.timekey + 1 });
    this.props.dispatch({ type: 'setting/update', payload: this.state });
    Message.success(Lang('setting.message.apply'));
  };

  Footer = [
    <Split key="split" />,
    <Footer
      key="footer"
      className={style.foot}
      hasBtn
      rightContent={
        <div className={style.btngroup}>
          <Button onClick={this.onDefault}>{Lang('setting.btn.reset')}</Button>
          <Button onClick={this.onSave}>{Lang('setting.btn.apply')}</Button>
        </div>
      }
    >
      <Back />
    </Footer>,
  ];
}

export { PageComponent, FooterLite };
