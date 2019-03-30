import React, { Component } from "react";
import { connect } from "react-redux";

import { Layout } from "antd";
import Logo from "./Logo";

import { updateWidth, updateHeight } from "../../actions/viewport";

import "./styles/Loading.css";

const { Content } = Layout;

class Loading extends Component {
  componentDidMount() {
    this.props.updateWidth(window.innerWidth);
    this.props.updateHeight(window.innerHeight);
  }

  render() {
    return (
      <Content className="loading-wrapper">
        <Logo big spin />
      </Content>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateWidth: width => dispatch(updateWidth(width)),
  updateHeight: height => dispatch(updateHeight(height))
});

export default connect(
  undefined,
  mapDispatchToProps
)(Loading);
