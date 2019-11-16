import { Route, Router, Switch } from 'dva/router';
import App from './routes/App';
import Overlay from './routes/Overlay';
import Team from './routes/Team';
import History from './routes/History';
import Detail from './routes/Detail';
import Qrcode from './routes/Qrcode';
import Setting from './routes/Setting';

export default ({ app, history }) => {
  return (
    <Router history={history}>
      <Switch>
        <App>
          <Route exact path="/" component={Overlay} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/history" component={History} />
          <Route exact path="/qrcode" component={Qrcode} />
          <Route path="/detail" component={Detail} />
          <Route path="/setting" component={Setting} />
        </App>
      </Switch>
    </Router>
  );
};
