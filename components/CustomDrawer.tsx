import { View, Text, Image } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { GlobalStyles } from '@/app/themes/GlobalStryles'


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
    </DrawerContentScrollView>
  )
}

export default CustomDrawer