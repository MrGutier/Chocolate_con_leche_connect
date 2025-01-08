import { Drawer} from 'expo-router/drawer';
import { Ionicons} from '@expo/vector-icons'
import React from 'react';
import {Text} from 'react-native';
import CustomDrawer from '@/components/CustomDrawer';

const LayoutDrawer = () => {
  return (
    <Drawer 
        drawerContent={CustomDrawer}
        screenOptions={{
            overlayColor: 'rgba(0,0,0,0.4)',
            drawerInactiveTintColor: 'black',
            drawerActiveBackgroundColor: 'indigo',
            drawerActiveTintColor: 'white',
            drawerItemStyle: {
                borderRadius: 10
            }
        }}>
    <Drawer.Screen
      name="index" 
      options={{
        drawerLabel: 'Inicio',
        title: 'Pantalla inicio',
        drawerIcon: ({size, color}) => <Ionicons name="home" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="productos/index" 
      options={{
        drawerLabel: 'Productos',
        title: 'Listado de peliculas',
        drawerIcon: ({size, color}) => <Ionicons name="film" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="configuracion/index" 
      options={{
        drawerLabel: 'Configuración',
        title: 'Pantalla configuracion',
        drawerIcon: ({size, color}) => <Ionicons name="construct" size={size} color={color}/>
      }}
    />
  </Drawer>
  )
}

export default LayoutDrawer