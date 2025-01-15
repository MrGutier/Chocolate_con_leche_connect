import { View, Text } from 'react-native'
import React from 'react'
import { GlobalStyles } from '@/app/themes/GlobalStryles'


const ScreenConfiguracion = () => {
  return (
    <View style={GlobalStyles.containerCentrado}>
      <Text style= {GlobalStyles.titulo}>Screen Configuracion</Text>
    </View>
  )
}

export default ScreenConfiguracion