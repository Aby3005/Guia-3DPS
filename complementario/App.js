import * as React from 'react';
import { AppRegistry } from 'react-native';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Image } from 'react-native';

const DATA = [
  { 
    id: '1', 
    title: 'Pupusas' , 
    src:require('./src/imgs/pupusas.jpg'), 
    description: 'Ingredientes: 1 kilo de harina de maíz, 500 gramos de queso mozzarella, 3 tazas de agua, 1/2 de chicarrón.',
    },
  { 
    id: '2', 
    title: 'Quesadillas' , 
    src:require('./src/imgs/quesadilla.jpg'),
    description: 'Ingredientes: 3/4 taza mantequilla, 2 tazas de azucar, 4 huevos grandes,3/4 taza leche, 1/4 taza Crema, 2 tazas harina, 2 cucharaditas levadura en polvo, 1/4 cucharadita sal, 8oz Queso Fresco,1 cucharada semillas de sésamo.',
    },
  { 
    id: '3', 
    title: 'Panes con pollo', 
    src:require('./src/imgs/panes.jpg'), 
    description: 'Ingredientes: 1 pechuga de pollo, salsa inglesa, sazonador en polvo, sal, pimienta, 1 cucharada de aceite, 2 panes grandes, 4 tomates, 1 cebolla, 1/2 pimiento verde, relajo tostado, 1 taza de vino blanco, aceitunas rellenas y garbanzos cocidos.',
    },
  { 
    id: '4', 
    title: 'Tamales de pollo', 
    src:require('./src/imgs/tamales.jpg'),
    description: 'Ingredientes: 1 bote de aceite, 2 lb de harina de maíz, 6 hojas de huerta, chile verde, cebolla, 1 sobre de sal de ajo, pimienta negra, sazonador, apio, tomates, consomé de pollo, hojas de orégano, pollo cocido, papas y salsa naturas.', 
    },
];
const Item = ({ title, img, description }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image style={styles.img} source={img}></Image>
    <Text style={styles.description}>{description}</Text>
  </View>
);
const Comidas = () => {
  const renderItem = ({ item }) => 
  <Item title={item.title} img={item.src} description={item.description}/>
  ;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems:'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight:'bold',
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color:'blue',
    fontWeight:'bold',
  },
  img:{
    width:195,
    height:100,
    borderWidth:2,
    borderColor:'white',
    resizeMode:'contain',
    margin:8
  }
});
export default Comidas;