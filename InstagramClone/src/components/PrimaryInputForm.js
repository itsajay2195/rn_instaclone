import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colors } from '../config/colors'

class PrimaryInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {placeholderText} = this.props
    return (
      <View>
        <TextInput style={styles.textInput} placeholder={placeholderText} ></TextInput>
      </View>
    );
  }
}

export default PrimaryInputForm;

const styles = StyleSheet.create({
    container:{
        display:'flex'
    },
    textInput:{
        
        backgroundColor: colors.gray1,
        borderRadius:5,
        borderWidth:1,
        borderColor:colors.gray2,
        color:'black'
    }

})

