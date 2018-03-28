import React from 'react';
import { Text, AppRegistry , View } from 'react-native';

//Formatacoes
const Estilos = {

  principal: {
    flex: 1, //1:1
    backgroundColor: 'cornflowerblue'
  },
  topo: {
    flex: 2,// 2:11
    backgroundColor: 'brown'
  },
  conteudo: {
    flex: 8, // 8:11
    backgroundColor: 'yellowgreen'
  },
  rodape: {
    flex: 1, //1:11
    backgroundColor: 'orangered'
  }
  
};

//Criar component
const App = () => {

  const { principal, topo, conteudo, rodape } = Estilos;
  
  return (
    <View style={principal}> 
      <Text style={topo} >Topo</Text>
      <Text style={conteudo} >conteudo2</Text>
      <Text style={rodape} >Rodape</Text>
    </View>
    
  );
};

AppRegistry.registerComponent('app2', () => App);
