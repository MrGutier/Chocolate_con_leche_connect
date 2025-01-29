
import { Link, Redirect } from "expo-router";
import { Pressable, StyleProp, Text, TextStyle, View, ViewStyle, Image, ImageSourcePropType, ImageStyle } from 'react-native';
import { GlobalStyles } from "../themes/GlobalStryles";
import { TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { Colores } from "../themes/Colores";

interface Props{

    descripcion:string,
    numComentarios:number,
    Estilo_Caja?:StyleProp<ViewStyle>,
    Estilo_Texto?:StyleProp<TextStyle>,
    onPress?: () => void;

}

export default function DiscussionBlock({Estilo_Caja,descripcion,Estilo_Texto,numComentarios,onPress}:Props) {


  return(
    
          <Pressable style={[GlobalStyles.discussion_box,GlobalStyles.section_row,Estilo_Caja]} onPress={onPress}>
            <Text style={[GlobalStyles.info_text,Estilo_Texto]}>
                {descripcion}
            </Text>
            
            <View style={{position:"absolute",right:15,bottom:15,zIndex:9}}>
                <Ionicons name="chatbubble" size={30} color={Colores.darkblue}></Ionicons>
                <View style={{position:"absolute",right:9,bottom:7,alignContent:"center",alignItems:"center"}}>
                    <Text style={{color:Colores.white,}}>{numComentarios}</Text>
                </View>
                
            </View>
            
          </Pressable>

  )
}