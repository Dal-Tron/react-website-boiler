import React from "react";

import "./styles/Logo.css";

const Logo = props => {
  return (
    <div className={props.spin ? "logo-container logo-spin" : "logo-container"}>
      <img
        className={props.big ? "logo-big" : "logo-small"}
        alt="Logo"
        src={props.logo}
      />
      {props.children}
    </div>
  );
};

export default Logo;
