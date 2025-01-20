import { Link, router } from "expo-router";
import { Pressable, Text, View, Image } from 'react-native';
import { GlobalStyles } from "../themes/GlobalStryles";
import Input_form from "../components/input_form";
import Button_custom from '../components/button_custom';
import { navigate } from "expo-router/build/global-state/routing";
import Custom_link from "../components/custom_link";

export default function Index() {
  return(
    <View
        style={[GlobalStyles.pantallaPrincipal,GlobalStyles.background_white]}
    >
        <Text style={[GlobalStyles.letra_titulo_arriba,GlobalStyles.margen_arriba_pequeno_mediano,GlobalStyles.text_dark_blue]}>Registrate en</Text>
        <Text style={[GlobalStyles.letra_titulo,GlobalStyles.text_dark_blue]}>PETCONNECT</Text>
        <Image style={[GlobalStyles.logo,GlobalStyles.margen_arriba_pequeno]} source={require('./../../assets/images/elementos_generales/logo_2.png')}>

        </Image>

        <View style={[GlobalStyles.form_login,GlobalStyles.background_dark_blue,GlobalStyles.margen_arriba_pequeno]}>

          <View style={GlobalStyles.fila}>
            <Image style={[GlobalStyles.imagen_pequena,GlobalStyles.rotar_45_izquierda]} source={require('./../../assets/images/elementos_generales/huella_blanca.png')}>

            </Image>
            <Text style={[GlobalStyles.h2,GlobalStyles.negrita,GlobalStyles.texto_oscuro,GlobalStyles.text_white]}>¡Hazte parte del refugio!</Text>
            <Image style={[GlobalStyles.imagen_pequena,GlobalStyles.rotar_45]} source={require('./../../assets/images/elementos_generales/huella_blanca.png')}>

            </Image>
          </View>
          <Input_form nombre="Nombre"></Input_form>
          <Input_form nombre="Email"></Input_form>
          <Input_form nombre="Contraseña" TextoSeguro={true}></Input_form>
          <Input_form nombre="Repetir contraseña" TextoSeguro={true}></Input_form>
          <View style={[GlobalStyles.fila,GlobalStyles.width_80]}>
              <Button_custom nombre="Registrarse" Estilo_Texto={[GlobalStyles.negrita,GlobalStyles.text_dark_blue]} Estilo_Caja={[GlobalStyles.fondo_azul_oscuro,GlobalStyles.background_white]} onPress={()=>{router.push('/drawer')}}>

              </Button_custom>
          </View>
        </View>
        <Custom_link nombre="< Acceder" Estilo_Texto={GlobalStyles.remove_underline} Estilo_Caja={[GlobalStyles.width_80,GlobalStyles.margen_arriba_pequeno]} onPress={()=>{router.push('/login')}}>

        </Custom_link>
        
    
  </View>
  )
}