import React, {Component} from 'react'
import {Text,View,StyleSheet,TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config/colors'
import PrimaryButton from '../components/PrimaryButton'

export class InitialLaunchScreen extends Component {
   render(){
       return(
           <View style={styles.container}>
               <View style={styles.languageWrapper}>
                    <TouchableOpacity>
                        <Text>
                            <Text>English (United States)</Text>
                            <Icon name="caret-down" size={30} color={colors.gray1} />
                        </Text>
                    </TouchableOpacity>
               </View>
               <View style={styles.buttonContainer}>
                    <Text>2</Text>
                    <Image style={styles.logo} source={require('../assets/instagramLogo.png')}></Image>
                    <PrimaryButton buttonLabel='create a new account' buttonBg={colors.primary} textColor={colors.secondary}></PrimaryButton>
               </View>
               <View style={styles.bottomWrapper}>
                    
               </View>
           </View>
       )
   }
}

export default InitialLaunchScreen

export const styles = StyleSheet.create({
    container:{
        display:"flex",
        flex:1
    },
    languageWrapper:{
        display:'flex',
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    buttonContainer:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    bottomWrapper:{
        display:'flex',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        height:'25%',
        width:'50%'
    }

})