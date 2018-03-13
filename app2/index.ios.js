import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Formatacoes
const Estilos = {
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#08509B',  
    padding: 30
  }
};

//Criar component
const App = () => {
  return (
    <Text style={ Estilos.estiloTexto } >Frases do dia</Text>
  );
};

AppRegistry.registerComponent('app2', () => App);
