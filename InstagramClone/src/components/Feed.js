import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.headerWrapper}>
                    <View style={styles.headerLeftWrapper}>
                        <Image style={styles.imageThumb} source={require('../assets/face.jpeg')} />
                        <Text style={styles.headertitle}>Subhiksha</Text>
                    </View>
                    
                    <Image style={styles.icon} source={require('../assets/dots.jpg')} />
                </View>

                <View>
                    <Text> Image </Text>
                </View>

                <View>
                    <Text> Footer </Text>
                </View>

            </View>

        );
    }
}

export default Feed;

export const styles = StyleSheet.create({
    container: {
        display: 'flex'
    },
    headerWrapper: {
        padding:10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
    },
    headerLeftWrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    imageThumb:{
        
        height:50,
        width:50,
        borderRadius:50

    },
    icon:{
        height:40,
        width:40,
        opacity:0.5
    },
    headertitle:{
        fontSize:18,
        fontWeight:'700',
        paddingLeft:10
    }



})
