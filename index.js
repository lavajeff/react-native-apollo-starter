import React, { Component } from "react";
import { AppRegistry } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { name as appName } from "./app.json";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return <AppNavigator />;
  }
}

AppRegistry.registerComponent(appName, () => App);
