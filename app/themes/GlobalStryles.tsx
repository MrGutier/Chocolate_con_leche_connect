import { StyleSheet } from 'react-native'
import { Colores, TamanoBoton, TamanoLetra, TipoLetra } from './Colores';


export const GlobalStyles = StyleSheet.create({

  pantallaPrincipal: {

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
    backgroundColor: Colores.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 0,
    marginBottom: 30,
    height: 160,
    borderRadius: 25,
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
  h3:{
    fontFamily:"Poppins_bold",
    fontSize:TamanoLetra.h3,
  },
  normal_text:{
    fontFamily:"Poppins",
    fontSize:TamanoLetra.small_text,
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

  },
  row_no_margin: {
    flexDirection: 'row',
    justifyContent: "center",

  },
  logo:{
    height: 92.5,
    width:92.5,
  },
  logo_menu:{
    height: 42.5,
    width:42.5,
    marginRight:10,
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
  imagen_pequena_opaca:{
    height:37,
    width:37,
    opacity:0.5

  },
  imagen_pequena:{
    height:37,
    width:37,

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
      paddingBottom:15,
      width:"100%"
  },
  margen_arriba_mediano:{
      marginTop:50,
  },
  margen_arriba_pequeno:{
      marginTop:20,
  },
  margen_abajo_pequeno:{
    marginBottom:20,
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
    paddingTop:12,
    paddingBottom:12,

    width:'45%',
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
  width_80:{
    width:'80%',
  },
  margin_right_10:{
    marginRight:'10%',
  },
  margin_left_10:{
    marginLeft:'10%',
  },
  link_text:{
    color:Colores.darkblue,
    fontSize:TamanoLetra.normal_text,
    textDecorationLine:"underline",
  },
  link_box:{
    paddingTop:12,
    paddingBottom:12,
    width:'45%',
    marginTop:10,
    marginBottom:10,
    flex:1,
    alignItems:"center",
    alignContent:"center",
    textAlign:"center",

  },
  link_alt_text:{
    color:Colores.white,
  },
  text_dark_blue:{
    color:Colores.darkblue
  },
  text_white:{
    color: Colores.white,
  },
  background_dark_blue:{
    backgroundColor:Colores.darkblue,
  },
  background_white:{
    backgroundColor:Colores.white,
  },
  remove_underline:{
    textDecorationLine:"none",
  },
  section_circle:{
    borderRadius:100,
    width:80,
    height:80,

    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Colores.darkOrange,
  },
  section_box:{
    backgroundColor:Colores.orange,
    borderRadius:100,
    paddingTop:20,
    paddingBottom:20,
    paddingRight:20,
    paddingLeft:20,
    width:'90%',
    marginRight:"5%",
    marginLeft:"5%",
    marginTop:10,
    marginBottom:10,

  },
  section_text:{
    marginLeft:10,
    width:"70%",
  },
  section_logo:{
    width:50,
    height:50,
    alignSelf:"center",

  },
  section_row:{
    flexDirection: 'row',
  },
  text_dark_orange:{
    color:Colores.darkOrange,
  },
  margin_left_small:{
    marginLeft:"5%",
  },
  margin_right_small:{
    marginRight:"5%",
  },
  background_light:{
    backgroundColor:Colores.orange
  },
  align_left:{
    justifyContent:"flex-start",
  },
  ball:{
    borderRadius:100,
  },
  map_box:{
    borderRadius:10,
    borderColor:Colores.darkblue,
    borderWidth:2,
  },
  map_image:{
    width:"100%",
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    height:400,
  },
  padding_small_top:{
    paddingTop:10,
  },
  padding_small_bottom:{
    paddingBottom:10,
  },
  padding_small_right:{
    paddingRight:10,
  },
  padding_small_left:{
    paddingLeft:10,
  },
  box_size_big:{
    width:"90%",
  },
  info_box:{
    backgroundColor:Colores.lightBlue,
    borderRadius:20,
    paddingTop:15,
    paddingBottom:15,
    paddingRight:10,
    paddingLeft:20,
    alignContent:"center",
    alignItems:"center",
    width:'90%',
    marginRight:"5%",
    marginLeft:"5%",
    marginTop:10,
    marginBottom:10,

  },
  info_text:{
    fontFamily:"Poppins",
    width:"70%",
    color:Colores.darkblue,
    marginLeft:"5%",
    marginRight:"5%",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width:'100%'
  },
  card: {
    width: '42%',
    backgroundColor: Colores.lightBlue,
    margin: 8,
    borderTopLeftRadius:12,
    borderTopRightRadius:12
  },
  image_card: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,

  },
  nombre: {
    fontFamily:"Poppins_bold",
    fontSize:13,
    backgroundColor:Colores.lightBlue,
    color:Colores.darkblue
  },
  pantallaDetalles: {
    flex:1,
    alignItems: "center",
    backgroundColor:Colores.lightBlue,
  },
  description: {
    fontFamily:"Poppins",
    fontSize:13,
    backgroundColor:Colores.lightBlue,
    color:Colores.darkblue
  },
  bold_text:{
    fontFamily:"Poppins_bold",
    fontSize:TamanoLetra.small_text,
  },
  margin_bottom_big:{
    marginBottom:80,
  },
  discussion_box:{

    borderWidth:1,
    borderColor:Colores.lightBlue,
    borderRadius:20,
    paddingTop:15,
    paddingBottom:15,
    paddingRight:10,
    paddingLeft:20,
    alignContent:"center",
    alignItems:"center",
    width:'90%',
    marginRight:"5%",
    marginLeft:"5%",
    marginTop:10,
    marginBottom:10,

  },
  text_size_medium:{
    fontSize:TamanoLetra.h3,
  },
  margin_bottom_extra_small:{
    marginBottom:10
  },
  
  image_card_details: {
    width: "100%",
    height: 280,
    borderRadius: 30,
    marginBottom:10,
  },
  tarjeta_detalles:{

    backgroundColor:Colores.white,
    borderRadius:40,
    alignItems:  'center',
},
  contenedor_detalles: {
    flexDirection: 'row',
    alignItems: 'center',

    padding:15
  },
  text_light_blue: {
    color:Colores.lightBlue
  }
  });

  
  export default GlobalStyles;