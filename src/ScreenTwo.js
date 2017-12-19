//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// create a component
class ScreenTwo extends Component {
  static navigationOptions = {
    tabBarLabale: "Screen 1"
    // drawerIcon: () => {
    //     return(
    //         <MaterialIcons
    //         name=""
    //         size={24}
    //         style=[{color}]
    //         ></MaterialIcons>
    //     );
    // }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>ScreenTwo</Text>

        <Button
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
          title="Open DrawNavigator"
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});

//make this component available to the app
export default ScreenTwo;
