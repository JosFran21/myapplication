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
  KeyboardAvoidingView,
} from 'react-native';


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
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
                    placeholder="Username or email"
                    placeholderTextColor="rgba(255,255,255,0.9)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordinput.focus()}
                    style={styles.Input} 
                    />   
                <TextInput 
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,0.9)"
                    secureTextEntry
                    returnKeyType="go"
                    style={styles.Input} 
                    ref={(input)=> this.passwordinput = input}
                    />     
                <TouchableOpacity onPress={this.sesion} style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>                   
            </View>
      </KeyboardAvoidingView>
    );
  }

  sesion = () =>{
      //Tomr datos de el endpoint de backend
      fetch('http://localhost:8000/api/register/fake',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            nombre: 'nombre',
            apellido: 'apellido',
            email: 'email',
            pass: 'pass',
        })
      })

      .then((response)=> response.json())
      .then((resp) => {
          alert(resp.message);
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
