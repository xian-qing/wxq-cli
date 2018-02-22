import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Utility, ApiInfo } from 'components';
import * as CommonActions from 'reducers/reduxCommon';
import './page1.scss'
@connect((state) => {
  return ({
    UserList: state.Common.UserList,
    Demo: state.Common.Demo,
    MapPlacelist: state.Common.MapPlacelist
  })
}, { ...CommonActions })
export default class Page1 extends Component {
  static propTypes = {
    UserList: PropTypes.any,
    Demo: PropTypes.any,
    MapPlacelist: PropTypes.any,
    onApiGet: PropTypes.func
  }

  constructor(props) {
    console.log(props)
    super(props);
    this.state = {};
  }

  render() {
    const { UserList } = this.props;
    return (
      <div className="page1">
        page112
      </div>

    );
  }
}
