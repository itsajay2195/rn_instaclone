import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../config/colors';

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
                    <Image style={styles.feedImg} source={require('../assets/feedImage.jpg')} />
                </View>
                <View style={styles.feedOptions}>
                    <View style={styles.feedOptionsLeft}>
                        <Image style={styles.icon} source={require('../assets/heartfeed.jpg')} />
                        <Image  style={styles.icon}source={require('../assets/comment.png')} />
                        <Image style={styles.icon} source={require('../assets/messagefeed.png')} />
                    </View>
                   
                    <Image style={styles.icon} source={require('../assets/bookmarkfeed.png')} />
                </View>
                <View style={styles.underlineWrapper}>
                    <View style={styles.underline}></View>
                </View>
                <View style={styles.likesTray}>
                    <Image style={styles.likesImage} source={require('../assets/heart.png')} />
                    <Text style={styles.likesCount}>1,223 Likes</Text>
                </View>
                <Text>    <Text style={styles.headertitle}>Subhiksha</Text><Text>Missing summary</Text></Text>
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
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerLeftWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageThumb: {

        height: 50,
        width: 50,
        borderRadius: 50

    },
    icon: {
        height: 40,
        width: 40,
        opacity: 0.5
    },
    headertitle: {
        fontSize: 18,
        fontWeight: '700',
        paddingLeft: 10
    },
    feedImg: {
        width: '100%'
    },
    feedOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    feedOptionsLeft:{
        flexDirection: 'row',
    },
    underlineWrapper:{
        marginLeft:10,
        marginRight:10
    },
    underline:{
        height:1,
        backgroundColor:colors.gray1
    },
    likesTray:{
        flexDirection:'row',
        padding:8,
    },
    likesImage:{
        height:30,
        width:30
    },
    likesCount:{
        paddingLeft:5,
        fontSize:16,
        fontWeight:'700'
    }



})
