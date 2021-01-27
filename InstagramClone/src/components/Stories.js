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
        <ScrollView horizontal={true}>
          <View style={styles.storiesWrapper} >
                <Image style={styles.sotriesCricle} source={require('../assets/storiescircle.png')} />
                <Image style={styles.storiesIcon} source={require('../assets/story_img.jpg')} />
          
               {/* ../assets/story_img.jpg */}
          </View>
          <View style={styles.storiesWrapper} >
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
     flexDirection:'row',
     padding:5 ,
   },
   sotriesCricle:{
     position:'absolute',
     height: 80,
    width: 80,
    borderRadius: 50,
    padding:10 ,

   },
   storiesIcon:{
    height: 70,
    width: 70,
    borderRadius: 50
   } 
 })
