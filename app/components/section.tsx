
import { Link, Redirect } from "expo-router";
import { Pressable, StyleProp, Text, TextStyle, View, ViewStyle, Image, ImageSourcePropType, ImageStyle } from 'react-native';
import { GlobalStyles } from "../themes/GlobalStryles";
import { TextInput } from "react-native-gesture-handler";

interface Props{

    nombre:string,
    image:ImageSourcePropType,
    descripcion:string,
    Estilo_Caja?:StyleProp<ViewStyle>,
    Estilo_Texto?:StyleProp<TextStyle>,
    Estilo_Imagen?:StyleProp<ImageStyle>,
    onPress?: () => void;

}

export default function Section({nombre,Estilo_Caja,descripcion,Estilo_Texto,Estilo_Imagen,image,onPress}:Props) {


  return(
    
          <Pressable style={[GlobalStyles.section_box,Estilo_Caja]} onPress={onPress}>
            <View style={[GlobalStyles.section_row]}>
                <View style={[GlobalStyles.section_circle]}>
                    <Image style={[GlobalStyles.section_logo,Estilo_Imagen]} source={image}></Image>
                </View>
                
                <View style={[GlobalStyles.section_text]}>
                    <Text style={[GlobalStyles.h3]}>{nombre}</Text>
                    <Text style={[GlobalStyles.normal_text,Estilo_Texto]} numberOfLines={2}>{descripcion}</Text>
                </View>
            </View>
          </Pressable>

  )
}