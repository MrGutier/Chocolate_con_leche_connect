import { Link } from "expo-router";
import { Pressable, Text, View, Image } from 'react-native';
import { GlobalStyles } from "../themes/GlobalStryles";
import Input_form from "../components/input_form";
import Button_custom from '../components/button_custom';
import { navigate } from "expo-router/build/global-state/routing";

export default function Index() {
  return(
    <View
        style={GlobalStyles.pantallaPrincipal}
    >
        <Text style={[GlobalStyles.letra_titulo_arriba,GlobalStyles.margen_arriba_pequeno_mediano]}>Bienvenido a</Text>
        <Text style={GlobalStyles.letra_titulo}>PETCONNECT</Text>
        <Image style={[GlobalStyles.logo,GlobalStyles.margen_arriba_pequeno]} source={require('./../../assets/images/elementos_generales/logo_2.png')}>

        </Image>
        <View style={[GlobalStyles.fila,GlobalStyles.margen_arriba_pequeno]}>
          <Image style={GlobalStyles.imagen_perro} source={require('./../../assets/images/registro_inicio/perrito.png')}>

          </Image>
          <Image style={GlobalStyles.imagen_gato} source={require('./../../assets/images/registro_inicio/gatito.png')}>

          </Image>
        </View>
        <View style={[GlobalStyles.form_login]}>

          <View style={GlobalStyles.fila}>
            <Image style={[GlobalStyles.imagen_pequena,GlobalStyles.rotar_45_izquierda]} source={require('./../../assets/images/elementos_generales/huella_naranja.png')}>

            </Image>
            <Text style={[GlobalStyles.h2,GlobalStyles.negrita,GlobalStyles.texto_oscuro]}>Accede al refugio</Text>
            <Image style={[GlobalStyles.imagen_pequena,GlobalStyles.rotar_45]} source={require('./../../assets/images/elementos_generales/huella_naranja.png')}>

            </Image>
          </View>
          <Input_form nombre="Email"></Input_form>
          <Input_form nombre="Contraseña" TextoSeguro={true}></Input_form>
          <View style={GlobalStyles.fila}>
              <Button_custom nombre="Acceder" Estilo_Caja={GlobalStyles.fondo_azul_oscuro} onPress={()=>{}}>

              </Button_custom>
          </View>
        </View>
        
    
  </View>
  )
}