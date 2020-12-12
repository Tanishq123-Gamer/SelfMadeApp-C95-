import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    ImageBackground,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';
    import MyHeader from '../components/MyHeader'
import db from '../config';
import firebase from 'firebase';

export default class Maths extends Component {
  render(){
    return (
      <ImageBackground source= {require("../assets/Math_back.jpg")} style={styles.container}>
      <MyHeader title="Maths" navigation ={this.props.navigation}/>
      </ImageBackground>
    );
  }
  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#b8b8b8',
      width: '100%',
      height: '100%',
    },
  });