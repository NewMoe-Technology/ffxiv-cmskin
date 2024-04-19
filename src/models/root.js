import { wsImpl } from '../services/websocket';

export default {
  namespace: 'root',
  state: {},
  subscriptions: {
    setup({ dispatch }) {
      document.addEventListener('onOverlayDataUpdate', e => {
        if (Object.keys(e.detail.Combatant).length > 0)
          dispatch({ type: 'act/update', payload: e.detail });
      });

      window.onload = () => {
        if (window.websocket) {
					const ws = new wsImpl(wsUri); // eslint-disable-line
          ws.connect();
          window.onbeforeunload = () => ws.close();
          window.addEventListener('unload', () => ws.close(), false);
        }

        // 因为这鸟玩意在这里用了那就只能搭个顺风车了
        setTimeout(() => {
          const SmartisanHei = new FontFace("Smartisan Hei", "url(//ffxiv-res.diemoe.net/SmartisanHei.woff2)");
          document.fonts.add(SmartisanHei);
          SmartisanHei.load().then(() => {
            // 修改字体
            document.body.style.fontFamily = '"Smartisan Hei", Microsoft Yahei UI, Microsoft Yahei, PingFang SC, sans-serif'
          });
        }, 0);
      };
    },
  },
};
