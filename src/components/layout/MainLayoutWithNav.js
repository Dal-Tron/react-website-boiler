import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout } from "antd";

import Navigation from "./Navigation";

const { Content } = Layout;

class MainLayoutWithNav extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <Content>{this.props.screens}</Content>
      </Layout>
    );
  }
}

export default withRouter(MainLayoutWithNav);
