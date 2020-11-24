import React,{Component} from 'react';
import {Text,View,Button,TouchableOpacity,StyleSheet} from 'react-native'
import {colors} from '../config/colors'
export class PrimaryButton extends Component {
    constructor(props){
        super(props)

    }

    render(){
        const {buttonLabel,buttonBg,textColor} = this.props
        const buttonText= buttonLabel
        const buttonBgColor=buttonBg
        const textColorProp=textColor
        return(
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button,{backgroundColor:buttonBgColor}]}>
                <Text style={[styles.text,{color:textColorProp}]}> {buttonText} </Text>
                </TouchableOpacity>
                
            </View>
        )
            
        
    }
}

export default PrimaryButton


export const styles = StyleSheet.create({
    container:{
        width:'100%',
        padding:15
    },
    button:{
        
        padding:15,
        borderRadius:5
        
    },
    text:{
        textAlign:'center',
        fontSize:16
    }

     
})