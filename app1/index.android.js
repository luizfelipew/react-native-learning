var React = require ('react');
var Text = require('react-native').Text;
var View = require('react-native').View;
var Button = require('react-native').Button;
var AppRegistry = require('react-native').AppRegistry;


const geraNumeroAleatorio = () => {
  var numeroAleatortio = Math.random();
  // usando a funcao floor para deixar os numero inteiros do randomico
  numeroAleatortio = Math.floor(numeroAleatortio * 10);
  alert(numeroAleatortio);
}

const App = () => {

  return (
    <View>
       <Text>Gerador de números randômicos!!!</Text>
       <Button 
        title="Gerar um numero randomico"
        onPress={geraNumeroAleatorio}
        />
    </View>
   
  );
};

// registrar nossa app1
AppRegistry.registerComponent('app1', () =>  App );
