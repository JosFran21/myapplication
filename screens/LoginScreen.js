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
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  
  constructor() {
    super();
    this.state = { 
    id: '',
    nombre: '',
    pass: '',
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
                    placeholder="Username or email"
                    placeholderTextColor="rgba(255,255,255,0.9)"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordinput.focus()}
                    style={styles.Input} 
                    onChangeText={(nombre) => this.setState({nombre})}
                    value={this.state.nombre}
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
                <TouchableOpacity onPress={this.sesion} style={styles.buttonContainer}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>                   
            </View>
      </KeyboardAvoidingView>
    );
  }

    sesion = () => {
      fetch('http://192.168.15.10:8080/api/register/fake/1',{
      method: 'GET',
      }
     )
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });

    }
    
    /*sesion = () =>{
    
      alert(this.state.nombre+' '+this.state.pass);
      var id = this.state.nombre;
      //Tomr datos de el endpoint de backend
      fetch('http://192.168.0.103:8080/api/register/fake/'+id,{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + this.authToken,
          'Content-Type': 'application/x-www-form-urlencoded',
          
        },
        body: JSON.stringify({
            id: this.state.nombre,
            
        })
      })

      .then((response)=> response.json())
      .then((resp) => {
          alert("La búsqueda es:"+resp.mensaje);
      })
      .done();

  }*/
  /** */
  /* Este si funciona
  **/
  // registrar = () =>{
    
  //     alert(this.state.nombre+' '+this.state.pass);
  //     //Tomr datos de el endpoint de backend
  //     fetch('http://192.168.15.10:8080/api/register/fake/4',{
  //       method: 'GET',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //         //'Accept': 'application/json',
  //         //'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: JSON.stringify({
            
  //       })
  //     })

  //     .then((response)=> response.json())
  //     .then((resp) => {
  //         alert(resp.mensaje);
  //     })
  //     .done();

  // }




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
