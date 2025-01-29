import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useLocalSearchParams, Redirect } from 'expo-router'
import { perros } from '@/app/data/perros.data';
import GlobalStyles from '@/app/themes/GlobalStryles';

const ScreenPerro= () => {


    const { id } = useLocalSearchParams(); 
    const perro = perros.find(dog => dog.id == id);


    if ( !perro ) {
        return <Redirect href="/"/> }
    return (
    
    <View style={GlobalStyles.pantallaDetalles}>
        <View style={[GlobalStyles.tarjeta_detalles,GlobalStyles.background_white,GlobalStyles.margen_arriba_mediano,{width:'85%'},{height:'85%'}]}>
            <View style={GlobalStyles.contenedor_detalles}>
                <View style={{flex:1,alignItems:'center'}}>   
                    <Image source={perro.foto} style={GlobalStyles.image_card_details}></Image>   
                    <Text style={[GlobalStyles.h2, GlobalStyles.text_dark_blue]}>{perro.nombre}</Text>
                    <View style={GlobalStyles.grid}>
                        <Text style={[GlobalStyles.normal_text,GlobalStyles.text_dark_blue]}>{perro.sexo}</Text>
                        <Text style={[GlobalStyles.normal_text,GlobalStyles.text_light_blue]}>|</Text>
                        <Text style={[GlobalStyles.normal_text,GlobalStyles.text_dark_blue]}>{perro.anos}</Text>
                        <Text style={[GlobalStyles.normal_text,GlobalStyles.text_light_blue]}>|</Text>
                        <Text style={[GlobalStyles.normal_text,GlobalStyles.text_dark_blue]}>{perro.raza}</Text>

                        <View>

                        </View>
    
                    </View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default ScreenPerro
