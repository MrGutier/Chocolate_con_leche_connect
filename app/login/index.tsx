import { Link } from "expo-router";
import { Pressable,Text,View } from "react-native";

export default function Index() {
  return(
    <View
        style={
          {
            flex:1,
            backgroundColor:'#194A6E',
          }
        }
    >
        <Text>Bienvenido a</Text>
        <Text>PETCONNECT</Text>
    <Pressable >
        <Link href="../drawer">login</Link>
    </Pressable>
  </View>
  )
}