import { StyleSheet } from 'react-native'
import { Colores, TamanoBoton, TamanoLetra, TipoLetra } from './Colores';


export const GlobalStyles = StyleSheet.create({

  pantallaPrincipal: {
      flex:1,
      alignItems: "center",
      backgroundColor:Colores.darkblue,
  },
  containerCentrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
titulo: {
    fontSize: 22
},
drawerUserContainer: {
    backgroundColor: 'indigo',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    marginBottom: 30,
    height: 140,
    borderRadius: 10,

},
drawerUserImg: {
    width: 100, 
    height: 100, 
    alignSelf:'center', 
    borderRadius: 50
},
  negrita:{
    fontFamily:"Poppins_bold",
  },
  letra_titulo_arriba:{
    fontFamily:"Poppins_bold",
    color:Colores.white,
    fontSize:TamanoLetra.normal_text
  },
  letra_titulo:{
    fontFamily:'WendyOneRegular',
    color:Colores.white,
    fontSize:TamanoLetra.h1,
    
  },
  h1:{
    fontFamily:"Poppins_bold",
    fontSize: TamanoLetra.h1,
  },
  h2:{
    fontFamily:"Poppins_bold",
    fontSize:TamanoLetra.h2,
  },
  normal_text:{
    fontFamily:"Poppins_bold",
    fontSize:TamanoLetra.normal_text,
  },
  texto_oscuro:{
    color:Colores.darkblue,
  },
  miscelaneo:{
    backgroundColor:Colores.lightBlue,
  },
  container: {
    paddingTop:40,
    alignItems:  'center',
    justifyContent: 'center',
    paddingBottom:40,
    width:"100%"

  },
  fila: {
    flexDirection: 'row',
    justifyContent: "center",
    marginBottom:16,
    paddingHorizontal:10,

  },
  logo:{
    height: 92.5,
    width:92.5,
  },
  imagen_gato:{
    height: 132.5,
    width:132.5,
    zIndex:5,
  },
  imagen_perro:{
    marginRight:-60,
    marginTop:40,
    height: 92.5,
    width:92.5,
    zIndex:10,
  },
  imagen_pequena:{
    height:37,
    width:37,
    opacity:0.5

  },
  rotar_45:{
    transform:[{rotate:"45deg"}]
  },
  rotar_45_izquierda:{
    transform:[{rotate:"-45deg"}]
  },
  
  form_login:{
      marginTop:-43,
      backgroundColor:Colores.white,
      borderRadius:40,
      paddingTop:40,
      alignItems:  'center',
      justifyContent: 'center',
      paddingBottom:40,
      width:"100%"
  },
  margen_arriba_mediano:{
      marginTop:50,
  },
  margen_arriba_pequeno:{
      marginTop:20,
  },
  margen_arriba_pequeno_mediano:{
    marginTop:30,
  },
  input_form_box:{
    backgroundColor:Colores.orange,
    borderRadius:100,
    paddingTop:5,
    paddingBottom:5,
    paddingRight:35,
    paddingLeft:35,
    width:'80%',
    marginTop:10,
    marginBottom:10,

  },
  input_form_text: {
    color:Colores.lightGray,
    fontSize:TamanoLetra.normal_text,
  },
  fondo_azul_oscuro:{
    backgroundColor:Colores.darkblue,
  },
  button_box:{
    backgroundColor:Colores.orange,
    borderRadius:100,
    paddingTop:5,
    paddingBottom:5,

    maxWidth:'40%',
    marginTop:10,
    marginBottom:10,
    flex:1,
    alignItems:"center",
    alignContent:"center",
    textAlign:"center",

  },
  button_text:{
    color:Colores.white,
    fontSize:TamanoLetra.normal_text,
  },


  });

  export default GlobalStyles;