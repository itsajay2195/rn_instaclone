import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView,Image } from 'react-native';

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerWrapper} >
          <Text style={styles.HeaderText}>Stories</Text>
          <Text style={styles.HeaderText}>Watch all</Text>
        </View>
        <ScrollView>
          <View style={styles.storiesWrapper} >
                <Text>hi</Text>
                <Image style={styles.storiesIcon} source={require('../assets/story_img.jpg')} />
                <Image style={styles.storiesIcon} source={require('../assets/story_img.jpg')} />
                {/* ../assets/story_img.jpg */}
          </View>
        </ScrollView>
        
        <View></View>
      </View>
    );
  }
}

export default Stories;

 const styles = StyleSheet.create({
   container:{
     display:'flex'
   },
   headerWrapper:{
     display: 'flex',
     flexDirection:'row',
     justifyContent:'space-between'
   },
   HeaderText:{
     fontSize:14,
     fontWeight:'700'
   },
   storiesWrapper:{
     display:'flex',
     flexDirection:'row'
   },
   storiesIcon:{
    height: 70,
    width: 70,
    borderRadius: 50
   } 
 })
