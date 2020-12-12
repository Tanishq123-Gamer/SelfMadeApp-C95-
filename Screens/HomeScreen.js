import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView, ImageBackground} from 'react-native';
    import MyHeader from '../components/MyHeader'
import db from '../config';
import firebase from 'firebase';
import { RFValue } from "react-native-responsive-fontsize";

export default class HomeScreen extends Component {
  render(){
    return (
    
      
        
        <ImageBackground source={require("../assets/flowerbackimg.jpg")} style={{ flex: 1,width:"100%", height:"100%", alignItems:"center"}}>
          <MyHeader title="Home Page" navigation ={this.props.navigation}/>
        
        <View style={{ margin:40}}>
          <Text style={{color: "#32867d", fontSize:20, fontWeight:"bold",justifyContent:"center"}}>
          It shouldn't matter how slowly a child learns as long as we are encouraging them not to stop. 
        </Text>
        </View>

       
       
        <View>
          <Image
          source={require('../assets/supportercroc.png')}
          style={styles.santaImage}
           /> 
         </View>
      

        <View style={{margin:10}}>
          <Text style={{color: "#32867d", fontSize:20, fontWeight:"bold",justifyContent:"center"}}>
          Click on the buttons to see what"s inside! 
          Check it out and Learn what you desire!
        </Text>

        </View>
        
      
          <TouchableOpacity
            style={styles.button}
           onPress = {()=>{ this.props.navigation.navigate("AnimalSound")}}
          >
            <Text style={styles.buttonText}>Animals</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress = {()=>{ this.props.navigation.navigate("Maths")}}
          >
            <Text style={styles.buttonText}>Maths</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress = {()=>{ this.props.navigation.navigate("Phonics")}}
           
          >
            <Text style={styles.buttonText}>Phonics!</Text>
          </TouchableOpacity>

         
        </ImageBackground>
      
     
      
    );
  }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: "80%",
      height: RFValue(50),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: RFValue(20),
      backgroundColor: "#ffff",
      shadowColor: "#000",
      marginBottom:RFValue(10),
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.3,
      shadowRadius: 10.32,
      elevation: 16,
    },
    buttonText: {
      color: "#32867d",
      fontWeight: "200",
      fontSize: RFValue(10),
    },
   
    santaImage:{
      width:"70%",
      height:"100%",
      resizeMode:"stretch"
    },
  });