import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Form,
  InputField,
  KeyboardAvoidingView,
} from 'react-native';
export default class LogupScreen extends React.Component {
  static navigationOptions = {
    title: 'Logup',
  };
  
  constructor() {
    super();
    this.state = { 
    nombre: '',
    apellido: '',
    email:'',
    pass:'',
    };
  }
  render() {
    //console.log("Rovers: ", this.state.roversName);
    return (
      
      <KeyboardAvoidingView behavior ="padding"  style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo}
                    source={require('../images/logo_.png')} 
                    />
            </View>
            <View style={styles.formContainer}>
                  
                <TextInput 
                    placeholder="Nombre"
                    placeholderTextColor="rgba(255,255,255,0.9)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordinput.focus()}
                    style={styles.Input} 
                    onChangeText={(nombre) => this.setState({nombre})}
                    value={this.state.nombre}
                    />   
                <TextInput 
                    placeholder="Apellido"
                    placeholderTextColor="rgba(255,255,255,0.9)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordinput.focus()}
                    style={styles.Input} 
                    onChangeText={(apellido) => this.setState({apellido})}
                    value={this.state.apellido}
                    /> 
                <TextInput 
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,0.9)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordinput.focus()}
                    style={styles.Input} 
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                    />         
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.9)"
                    secureTextEntry
                    returnKeyType="go"
                    style={styles.Input} 
                    ref={(input)=> this.passwordinput = input}
                    onChangeText={(pass) => this.setState({pass})}
                    value={this.state.pass}
                    />     
                <TouchableOpacity onPress={this.registrar} style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>                   
            </View>
      </KeyboardAvoidingView>
    );
  }
  registrar = () =>{
    
      alert(this.state.nombre+' '+this.state.pass);
      //Tomr datos de el endpoint de backend
      fetch('http://192.168.0.103:8080/api/register/fake',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email,
            pass: this.state.pass,
        })
      })

      .then((response)=> response.json())
      .then((resp) => {
          alert(resp);
      })
      .done();

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#000',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  formContainer:{
    padding:20
  },
   logo: {
     width: 150,
     height: 100
  },
  Input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 15,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#f2c100',
    paddingVertical: 15
  },
  buttonText: {
      textAlign: 'center',
      color: '#fff',
      fontWeight: '700'
  }
});
