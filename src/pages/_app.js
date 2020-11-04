import React from "react";
import App from "next/app";

import { Provider } from "react-redux";
import createReducer from "../redux";

import "../../styles/antd.less";
import { createStore } from "redux";
import reducers from "../redux";

class MyApp extends App {

  render() {

    const { Component, pageProps } = this.props;
    let store = createStore(reducers)

    return(
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

    );


  }

}

export default MyApp;