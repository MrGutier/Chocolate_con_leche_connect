import { Drawer} from 'expo-router/drawer';
import { Ionicons} from '@expo/vector-icons'
import React from 'react';
import {Text,Image} from 'react-native';
import CustomDrawer from '@/components/CustomDrawer';
import { Colores, TamanoLetra } from '../themes/Colores';
import GlobalStyles from '../themes/GlobalStryles';
import { useNavigation } from '@react-navigation/native';

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
        drawerIcon: ({size, color}) => <Ionicons name="settings" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="rescate/index" 
      options={{
        drawerLabel: 'Rescate',
        title: 'Pantalla configuracion',
        drawerIcon: ({size, color}) => <Ionicons name="construct" size={size} color={color}/>
      }}
    />
    <Drawer.Screen
      name="refugio/index" 
      options={{
        drawerLabel: 'Refugio',
        title: 'Pantalla configuracion',
        drawerIcon: ({size, color}) => <Ionicons name="construct" size={size} color={color}/>
      }}
    />
  </Drawer>
  )
}

export default LayoutDrawer