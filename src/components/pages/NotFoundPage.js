import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";

const { Content } = Layout;

class NotFoundPage extends Component {
  render() {
    return (
      <Content>
        <div>
          <div>
            <img alt="404 Page" src="" />
            <h1>404: Page not found.</h1>
            <Button type="primary">
              <Link to="/">Take Me Home</Link>
            </Button>
          </div>
        </div>
      </Content>
    );
  }
}

export default NotFoundPage;
