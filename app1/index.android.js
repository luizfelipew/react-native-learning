var React = require ('react');
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;

const App = () => {

  return (
    <Text>Meu Primeiro App com arrow function </Text>
  );
};

// registrar nossa app1
AppRegistry.registerComponent('app1', () =>  App );
