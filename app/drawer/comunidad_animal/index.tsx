import { View, Text,Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/app/themes/GlobalStryles'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import Button_custom from '../../components/button_custom';
import Infobox from '@/app/components/infobox';
import DiscussionBlock from '@/app/components/discussion_block';


const ScreenComunidadAnimal = () => {
  return (
    <ScrollView>
        <Text style={[GlobalStyles.h2,GlobalStyles.text_dark_blue,GlobalStyles.margen_arriba_pequeno,GlobalStyles.margin_left_small]}>Comunidad animal</Text>
        <Infobox Estilo_Caja={[GlobalStyles.margen_arriba_pequeno,GlobalStyles.margen_abajo_pequeno]} descripcion='Descubre eventos solidarios creados por la comunidad: actividades deportivas, caminatas y mucho más. 
Cada participación suma para ayudar a los animales que más lo necesitan. ¡Únete y sé parte del cambio!'></Infobox>
        <Text style={[GlobalStyles.text_dark_blue,GlobalStyles.margen_arriba_pequeno,GlobalStyles.margin_left_small,GlobalStyles.normal_text,GlobalStyles.text_size_medium,GlobalStyles.margin_bottom_extra_small]}>Temas de discusión</Text>
        <DiscussionBlock descripcion='Guías de alimentación B.A.R.F para tu mascota.' numComentarios={13}></DiscussionBlock>
        <DiscussionBlock descripcion='Como empezar a adiestrar a tu mascota' numComentarios={7}></DiscussionBlock>
        <DiscussionBlock descripcion='Consejos para ayudarlo a sobrellevar la ola de calor.' numComentarios={46}></DiscussionBlock>
        <DiscussionBlock descripcion='Guías de alimentación B.A.R.F para tu mascota.' numComentarios={13}></DiscussionBlock>
        <DiscussionBlock descripcion='Como empezar a adiestrar a tu mascota' numComentarios={7}></DiscussionBlock>
        <DiscussionBlock descripcion='Consejos para ayudarlo a sobrellevar la ola de calor.' numComentarios={46}></DiscussionBlock>
        <DiscussionBlock descripcion='Guías de alimentación B.A.R.F para tu mascota.' numComentarios={13}></DiscussionBlock>
        <DiscussionBlock descripcion='Como empezar a adiestrar a tu mascota' numComentarios={7}></DiscussionBlock>
        <DiscussionBlock descripcion='Consejos para ayudarlo a sobrellevar la ola de calor.' numComentarios={46}></DiscussionBlock>

    </ScrollView>
  )
}

export default ScreenComunidadAnimal