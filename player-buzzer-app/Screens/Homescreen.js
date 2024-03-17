import * as React from 'react';
import { View , TouchableOpacity,Text,StyleSheet} from 'react-native';
import AppHeader from '../components/AppHeader'
import db from '../config'

export default class Homescreen extends React.Component {
  constructor(){
    super()
    this.state={
      magentastate:true,
      orangestate:true,
      greenstate:true,
      cyanstate:true,
    }
  }
  haha = (buzzercolor)=>{
    this.props.navigation.navigate("Buzzer",{color:buzzercolor})
    var fe = db.ref("teams")
fe.update({
  enabled:false
})

  }
  componentDidMount(){
    var fe = db.ref("teams")
    fe.on ("value",data=>{
      var store = data.val()
        this.setState({
          magentastate:store.magenta.enabled,
           limegreenstate:store.limegreen.enabled, 
           orangestate:store.orange.enabled, 
           cyanstate:store.cyan.enabled,
        })
      
    })

  }
  render() {
    return (
      <View>
        <AppHeader/>
        <TouchableOpacity disabled = {!this.state.magentastate} style = {

[styles.teambox,{backgroundColor:"magenta"}]



        
        }
        onPress={
          ()=>{
            this.haha("magenta")
          }
        }>

        <Text style={
          styles.teamtext
        }>
        Magenta Team
        </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled = {!this.state.orangestate} style = {

[styles.teambox,{backgroundColor:"orange"}]



        }
         onPress={
          ()=>{
            this.haha("orange")
          }}>
        <Text style={
          styles.teamtext
        }>
        Orange Team
        </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled = {!this.state.greenstate} style = {

[styles.teambox,{backgroundColor:"limegreen"}]



        }
         onPress={
          ()=>{
            this.haha("limegreen")
          }}>
        <Text style={
          styles.teamtext
        }>
        Green Team
        </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled = {!this.state.cyanstate} style = {
[styles.teambox,{backgroundColor:"cyan"}]


        }
         onPress={
          ()=>{
            this.haha("cyan")
          }}>
        <Text style={
          styles.teamtext
        }>
        Cyan Team
        </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  teambox:{
marginTop:50,
backgroundColor:"red",
width:250,
height:75,
justifyContent:"center",
marginLeft:40,
borderRadius:90,
  },
  teamtext:{
 textAlign:"center",
 fontWeight:"bold",
 fontSize:30,
 color:"white"
  }

})


