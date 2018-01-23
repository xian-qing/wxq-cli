import React from 'react';
import { BrowserRouter as Router, Route ,withRouter} from 'react-router-dom';
// import { connect } from 'react-redux';
import pageComponent from '../views';
const {
  App, home, page1, page2
} = pageComponent;
const AppCfg = require('../../webpack/config');
const { isProduction } = AppCfg;
import Bundle from './Bundle';

const Loading = () => {
  return <div>Loading...</div>;
};
// args = {history, location, match} 三个参数
const CreateComponent = (component) => (args) => (
  <Bundle load={component} isProduction={isProduction} {...args}>
    {
      (Component) => Component ? <Component /> : <Loading />
    }
  </Bundle>
);

const getRouters = () => (
  <Router basename={AppCfg.app.BaseName}>
    <App>
      <Route exact path="/" component={CreateComponent(home)} />
      <Route path="/page1" component={CreateComponent(page1)} />
      <Route path="/page2" component={CreateComponent(page2)} />
    </App>
  </Router>
);

export default getRouters;

