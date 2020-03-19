import React from "react";
import { View } from "react-native";
import Header from "./src/component/Header";
import AlbumList from "./src/component/AlbumList";

const App = () => {
  return (
    
     <View>
      <Header />
      <AlbumList />
    </View>
  );
};

export default App;