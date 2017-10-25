import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  ListView,
  TouchableHighLight
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";

var Crypto = require('crypto-js');

const REQUEST_URL = "http://gatway.marvel.com:80/v1/public7characters";


export default class AllContactsScreen extends React.Component {

    constructor (props){
    super(props)
    this.timestamp=1;
    this.public_key='f99fefa741cc2d1f6f11c6b29fde193f';
    this.private_key='06ab726ef070687248c17ad5f090add9a2de3d52';
    this.state={
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded:false
    }

  }
  /*
  componentDidMount(){
    this.fetchData();
  }*/


      componentDidMount() {
        fetch("https://facebook.github.io/react-native/movies.json")
            .then((response) => response.json())
            .then((responseJson) => {
                var standardDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                /*
                var movies = [
                    {
                        title: "Star Wars",
                        releaseYear: "1977"
                    },
                    {
                        title: "The Matrix",
                        releaseYear: "1999"
                    }
                ];
                */
                //this.state.clonedMovies = standardDataSource.cloneWithRows(responseJson.movies);
                this.setState({
                    isLoading: false,
                    clonedMovies: standardDataSource.cloneWithRows(responseJson.movies),
                    loaded: true
                    
                 })
          })
      }

  fetchData(){
    var hash =  Crypto.MD5(this.timestamp + this.private_key + this.public_key);
    fetch(REQUEST_URL+'?ts='+this.timestamp+'&apiKey='+this.public_key+'&hash='+hash)
    .then((response)=>response.json())
    .then((responseData)=>{
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data.results),
          loaded: true
        })
    })
   .catch(function(err) {
          console.log(err);
    })
  }

  renderLoadingView(){
    return(
      <View style={style.container}>
        <Text>Cargando comics...</Text>
      </View>
    )
  }

  renderComic(comic){
   
    /*return(
      <TouchableHighLight>
        <Image source={{url: 'https://ugc.kn3.net/i/origin/http://www.qvision.es/blogs/patrizia-salvestrini/files/2014/07/6F1.jpg'}} style={style.backgroundImage}>
          <View style={style.rigthContainer}>
            <Text style={style.comicTittle}>{comic.name}</Text>
            <Text style={style.comicTittleAvailable}>{comic.comics.available}</Text>
          </View>
        </Image>
      </TouchableHighLight>    
    )*/
  }


  render() {
    const { navigate } = this.props.navigation;
    
      if(!this.state.loaded){
        return this.renderLoadingView();
      }
       return (
            <View style={{flex: 1, paddingTop: 25}}>
                <ListView
                    dataSource={this.state.clonedMovies}
                    renderRow={
                        (rowData) => <Text>Title: {rowData.title}, release year: {rowData.releaseYear}</Text>
                    }
                >

                </ListView>
            </View>
        );

  }
}
const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
  },
  rigthContainer: {
      backgroundColor: 'rgba(52,52,52,0.5)',
      alignSelf:  'stretch',
      paddingTop: 30,
      height: 150,
  },
  comicTittle:{
      fontSize: 27,
      marginBottom: 8,
      textAlign: 'center',
      color: '#FFF',
      backgroundColor: 'rgba(52,52,52,0.5)',
  },
  comicTittleAvailable:{
      fontSize: 18,
      textAlign: 'center',
      color: '#FFF',    
      backgroundColor: 'rgba(52,52,52,0.5)',
  },
  ListView:{
    paddingTop: 64,
    marginBottom: 49,
  },
});
