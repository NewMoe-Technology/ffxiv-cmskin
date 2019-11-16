import style from './index.scss';
import Logo from '../../../public/img/logo.png';

export default ({ size = 400 }) => (
  <div className={style.logo} style={{ maxWidth: size + 'px' }}>
    <img alt="logo" src={Logo} />
  </div>
);
