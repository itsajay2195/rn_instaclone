 import React, {Component} from 'react'
 import {Text,View,StyleSheet,Image} from 'react-native'


export class SplashScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source = {require('../assets/icon.png')}/>
                </View>
                <View style={styles.logoContainer}>
                    <Text>From</Text>
                    <View style={styles.logoTextWrapper}>
                    <Image style={styles.logo}source = {require('../assets/facebookTextLogo.png')}/>
                    </View>
                </View>
            </View>
        )
    }
}

export default SplashScreen

export const styles= StyleSheet.create({
    container:{
        display:'flex',
        flex:1
    },
    iconContainer:{
        display:'flex', 
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logoContainer:{
        display:'flex',
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:30
    },
    logoTextWrapper:{
        width:'40%',
        height:20,
        
    },
    icon:{
        height:200,
        width:200
    },
    logo:{
        flex:1,
        width:undefined,
       
    }
})