import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ParallaxProvider } from "react-scroll-parallax";
import * as serviceWorker from "./serviceWorker";

import configureStore from "./store/configureStore";
import { updateServiceWorker } from "./actions/serviceWorker";
import { firebase } from "./firebase/firebase";
import AppRouter from "./routers/AppRouter";

import "normalize.css/normalize.css";
import "./styles/index.css";

const store = configureStore();
const config = {
  onUpdate: () => {
    store.dispatch(updateServiceWorker());
  }
};

const application = (
  <Provider store={store}>
    <ParallaxProvider>
      <AppRouter />
    </ParallaxProvider>
  </Provider>
);

serviceWorker.register(config);

firebase.auth().onAuthStateChanged(user => {
  ReactDOM.render(application, document.getElementById("root"));
});
