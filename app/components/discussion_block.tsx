
import { Link, Redirect } from "expo-router";
import { Pressable, StyleProp, Text, TextStyle, View, ViewStyle, Image, ImageSourcePropType, ImageStyle } from 'react-native';
import { GlobalStyles } from "../themes/GlobalStryles";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Colores } from "../themes/Colores";

interface Props{

    descripcion:string,
    Estilo_Caja?:StyleProp<ViewStyle>,
    Estilo_Texto?:StyleProp<TextStyle>,
    onPress?: () => void;

}

export default function DiscussionBlock({Estilo_Caja,descripcion,Estilo_Texto,onPress}:Props) {


  return(
    
          <Pressable style={[GlobalStyles.discussion_box,GlobalStyles.section_row,Estilo_Caja]} onPress={onPress}>
            <Text style={[GlobalStyles.info_text,Estilo_Texto]}>
                {descripcion}
            </Text>
            <Ionicons name="information-circle" size={60} color={Colores.white}></Ionicons>
          </Pressable>

  )
}