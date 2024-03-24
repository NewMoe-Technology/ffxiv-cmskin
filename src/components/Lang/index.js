import langData from '../../lang';

export default id => {
  try {
    if (!window.lang) window.lang = 'cn';
    const Str = langData[window.lang][id];
    return Str || id; // Return translation key if failed to found translation key
  } catch (e) {
    console.log(e);
    console.log('No lang:', id);
    return id ? id.toString() : e;
  }
};
