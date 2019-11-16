import { Route } from 'dva/router';
import { View, Icon, Lang } from '../../components';
import style from './index.scss';
import _ from 'lodash';
import PageQuantity from './PageQuantity';
import PageBasic from './PageBasic';
import PageNormal from './PageNormal';
import PageDetail from './PageDetail';
import pageComment from './pageComment';
import PageAbout from './PageAbout';

const { Bar, Header } = View;

const Doc = {
  '/setting/basic': {
    name: 'setting.basic',
    icon: 'laptop',
    component: PageBasic,
  },
  '/setting/quantity': {
    name: 'setting.quantity',
    icon: 'bar-chart',
    component: PageQuantity,
  },
  '/setting/normal': {
    name: 'setting.normal',
    icon: 'bars',
    component: PageNormal,
  },
  '/setting/detail': {
    name: 'setting.detail',
    icon: 'idcard',
    component: PageDetail,
  },
  '/setting/comment': {
    name: 'setting.comment',
    icon: 'message',
    component: pageComment,
  },
  '/setting/about': {
    name: 'setting.about',
    icon: 'github',
    component: PageAbout,
  },
};

export default () => {
  const sidebar = [];
  const route = [];
  _.forEach(Doc, (item, to) => {
    sidebar.push(<Icon key={item.name} type={item.icon} to={to} />);
    route.push(<Route key={to} path={to} component={item.component} />);
  });
  return [
    <Header key="header">{Lang('setting.header')}</Header>,
    <Bar key="bar" className={style.bar}>
      {Lang(Doc[window.memoryHistory.location.pathname].name)}
    </Bar>,
    <div key="content" className={style.flex}>
      <div className={style.left}>{sidebar}</div>
      <div className={style.right}>{route}</div>
    </div>,
  ];
};
