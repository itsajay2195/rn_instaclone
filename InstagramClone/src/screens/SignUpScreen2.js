import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryInputForm from '../components/PrimaryInputForm'
import PrimaryButton from "../components/PrimaryButton";
import { colors } from '../config/colors'



class SignupScreen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.topcontainer}>
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}> ENTER CONFIRMATION CODE </Text>
                    </View>

                    <View style={styles.subHeadingContainer}>
                        <Text style={styles.infoText}>Enter the 6 digit code we sent to +91 1234567899.
                        <Text style={styles.requestText}>Request a new one</Text> </Text>
                    </View>

                    <View style={styles.inputForm}>
                        <PrimaryInputForm placeholderText={'Confirmation code'}></PrimaryInputForm>
                    </View>

                    <View style={styles.inputFormButton}>
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

export default SignupScreen2;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1
    },
    headingContainer: {
        marginTop: '20%',
        marginBottom: '20%'
    },
    heading: {
        textAlign: 'center',
        fontWeight: "700"
    },
    subHeadingContainer: {
        marginLeft: '20%',
        marginRight: '20%',
        marginBottom: 10
    },
    infoText: {
        color: colors.gray1
    },
    requestText: {
        color: colors.primary,
        fontWeight: "700"
    },
    inputForm: {
        marginLeft: '10%',
        marginRight: '10%'

    },
    inputFormButton: {
        marginLeft: '7%',
        marginRight: '7%'
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