import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/app/themes/GlobalStryles'


const ScreenProductos = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Screen Mensajes</Text>
    </View>
  )
}

export default ScreenProductos