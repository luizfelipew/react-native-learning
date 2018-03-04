var React = require ('react');
var Text = require('react-native').Text;
var AppRegistry = require('react-native').AppRegistry;

const App = function(){

  return (
    <Text>Meu Primeiro App</Text>
  );
};

// registrar nossa app1
AppRegistry.registerComponent('app1', function(){ return App; });
