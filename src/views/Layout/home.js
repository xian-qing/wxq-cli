import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch,Route } from 'react-router-dom';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any,                                // 子项
    location: PropTypes.object,
    Title: PropTypes.string,
  }
  static contextTypes = {
    router: PropTypes.object.isRequired,
    history: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>
        home
        {this.props.children}
      </div>
    );
  }
}
