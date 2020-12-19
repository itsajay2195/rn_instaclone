import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { colors } from '../config/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

class PhoneForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.countryBox}><Text style={styles.country}>IN +91</Text></View>
          <View style={styles.inputNumber}>
              <TextInput value={'1234567899'} style={{height:60}}></TextInput>
          </View>
          <View style={styles.close}>
              <Icon  style= {styles.closeLogo} name="times" size={25} color={colors.gray1} /> 
              
         </View>
      </View>
    );
  }
}

export default PhoneForm;

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        borderWidth:2,
        borderRadius:5,
        padding:10,
        borderColor:colors.gray1,
        backgroundColor:colors.gray2
    },
    countryBox:{
        display:'flex',
        paddingRight:15,
        borderRightWidth:1,
        borderRightColor:colors.gray1,
    },
    country:{
        fontWeight:'700',
        color:colors.gray1
    },
    inputNumber:{
        display:'flex',
        flex:1,
        paddingLeft:15
    },
    close:{
        display:'flex',
        flex:1

    },
    closeLogo:{
        textAlign:'right'
    }

})
