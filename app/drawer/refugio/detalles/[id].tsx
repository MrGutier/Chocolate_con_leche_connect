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
        <View style={[GlobalStyles.form_login,GlobalStyles.background_white,GlobalStyles.margen_arriba_mediano,{width:'85%'},{height:'85%'}]}>

            <View style={styles.contenedor}>
            
            <View style={{flex:1}}>      
            <Text style={styles.titulo}>{perro.nombre}</Text>
            <Text>{perro.sexo}</Text>
            <Text>{perro.anos}</Text>
            <Image source={perro.foto} style={GlobalStyles.image_card}></Image></View>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10 },
    imagen: {
        width: 100,
        height: 170,
        borderRadius: 10,
        marginRight: 10 },
    titulo: {
        fontSize: 22 },
    enlace: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: 'blue',
        alignSelf: 'flex-end' }
});
export default ScreenPerro
