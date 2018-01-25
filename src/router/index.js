import React from "react";
import { Platform, BackHandler, ReactNative } from "react-native";
import * as HomeComponent from "./../page/home/views/Home";
import connectComponent from "./../util/connectComponent";
import * as CustomSceneConfigs from "./../util/sceneConfig";

const Home = connectComponent(HomeComponent);

const { SceneConfigs } = ReactNative;

class Router {
  constructor(navigator) {
    this.navigator = navigator;
    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", () => {
        const routesList = this.navigator.getCurrentRoutes();
        const currentRoutes = routesList[routesList.length - 1];
        if (currentRoutes.name !== "home") {
          navigator.pop();
          return true;
        }
        return false;
      });
    }
  }

  push(props = {}, route) {
    const routesList = this.navigator.getCurrentRoutes();
    const nextIndex = routesList[routesList.length - 1].index + 1;
    route.props = props;
    route.index = nextIndex;
    route.sceneConfig = route.sceneConfig
      ? route.sceneConfig
      : CustomSceneConfigs.customFloatFromRight;
    route.id = _.uniqueId();
    route.component = connectComponent(route.component);
    this.navigator.push(route);
  }

  pop() {
    this.navigator.pop();
  }
}

export default Router;
