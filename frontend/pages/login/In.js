import { useContext, useState } from "react"

import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


const SignIn = ({navigation}) => {


    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleUserChange = (value) => {
        setUser(value)
    }

    const handlePasswordChange = (value) => {
        setPassword(value)
    }

    const handleClick = async () => {
        // const usr = await Authentification(user, password)
        //     if(!usr.error) {
            
        //         // Cookies.set('id', result.id, {sameSite: 'Strict'})
        //         // Cookies.set('name', result.user, {sameSite: 'Strict'})
        //         // Cookies.set('token', result.token, {sameSite: 'Strict'})


        //         auth.setAuth({
        //             id: usr.id,
        //             name: usr.name,
        //             token: usr.token,
        //             isConnected: true
        //         })
        // } else {
        //     console.log('mauvais mot de passe')
        // }
        

        // console.log(auth)
    }

    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Text style={styles.text_header}>Connexion</Text>
            </View>
            <View 
            style={styles.footer}
            animation="fadeInUpBig"
            >
                <Text style={styles.text_footer}>Nom d'utilisateur</Text>
                <View style={styles.action}>
                <Image 
                                    source={require('../../assets/user.png')}
                                    resizeMode='contain'
                                    style={styles.textImage}
                                    resizeMethod="resize"/>
                    <TextInput placeholder="Username" autoCapitalize="none" value={user} onChangeText={handleUserChange} style={styles.textInput} />
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Mot de passe</Text>
                <View style={styles.action}>
                    <Image 
                                    source={require('../../assets/password.png')}
                                    resizeMode='contain'
                                    style={styles.textImage}
                                    resizeMethod="resize"/>
                    <TextInput secureTextEntry={true} autoCapitalize="none" placeholder="Password" value={password} onChangeText={handlePasswordChange} style={styles.textInput} />
                </View>
                <TouchableOpacity onPress={() => {console.log('mot de passe oublié')}}><Text style={styles.forget}>Mot de passe oublié ?</Text></TouchableOpacity>
                
                <View style={styles.button}>
                <TouchableOpacity onPress={handleClick} style={styles.signIn}><Text style={styles.textSign}>Se Connecter</Text></TouchableOpacity>
                </View>

            </View>
        </View>
    )

}

export default SignIn

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#8607FE',
    },
    header: {
        flex: 1, 
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#8607FE',
        fontSize: 18
    },
    forget: {
        marginTop: 5,
        color: '#8607FE',
        fontSize: 14,
        fontStyle: "italic"
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#8607FE",
        paddingBottom: 5
    },
    textImage: {
        width: 25,
        height: 25
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "black"
    }, 
    button: {
        alignItems: "center",
        marginTop: 50,
        backgroundColor: '#8607FE',
        borderRadius: 15
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold"
    }
  });