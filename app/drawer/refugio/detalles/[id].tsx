import { View, Text, StyleSheet, Image, ImageSourcePropType, BackHandler } from 'react-native'
import React from 'react'
import { useLocalSearchParams, Redirect, router, useFocusEffect } from 'expo-router'
import { perros } from '@/app/data/perros.data';
import GlobalStyles from '@/app/themes/GlobalStryles';
import Button_custom from '@/app/components/button_custom';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { Colores, TamanoLetra } from '@/app/themes/Colores';


const ScreenPerro= () => {


    const { id } = useLocalSearchParams(); 
    const perro = perros.find(dog => dog.id == id);

    if ( !perro ) {
        return <Redirect href="/"/> }

    useFocusEffect(
    React.useCallback(() => {
        const onBackPress = () => {
        
        router.push('/drawer/refugio');
        return true; 
        };

        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
    );

    let resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');
    const telefon:ImageSourcePropType = require('./../../../../assets/images/catalogo_adopciones/telefono.png');
    let resolvedImage:NodeRequire = resolveAssetSource(telefon);
    const mail:ImageSourcePropType = require('./../../../../assets/images/elementos_generales/mensajes.png');
    resolvedImage = resolveAssetSource(mail);
    const ana:ImageSourcePropType = require('./../../../../assets/images/catalogo_adopciones/Ana.png');
    resolvedImage = resolveAssetSource(ana);
    const mapa:ImageSourcePropType = require('./../../../../assets/images/catalogo_adopciones/mapa2.png');
    resolvedImage = resolveAssetSource(mapa);


    return (
    <ScrollView>

    
    <View style={GlobalStyles.pantallaDetalles}>
        <View style={[GlobalStyles.tarjeta_detalles,GlobalStyles.background_white]}>
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
                    </View>

                    <View style={GlobalStyles.caja_descripcion}>

                        <View style={{flexDirection:"row"}}>
                            <View style={{width:"50%",flexDirection:"row"}}>
                                <Image style={[GlobalStyles.section_foto,GlobalStyles.ball]} source={ana}></Image>
                                <View style={{flexDirection:"column"}}>
                                    <Text style={[GlobalStyles.bold_text,GlobalStyles.texto_oscuro]}>{perro.cuidador}</Text>
                                    <View style={{flexDirection:"row"}}>
                                        <Image style={GlobalStyles.mini_logo} source={mapa}></Image>
                                        <Text style={[GlobalStyles.small_text,GlobalStyles.texto_oscuro]}>{perro.lugar}</Text>
                                    </View>
                                    
                                </View> 
                            </View>
                            <View style={{width:"50%",flexDirection:"row-reverse"}}>
                                <View style={[GlobalStyles.section_circle_detalles]}>
                                    <Ionicons name="call" size={20} color={Colores.white}></Ionicons>
                                </View>
                                <View style={[GlobalStyles.section_circle_detalles]}>
                                    <Ionicons name="mail" size={20} color={Colores.white}></Ionicons>
                                </View>
                            </View>
                        </View>

                        <Text style={[GlobalStyles.small_text,GlobalStyles.texto_oscuro]}>{perro.descripcion}</Text>
                    </View>
                    <Button_custom nombre="Dar un hogar" Estilo_Caja={[GlobalStyles.fondo_naranja,GlobalStyles.width_80]} Estilo_Texto={[GlobalStyles.negrita,GlobalStyles.text_white]} onPress={()=>{router.push('/drawer')}}> 
                    </Button_custom>
                </View>
            </View>
        </View>
    </View>
    </ScrollView>
  )
}

export default ScreenPerro
function resolveAssetSource(telefon: ImageSourcePropType): NodeRequire {
    throw new Error('Function not implemented.');
}

