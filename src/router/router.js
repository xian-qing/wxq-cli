import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const AppCfg = require('../../webpack/config');


import {asyncComponent} from './asyncCompont';

const App = asyncComponent(() => import(/* webpackChunkName: "js/App" */ "../views/App/index.js"));
const home = asyncComponent(() => import(/* webpackChunkName: "js/home" */ "../views/home/index.js"));
//import home from '../views/home/index'
const page2 = asyncComponent(() => import(/* webpackChunkName: "js/page2" */ "../views/page2/index.js"));

const getRouters = () => (
  <Router basename={AppCfg.app.BaseName}>
    <Switch>
      <Route path="/home" component={home} />
      <Route path="/page2" component={page2} />
    </Switch>
  </Router>
);

export default getRouters;

