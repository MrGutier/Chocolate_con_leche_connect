import { Drawer} from 'expo-router/drawer';
import { Ionicons} from '@expo/vector-icons'
import React from 'react';
import {Text,Image} from 'react-native';
import CustomDrawer from '@/components/CustomDrawer';
import { Colores, TamanoLetra } from '../themes/Colores';
import GlobalStyles from '../themes/GlobalStryles';
import { useNavigation } from '@react-navigation/native';
import Index from '@/app/login/index';

const LayoutDrawer = () => {
  const navigation = useNavigation();
  return (
    <Drawer 
        drawerContent={CustomDrawer}
        screenOptions={{
            overlayColor: "#194A6E55",
            drawerInactiveTintColor: Colores.darkblue,
            drawerActiveBackgroundColor: Colores.darkblue,
            drawerActiveTintColor: Colores.white,
            drawerItemStyle: {
                borderRadius: 10
            },
            drawerStyle:{
                backgroundColor: Colores.white,
            },
            headerTintColor:Colores.white,
            headerTitleStyle:{
              fontFamily:'WendyOneRegular',
              fontSize:TamanoLetra.h1,
              color:Colores.white,
            },
            headerTitleAlign:"center",
            headerTitle:"Petconnect",
            headerStyle:{
              height:90,
              backgroundColor:Colores.darkblue,
            },
            headerRight:()=>{return <Image style={[GlobalStyles.logo_menu]} source={require('./../../assets/images/elementos_generales/logo_2.png')}></Image>},
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
      name="mensajes/index" 
      options={{
        drawerLabel: 'Mensajes',
        title: 'Pantalla de favoritos',
        drawerIcon: ({size, color}) => <Ionicons name="mail" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="favoritos/index" 
      options={{
        drawerLabel: 'Favoritos',
        title: 'Pantalla de favoritos',
        drawerIcon: ({size, color}) => <Ionicons name="heart-circle" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="configuracion/index" 
      options={{
        drawerLabel: 'Configuración',
        title: 'Pantalla configuracion',
        drawerIcon: ({size, color}) => <Ionicons name="settings" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="rescate/index" 
      options={{
        drawerLabel: 'Patitas al rescate',
        title: 'Pantalla configuracion',
        drawerIcon: ({size, color}) => <Ionicons name="paw" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="refugio/index" 
      options={{
        drawerLabel: 'Refugio de patitas',
        title: 'Pantalla refugio',
        drawerIcon: ({size, color}) => <Ionicons name="sparkles" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="comunidad_animal/index" 
      
      options={{
        drawerLabel: 'Comunidad animal',
        title: 'Pantalla comunidad',
        drawerIcon: ({size, color}) => <Ionicons name="book" size={size} color={color}/>
      }}
    />
    <Drawer.Screen name="refugio/detalles/[id]"
        options={{
            drawerItemStyle: { display: 'none' }
        }}
    />
     <Drawer.Screen name="productos/index"
        options={{
            drawerItemStyle: { display: 'none' }
        }}
    />
     <Drawer.Screen name="productos copy/index"
        options={{
            drawerItemStyle: { display: 'none' }
        }}
    />
  </Drawer>
  )
}

export default LayoutDrawer