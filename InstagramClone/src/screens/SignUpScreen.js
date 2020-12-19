import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../config/colors';
import PhoneForm from "../components/PhoneForm";
import PrimaryButton from '../components/PrimaryButton'

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPhoneEnabled: true,
    };
  }

  switchButton(val) {
    this.setState({ isPhoneEnabled: val });
  }

  render() {

    const { isPhoneEnabled } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.topcontainer}>
          <View style={styles.avatarWraper}>
            <Image style={styles.logo} source={require('../assets/avatar.jpg')}></Image>
          </View>
          <View style={styles.sectionWrapper}>
            <TouchableOpacity onPress={() => this.switchButton(true)} style={[styles.sectionSwitch, {
              borderBottomColor: isPhoneEnabled
                ? colors.black
                : colors.gray1,
            }]}>
              <Text style={[styles.title,{color:isPhoneEnabled ? colors.black :colors.gray1}]}>PHONE</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.switchButton(false)} style={[styles.sectionSwitch, {
              borderBottomColor: isPhoneEnabled
                ? colors.gray1
                : colors.black,
            }]}>
              <Text style={[styles.title,{color:isPhoneEnabled ? colors.gray1 :colors.black}]}>EMAIL</Text>
            </TouchableOpacity>
            
          </View>
          <View style={styles.PhoneFormWrapper}>
            <PhoneForm></PhoneForm>
          </View>
          <View style={styles.notificationWrapper}>
            <Text style={styles.NotificationText}>You may receive SMS updates from Instagram and can opt out at any time</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <PrimaryButton buttonLabel='Next' buttonBg={colors.primary} textColor={colors.secondary}></PrimaryButton>
          </View>
        </View>

        <View style={styles.bottomcontainer}>
          <Text style={styles.alreradyAccount}>Already have an account?</Text><Text style={styles.logIn}>LogIn.</Text>

        </View>
      </View>
    );
  }
}

export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,

  },
  avatarWraper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '20%'
  },
  logo: {
    height: 200,
    width: 200,

  },
  sectionWrapper: {
    flexDirection: 'row',
    marginTop: 10,
    margin: 30
  },
  sectionSwitch: {
    display: 'flex',
    flex: 1,
    borderBottomWidth: 2,

  }, title: {
    textAlign: 'center',
    fontWeight: '700',
    padding: 10
  },
  PhoneFormWrapper: {
    display: 'flex',
    margin: 30,
  },
  notificationWrapper: {
    padding: 30
  },
  NotificationText: {
    color: colors.gray1,
    textAlign: 'center'
  },
  buttonWrapper: {
    marginLeft: 30,
    marginRight: 30,

  },
  topcontainer: {
    display: 'flex',
    flex: 1
  },
  bottomcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderColor: colors.gray1

  }, alreradyAccount: {
    color: colors.gray1
  },
  logIn: {
    textAlign: 'center',
    fontWeight: '700'
  }


})