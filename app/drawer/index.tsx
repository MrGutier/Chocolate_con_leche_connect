import { View, Text, ImageSourcePropType,Image } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../themes/GlobalStryles'
import Section from '../components/section'
import { ScrollView } from 'react-native-gesture-handler'
import { router } from 'expo-router'


const ScreenPrincipal = () => {
  
  const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');
  const image:ImageSourcePropType = require('./../../assets/images/home/huellitas_patas_en_marcha.png');
  let resolvedImage:NodeRequire = resolveAssetSource(image);

  //para generar imagen haz estas dos líneas
  const patitas_rescate:ImageSourcePropType = require('./../../assets/images/home/huella_patitas_al_rescate.png');
  resolvedImage = resolveAssetSource(patitas_rescate);
  //
  const adopt_me:ImageSourcePropType = require('./../../assets/images/home/adopt_me.png');
  resolvedImage = resolveAssetSource(adopt_me);
  
  const comunidad_animal:ImageSourcePropType = require('./../../assets/images/home/manos_agarrando_huellita.png');
  resolvedImage = resolveAssetSource(comunidad_animal);

  const lupa:ImageSourcePropType = require('./../../assets/images/home/lupa.png');
  resolvedImage = resolveAssetSource(lupa);
  return (
    <ScrollView >
      <Text style={[GlobalStyles.h2,GlobalStyles.text_dark_orange,GlobalStyles.margen_arriba_pequeno,GlobalStyles.margin_left_small]}>Secciones</Text>
      <Section onPress={()=>{router.push('./drawer/rescate')}} image={patitas_rescate} nombre='Patitas al rescate'descripcion='Encuentra a quienes necesitan ayuda con los que están dispuestos a darla.'></Section>
      <Section onPress={()=>{router.push('./drawer/refugio')}} image={adopt_me} nombre='Refugio de patitas'descripcion='¡Adopta! Echa un vistazo a los animales en adopción.'></Section>
      <Section onPress={()=>{router.push('./register')}} image={comunidad_animal} nombre='Comunidad Animal'descripcion='Encuentra a quienes necesitan ayuda con los que están dispuestos a darla.'></Section>
      <Section image={image} nombre='Patas en marcha'descripcion='Encuentra a quienes necesitan ayuda con los que están dispuestos a darla.'></Section>
      <Section image={lupa} nombre='Sobre Petconnect'descripcion='Encuentra a quienes necesitan ayuda con los que están dispuestos a darla.'></Section>
      <View style={[GlobalStyles.miscelaneo,GlobalStyles.margen_arriba_pequeno]}>
        <Text style={[GlobalStyles.h2,GlobalStyles.texto_oscuro,GlobalStyles.margen_arriba_pequeno,GlobalStyles.margin_left_small]}>Protectoras en colaboración</Text>
        <View style={[GlobalStyles.fila,GlobalStyles.align_left,GlobalStyles.padding_small_bottom]}>
          <Image style={[GlobalStyles.logo,GlobalStyles.margin_left_small,GlobalStyles.ball]} source={require('./../../assets/images/home/logo_protectora1.png')}></Image>
          <Image style={[GlobalStyles.logo,GlobalStyles.margin_left_small,GlobalStyles.ball]} source={require('./../../assets/images/home/logo_protectora2.png')}></Image>
        </View>
      </View>
    </ScrollView>
  )
}

export default ScreenPrincipal