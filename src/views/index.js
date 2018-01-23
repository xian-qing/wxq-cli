import cfg from '../../webpack/config';
const { isProduction } = cfg;

import App from './App/App';
import home from './home/home';
import page1 from './page1/page1';
import page2 from './page2/page2';

const obj = {
  home, page1, page2,
};
if (!!isProduction) {
  // 生产环境下使用懒加载方法
  Object.keys(obj).forEach((key) => {
    try {
      obj[key] = require('bundle-loader?lazy&name=./js/[name]!./' + key + '/' + key);
    } catch (ex) {
      console.log(ex);
    }
  });
}
export default Object.assign(obj, { App });
