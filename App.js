import React from 'react';
import { StyleSheet} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Calculator from './Calculator';
import History from './History';

const MyApp = createStackNavigator({
  Calculator: {screen: Calculator},
  History: {screen: History}
});


const AppContainer = createAppContainer(MyApp);
 export default class App extends React.Component { 

  render(){
    return <AppContainer/>
  }
}






