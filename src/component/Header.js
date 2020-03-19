import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}> JOJO Albums </Text>       
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FFBB00",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    paddingTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  textStyle: {
      color:"#E93EFF",
    fontSize: 25
  
  },
  
});

export default Header;