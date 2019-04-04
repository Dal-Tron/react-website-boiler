import React, { Component } from "react";

import MainLayoutWithNav from "../layout/MainLayoutWithNav";

import "./styles/MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <MainLayoutWithNav
        screens={
          <div className="header">
            <div className="header_title">
              Boilerplate
            </div>
          </div>
        }
      />
    );
  }
}

export default MainPage;
