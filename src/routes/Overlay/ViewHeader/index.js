import classnames from 'classnames/bind';
import style from './index.scss';
import { Lang } from '../../../components';
import { getSetting } from '../../../utils/getSetting';
import _ from 'lodash';

export default ({ option, data, log, uiMini, titleBehaviour = 'title_openwiki' }) => {

  let Content = [];
  let Subtitle = [];
  if (window.active) {
    if (uiMini) {
      option.forEach(item =>
        Subtitle.push(
          <span key={item}>{` ${Lang(`encounter.${item}`)}: ${_.result(data, item)}`}</span>
        )
      );
    } else {
      Subtitle = data.name !== 'Encounter' ? <span>{` · ${data.name}`}</span> : null;
    }

    const DataZone = data.zone.replace(' ', '_').replace(/\(|\)/g, '');

    Content = (
      <span className={classnames.bind(style)('zone', { uiMini: uiMini })}>
        <a
          href={titleBehaviour == 'title_openwiki' ? `http://ff14.huijiwiki.com/wiki/${DataZone}` : "#/history"}
          rel="noopener noreferrer"
          target={titleBehaviour == 'title_openwiki' ? '_blank' : '_self'}
        >
          {data.zone}
        </a>
        {Subtitle}
      </span>
    );
  } else {
    Content = (
      <span className={classnames.bind(style)('zone', { uiMini: uiMini })}>
        <a
          href="https://github.com/canisminor1990/ffxiv-cmskin"
          rel="noopener noreferrer"
          target="_blank"
        >
          CanisMinor Act
        </a>
        <span>{` · ${log.version}`}</span>
      </span>
    );
  }

  return <div className={style.view}>{Content}</div>;
};
