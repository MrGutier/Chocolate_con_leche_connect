import { View, Text,Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/app/themes/GlobalStryles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Button_custom from '../../components/button_custom';
import Infobox from '@/app/components/infobox';


const ScreenRescate = () => {
  return (
    <ScrollView>
        <Text style={[GlobalStyles.h2,GlobalStyles.text_dark_blue,GlobalStyles.margen_arriba_pequeno,GlobalStyles.margin_left_small]}>Patitas al rescate</Text>
        <Text style={[GlobalStyles.normal_text,GlobalStyles.text_dark_blue,GlobalStyles.margin_left_small,GlobalStyles.margin_right_small]}>
        Indica el punto donde un animal, una colonia o una situación requiere atención y descríbela para que podamos actuar juntos
        </Text>
        <View style={[GlobalStyles.margin_left_small,GlobalStyles.margin_right_small,GlobalStyles.map_box,GlobalStyles.margen_arriba_pequeno,GlobalStyles.miscelaneo]}>
            <Image style={[GlobalStyles.map_image]} source={require('./../../../assets/images/mapa.png')}>

            </Image>
            <View style={[GlobalStyles.containerCentrado]}>
                <TextInput style={[GlobalStyles.background_white, GlobalStyles.margen_arriba_pequeno,GlobalStyles.margen_abajo_pequeno,GlobalStyles.box_size_big]}
                editable
                multiline
                numberOfLines={4}
                placeholder={"Decribe la situación aquí..."}
                 >
                
                </TextInput>
                <Button_custom nombre='Enviar' Estilo_Caja={GlobalStyles.fondo_azul_oscuro}></Button_custom>
            </View>
            
        </View>
        <Infobox Estilo_Caja={[GlobalStyles.margen_arriba_pequeno,GlobalStyles.margen_abajo_pequeno]} descripcion='Selecciona una ubicación en el mapa para añadir o ver un punto de rescate.'></Infobox>
    </ScrollView>
  )
}

export default ScreenRescate