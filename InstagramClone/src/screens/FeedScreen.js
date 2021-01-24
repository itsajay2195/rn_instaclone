import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../config/colors'
import  Feed from '../components/Feed'
import  Stories from '../components/Stories'

class FeedScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.header}>

                    <Image style={styles.cameraLogo} source={require('../assets/camera.jpg')} />
                    <Image style={styles.instagramLogo} source={require('../assets/instagramLogo.png')} />
                    <View style={styles.headerRight}>
                        <Image style={styles.cameraLogo} source={require('../assets/igtv.png')} />
                        <Image style={styles.cameraLogo} source={require('../assets/message.jpg')} />
                    </View>
                </View>

                <View style={styles.storiesWrapper}>
                    <Stories></Stories>
                </View>

                <View style={styles.feed}>
                   <Feed></Feed>
                </View>

                <View style={styles.footer}>
                    <Image style={styles.cameraLogo} source={require('../assets/home.png')} />
                    <Image style={styles.cameraLogo} source={require('../assets/search.jpg')} />
                    <Image style={styles.cameraLogo} source={require('../assets/heart.png')} />
                    <Image style={styles.cameraLogo} source={require('../assets/profile.png')} />
                </View>


            </View>
        );
    }
}

export default FeedScreen;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor:colors.gray1,
        borderBottomWidth:1

    },
    headerRight: {
        display: 'flex',
        flexDirection: 'row',
    },
    cameraLogo: {
        height: 40,
        width: 40
    },
    instagramLogo: {

        height: 60,
        width: 175
    },
    feed: {
        display: 'flex',
        flex: 1,
       
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 30,
        borderTopColor:colors.gray1,
        borderTopWidth:1

    },
    storiesWrapper:{
        display:'flex'
    }
})

