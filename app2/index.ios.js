import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatacoes
const Estilos = {
  estiloTexto: {
    fontSize: 20,
    backgroundColor: '#08509B',  
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4
  }
};

//Criar component
const App = () => {
  return (
    <Text style={ Estilos.estiloTexto } >Frases do dia</Text>
  );
};

AppRegistry.registerComponent('app2', () => App);
