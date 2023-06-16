import { useContext, useState } from "react"
import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"


const SignUp = ({navigation}) => {

    const [user, setUser] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleUserChange = (value) => {
        setUser(value)
    }

    const handleMailChange = (value) => {
        setMail(value)
    }

    const handlePasswordChange = (value) => {
        setPassword(value)
    }

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value)
    }

    const handleClick = async () => {
        //const response = await Register(user, mail, password)

        // auth.setAuth({
        //     id: response.id,
        //     name: response.name,
        //     token: response.token,
        //     isConnected: true
        // })
    }

    return (
        <View style={styles.container}> 
            <View style={styles.header}>
                <Text style={styles.text_header}>S'enregistrer</Text>
            </View>
            <View 
            style={styles.footer}
            >
                <Text style={styles.text_footer}>Nom d'utilisateur</Text>
                <View style={styles.action}>
                <Image 
                                    source={require('../../assets/user.png')}
                                    resizeMode='contain'
                                    style={styles.textImage}
                                    resizeMethod="resize"/>
                    <TextInput value={user} onChangeText={handleUserChange} placeholder="Username" autoCapitalize="none"  style={styles.textInput} />
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Adresse mail</Text>
                <View style={styles.action}>
                    <Image 
                                    source={require('../../assets/mail.png')}
                                    resizeMode='contain'
                                    style={styles.textImage}
                                    resizeMethod="resize"/>
                    <TextInput value={mail} onChangeText={handleMailChange} autoCapitalize="none" keyboardType="email-address" placeholder="Mail" style={styles.textInput} />
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Mot de passe</Text>
                <View style={styles.action}>
                    <Image 
                                    source={require('../../assets/password.png')}
                                    resizeMode='contain'
                                    style={styles.textImage}
                                    resizeMethod="resize"/>
                    <TextInput value={password} onChangeText={handlePasswordChange} secureTextEntry={true} autoCapitalize="none" placeholder="Password" style={styles.textInput} />
                </View>
                <Text style={[styles.text_footer, {marginTop: 35}]}>Confirmation</Text>
                <View style={styles.action}>
                    <Image 
                                    source={require('../../assets/password.png')}
                                    resizeMode='contain'
                                    style={styles.textImage}
                                    resizeMethod="resize"/>
                    <TextInput value={confirmPassword} onChangeText={handleConfirmPasswordChange} secureTextEntry={true} autoCapitalize="none" placeholder="Password" style={styles.textInput} />
                </View>
                <View style={styles.button}>
                <TouchableOpacity onPress={handleClick} style={styles.signIn}><Text style={styles.textSign}>S'enregistrer</Text></TouchableOpacity>
                </View>

            </View>
        </View>
    )

}

export default SignUp

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