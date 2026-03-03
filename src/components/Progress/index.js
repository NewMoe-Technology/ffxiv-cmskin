import { Icon } from 'antd';
import classnames from 'classnames/bind';
import React, {useRef, useEffect, useState } from 'react';
import style from './index.scss';

export default ({ title, number, progress, overProgress, color, arrow, level, ...other }) => {
  let Arrow = [];
  if (arrow === 'up')
    Arrow = (
      <span className={style.up}>
        <Icon type="arrow-up" />
      </span>
    );
  if (arrow === 'down')
    Arrow = (
      <span className={style.down}>
        <Icon type="arrow-down" />
      </span>
    );

  const skillContainerRef = useRef(null);
  const skillTextRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (skillContainerRef.current && skillTextRef.current) {
      const containerW = skillContainerRef.current.offsetWidth;
      const textW = skillTextRef.current.offsetWidth;
      
      if (textW > containerW) {
        setOffset(textW - containerW);
      } else {
        setOffset(0);
      }
    }
  }, [title]);

  const Title = title ? <div ref={skillContainerRef} className={style.skill}><span ref={skillTextRef} className={`${style['skill-text']} ${offset > 0 ? style['skill-text-animation'] : ''}`} style={{ '--offset': `${offset}px` }}>{title}</span></div> : null;
  const Overprogress = overProgress ? (
    <div
      className={style.overActive}
      style={{
        width: overProgress,
      }}
    />
  ) : null;
  const Progress = progress ? (
    <div
      className={style.active}
      style={{
        background: color,
        width: progress.toString().indexOf('%') === -1 ? progress * 100 + '%' : progress,
      }}
    >
      {Overprogress}
    </div>
  ) : null;

  const NumberClass = classnames.bind(style)('show', {
    high: level === 'high',
    low: level === 'low',
  });

  return (
    <div {...other}>
      {Title}
      <div className={NumberClass}>
        {Arrow}
        {parseFloat(number).toLocaleString()}
      </div>
      <div className={style.progress}>{Progress}</div>
    </div>
  );
};
