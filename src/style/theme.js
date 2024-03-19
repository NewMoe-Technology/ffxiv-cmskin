const _ = require('lodash');

const Base = {
  '@primary-color': '#bca98a',
  '@link-color': '#eee1c5',
  '@border-radius-base': '5px',
  '@font-size-base': '16px',
  '@line-height-base': '1.2',
};

const Layout = {
  '@layout-body-background': '#ffffff',
  '@layout-header-background': '#ffffff',
  '@layout-header-height': '64px',
  '@layout-header-padding': '0 50px',
  '@layout-footer-padding': '24px 50px',
  '@layout-trigger-height': '48px',
  '@layout-zero-trigger-width': '36px',
  '@layout-zero-trigger-height': '42px',
};

const ThemeConfig = _.assign(Base, Layout);
module.exports = ThemeConfig;