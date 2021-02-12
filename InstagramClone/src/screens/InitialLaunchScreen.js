import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../config/colors'
import PrimaryButton from '../components/PrimaryButton'
import SearchBox from '../components/SearchBox';



const DATA = [
    { id: 1, title: 'ENGLISH', sub: 'english' },
    { id: 2, title: 'Tamil', sub: 'Tamil' },
    { id: 3, title: 'Hindi', sub: 'Hindi' },
    { id: 4, title: 'Arabic', sub: 'Arabic' },
    { id: 5, title: 'SINHALA', sub: 'Sinhala' },
    { id: 6, title: 'TELGU', sub: 'Telgu' },
    { id: 7, title: 'GUJU', sub: 'Guju' }]
export class InitialLaunchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisiblity: false
        }
    }

    handleClick = () => {
        this.setState({
            modalVisiblity: !this.state.modalVisiblity
        })
    }
    render() {
        const { modalVisiblity } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.languageWrapper}>
                    <TouchableOpacity onPress={() => this.handleClick()}>
                        <Text>
                            <Text style={styles.language}>English (United States)</Text>
                            <Icon name="caret-down" size={30} color={colors.gray1} />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Image style={styles.logo} source={require('../assets/instagramLogo.png')}></Image>
                    <PrimaryButton buttonLabel='create a new account' buttonBg={colors.primary} textColor={colors.secondary}></PrimaryButton>
                    <PrimaryButton buttonLabel='Login' buttonBg={colors.secondary} textColor={colors.primary}></PrimaryButton>
                </View>
                <View style={styles.bottomWrapper}>
                    <View style={styles.bottomContentWrapper}>
                        <Text style={styles.from}>from</Text>
                        <Text style={styles.facebook}>FACEBOOK</Text>
                    </View>
                </View>

                <Modal visible={modalVisiblity} transparent={true}>
                    <View style={[styles.modalCotainer, modalVisiblity ? { backgroundColor: 'rgba(0,0,0,0.5' } : null]}>
                        <View style={styles.modalContentCotainer}>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.title}>SELECT YOUR LANGUAGE</Text>
                            </View>
                            <View style={styles.underline} />
                            <View style={styles.searchboxWrapper}>
                                <SearchBox />
                                <View style={styles.underline} />
                                <FlatList
                                    data={DATA}
                                    keyExtractor={item => item.id}
                                    renderItem={({ item }) =>
                                        <View style={styles.languageListWrapper}>
                                            <Text style={styles.languageTitle}>{item.title}</Text>
                                            <Text style={styles.subtitle}>{item.sub}</Text>

                                        </View>

                                    }

                                />
                            </View>




                        </View>

                    </View>
                    <View >
                        <TouchableOpacity style={styles.closeModal} onPress={() => this.handleClick()}>
                            <Text >Close the modal   </Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default InitialLaunchScreen

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1
    },
    languageWrapper: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    language: {
        color: colors.gray1
    },
    buttonContainer: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomWrapper: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        height: '25%',
        width: '50%'
    },
    bottomContentWrapper: {
        borderTopColor: colors.gray1,
        borderTopWidth: 0.5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10

    },
    from: {
        color: colors.gray1
    },
    facebook: {
        fontWeight: 'bold'
    },
    modalCotainer: {
        display: 'flex',
        flex: 1,
        marginBottom: 90,
    },
    modalContentCotainer: {
        display: 'flex',
        flex: 1,
        backgroundColor: colors.secondary,
        marginLeft: '10%',
        marginRight: '10%',


    },
    closeModal: {
        marginBottom: 80,
        marginLeft: 10,
    },
    titleWrapper: {
        padding: 10
    },
    title: {
        fontSize: 20,
        fontWeight: '700'
    },
    underline: {
        height: 1,
        backgroundColor: colors.gray1
    },
    searchboxWrapper: {
        display: 'flex',
        flex: 1
    },
    languageListWrapper: {
        marginLeft: 10,
        marginBottom: 15
    },
    subtitle:{
        color:colors.gray1,
        fontSize:15
    },
    languageTitle:{
        fontSize: 20,
        fontWeight: '700'
    }


})