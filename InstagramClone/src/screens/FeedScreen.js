import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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

                <View style={styles.feed}>
                    <Text> Feed </Text>
                </View>

                <View style={styles.footer}>
                    <Image style={styles.cameraLogo} source={require('../assets/igtv.png')} />
                    <Image style={styles.cameraLogo} source={require('../assets/message.jpg')} />
                    <Image style={styles.cameraLogo} source={require('../assets/message.jpg')} />
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
        justifyContent: 'space-between'

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
        flex: 1
    },
    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        bottom: 30
    },

})

