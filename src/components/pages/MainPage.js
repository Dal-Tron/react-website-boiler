import React, { Component } from "react";
import { Layout } from "antd";

import MainLayoutWithNav from "../layout/MainLayoutWithNav";

const { Content } = Layout;

class MainPage extends Component {
  render() {
    return (
      <MainLayoutWithNav
        screens={
          <div>
            <Content>
              <p>Content</p>
            </Content>
          </div>
        }
      />
    );
  }
}

export default MainPage;
