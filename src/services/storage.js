const storage = window.localStorage;

const setStorage = (name, value) => {
  const data = JSON.parse(storage.getItem('ffxiv-cmskin-data') || '{}');
  data[name] = value;
  storage.setItem('ffxiv-cmskin-data', JSON.stringify(data));
};

const getStorage = name => {
  const data = JSON.parse(storage.getItem('ffxiv-cmskin-data') || '{}');
  return data[name];
};

export { setStorage, getStorage };
