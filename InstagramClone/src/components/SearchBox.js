import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/colors'

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText:''
    };
  }

  textChanged=(text)=>{
    this.setState({searchText:text})
  }
  render() {
    return (
      <View>
        <View style={styles.searchContainer}>
          <View style={styles.iconWrapper}>
             <Icon name="search" size={22} color={colors.gray1} /> 
          </View>
          <View style={styles.inputBoxWraper}>
             <TextInput placeholder={'search'} onChangeText={(text)=>this.textChanged(text)} style={styles.inputBox}/>
          </View>
          
        </View>
      </View>
    );
  }
}

export default SearchBox;

const styles= StyleSheet.create({
  searchContainer:{
    flexDirection:'row',
    padding:10
  },
  iconWrapper:{
    display:'flex',
    flex:1
  },
  inputBoxWraper:{
    display:'flex',
    flex:7
  },
  inputBox:{
    height:40
  }



})