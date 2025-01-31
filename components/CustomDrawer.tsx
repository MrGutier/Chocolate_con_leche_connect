import { View, Text, Image } from 'react-native'
import { Drawer} from 'expo-router/drawer';
import { Ionicons} from '@expo/vector-icons'
import { Colores } from  '@/app/themes/Colores';

import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { GlobalStyles } from '@/app/themes/GlobalStryles'
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { router } from 'expo-router'





const CustomDrawer = ( props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={GlobalStyles.drawerUserContainer}>
        
        <Image style={GlobalStyles.drawerUserImg}
                source={require('../assets/user.jpg')}
        />
        <Text style={GlobalStyles.h3}>Lamine Yamal</Text>
        <Text>@tinkiwinki</Text>

      </View>

      <DrawerItemList {...props}/>
      <DrawerItem
        icon={() => <Ionicons name="log-out" size={27} color={Colores.darkblue}/>}
        inactiveTintColor = {Colores.darkblue }
        label="Cerrar sesión"
        onPress={() =>{router.push('../../login')}}
      />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer