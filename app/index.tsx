import { Link, RelativePathString } from "expo-router";
import { Text, View } from "react-native";
import { Botonmenu } from "./menu/Botonmenu";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>MENÚ</Text>

      <Botonmenu label="IR A PELICULAS" link={'/peliculas' as RelativePathString}></Botonmenu>
      <Botonmenu label="IR A SETTINGS" link={'/settings' as RelativePathString}></Botonmenu>

    </View>
  );
}
