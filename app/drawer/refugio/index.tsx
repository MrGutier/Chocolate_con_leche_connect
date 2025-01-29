import { View, Text,Image, ImageSourcePropType, FlatList } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/app/themes/GlobalStryles'
import { Pressable, ScrollView, TextInput } from 'react-native-gesture-handler'
import Button_custom from '../../components/button_custom';
import Infobox from '@/app/components/infobox';
import Custom_link from '@/app/components/custom_link';
import { router } from 'expo-router';
import {perros} from '@/app/data/perros.data';


const ScreenRefugio = () => {


  const resolveAssetSource = require('react-native/Libraries/Image/resolveAssetSource');

  //para generar imagen haz estas dos líneas
  const conejo:ImageSourcePropType = require('./../../../assets/images/catalogo_adopciones/conejito animado.png');
  let resolvedImage:NodeRequire = resolveAssetSource(conejo);
  //
  const gato:ImageSourcePropType = require('./../../../assets/images/catalogo_adopciones/gatito animado.png');
  resolvedImage = resolveAssetSource(gato);
  
  const perro:ImageSourcePropType = require('./../../../assets/images/catalogo_adopciones/perrito animado.png');
  resolvedImage = resolveAssetSource(perro);


  return (
    <ScrollView>
        

        <Text style={[GlobalStyles.h2,GlobalStyles.text_dark_blue,GlobalStyles.margen_arriba_pequeno,GlobalStyles.margin_left_small]}>Refugio de patitas</Text>
        <Infobox Estilo_Caja={[GlobalStyles.margen_arriba_pequeno,GlobalStyles.margen_abajo_pequeno]} descripcion='Adoptar es un compromiso para toda la vida, piénsalo bien antes de dar el paso. Si no puedes cuidarlo hoy, mañana y siempre; no adoptes.'/>
        
        <Text style={[GlobalStyles.h3,GlobalStyles.text_dark_orange,GlobalStyles.margen_arriba_pequeno,GlobalStyles.margin_left_small]}>Categorías</Text>

        <View style={[GlobalStyles.fila,GlobalStyles.align_left]}>
          <ScrollView horizontal={true}> 
          <View style={[GlobalStyles.section_circle, GlobalStyles.margin_left_small]}>
            <Image style={[GlobalStyles.section_logo]} source={conejo}></Image>
          </View>
          <View style={[GlobalStyles.section_circle, GlobalStyles.margin_left_small]}>
            <Image style={[GlobalStyles.section_logo]} source={gato}></Image>
          </View>
          <View style={[GlobalStyles.section_circle, GlobalStyles.margin_left_small]}>
            <Image style={[GlobalStyles.section_logo]} source={perro}></Image>
          </View>
          <View style={[GlobalStyles.section_circle, GlobalStyles.margin_left_small]}>
            <Image style={[GlobalStyles.section_logo]} source={conejo}></Image>
          </View>
          <View style={[GlobalStyles.section_circle, GlobalStyles.margin_left_small]}>
            <Image style={[GlobalStyles.section_logo]} source={gato}></Image>
          </View>
          <View style={[GlobalStyles.section_circle, GlobalStyles.margin_left_small]}>
            <Image style={[GlobalStyles.section_logo]} source={perro}></Image>
          </View>
          
          </ScrollView>
          
        </View>
        <Custom_link nombre="ver más >" Estilo_Texto={[GlobalStyles.remove_underline,GlobalStyles.text_dark_orange,GlobalStyles.bold_text]} Estilo_Caja={{alignSelf: 'flex-end'}} onPress={()=>{router.push('./')}}>
        </Custom_link>

        <Text style={[GlobalStyles.h3,GlobalStyles.text_dark_blue,GlobalStyles.margen_arriba_pequeno,GlobalStyles.margin_left_small]}>En adopción</Text>

        <FlatList
          data={perros}
          keyExtractor={(item)=> item.id}
          renderItem={({item}) => (
          
            <View style={[GlobalStyles.card,GlobalStyles.margen_abajo_pequeno]}>
              <Pressable key={item.id}  
              onPress={() => {
                router.push({pathname:`./refugio/detalles/${item.id}`});
                 }}>   
                 <Image source={item.foto} style={GlobalStyles.image_card}></Image>
              </Pressable>
              <View style={GlobalStyles.grid}>
                <Text style={GlobalStyles.nombre}>{item.nombre}</Text>
                <Text style={GlobalStyles.description}>{item.sexo}</Text>
                <Text style={GlobalStyles.description}>{item.anos} años</Text>
              </View>
            </View>
          )}
          numColumns={2}
          columnWrapperStyle={GlobalStyles.grid} 
        />  
        
    </ScrollView>
  )
}

export default ScreenRefugio

function resolveAssetSource(conejo: ImageSourcePropType) {
  throw new Error('Function not implemented.');
}
