/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { DrawerNavigator } from "react-navigation";
import ScreenFirst from "./ScreenFirst";
import ScreenTwo from "./ScreenTwo";

const DrawerExample = DrawerNavigator(
  {
    ScreenFirst: { screen: ScreenFirst },
    ScreenTwo: { screen: ScreenTwo }
  }
  //   {
  //     drawerPosition: "right",
  //     drawerWidth: 100
  //   }
);
export default DrawerExample;
