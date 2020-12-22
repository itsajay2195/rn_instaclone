/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SplashScreen from './src/screens/SplashScreen'
import InitialLaunchScreen from './src/screens/InitialLaunchScreen'
import  SignUpScreen from "./src/screens/SignUpScreen";
import  SignUpScreen2 from "./src/screens/SignUpScreen2";

const App: () => React$Node = () => {
  return (
    <>
      
      <View style={styles.container}>
       
        {/* <InitialLaunchScreen></InitialLaunchScreen> */}
        {/* <SignUpScreen></SignUpScreen> */}
        <SignUpScreen2></SignUpScreen2>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex:1
  },
  
});

export default App;
