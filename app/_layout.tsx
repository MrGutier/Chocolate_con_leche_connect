import {GestureHandlerRootView} from 'react-native-gesture-handler'
import { Slot, SplashScreen } from "expo-router";
import React, { useEffect } from "react";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  const [loaded] = useFonts({
    WendyOneRegular: require("../assets/fonts/WendyOneRegular.ttf"),
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    Poppins_bold: require("../assets/fonts/Poppins-Bold.ttf"),
  
  });

  useEffect(()=>{
    if(loaded){
      SplashScreen.hideAsync();
    }
  },[loaded]);
  
  if(!loaded){
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
}
