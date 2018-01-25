import "babel-polyfill";
import "fetch-detector";
import "fetch-ie8";
import { AppRegistry } from "react-native";
import App from "./../src/index";

AppRegistry.registerComponent("CloudMusic", () => App);

const app = document.createElement("div");
document.body.appendChild(app);

AppRegistry.runApplication("CloudMusic", {
  rootTag: app
});
