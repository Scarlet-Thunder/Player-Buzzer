import * as React from 'react';
import { View } from 'react-native';
import Buzzerscreen from './Screens/Buzzerscreen'
import Homescreen from './Screens/Homescreen'
import {createAppContainer,createSwitchNavigator} from "react-navigation"
export default class App extends React.Component {
  render() {
    return (
      <View>
      <AppContainer/>
       
      </View>
    );
  }
}
const Switchnavigator = createSwitchNavigator({
  Home:Homescreen,
  Buzzer:Buzzerscreen
})
const AppContainer= createAppContainer(
  Switchnavigator
)