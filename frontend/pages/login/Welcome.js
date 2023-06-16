import { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

function Welcome ({navigation}) {

    const [currentSection, setCurrentSection] = useState('')
  
    const toggleSectionFullscreen = (section) => {
        if(currentSection === section) {
            setCurrentSection('')
        } else {
            setCurrentSection(section)
        }
    };
  
    const renderTopSection = () => {
      const sectionStyle = (currentSection === '' || currentSection != 'bottom')  ? styles.fullscreenSection : styles.halfscreenSection;
      return (
        <TouchableOpacity
          style={[styles.section, sectionStyle]}
          onPress={() => toggleSectionFullscreen('top')}
        >
            <View style={styles.view_title}>
                <Text style={styles.title}>Mode connecté</Text>
            </View>

          <View style={styles.view_desc}>
            <Text style={styles.desc}>Le mode connecté va vous permettre d'avoir pleins de fonctionnalités suplémentaires.
                Cependant vous aurez besoin d'un accès internet pour consulter votre stock
                </Text>
          </View>

          <View style={styles.view_img}>
          <Image 
                source={currentSection != 'top' ? require('../../assets/double-bas.png') : require('../../assets/double-haut.png') }
                                resizeMode='contain'
                                style={styles.img}
                                resizeMethod="resize"/>
            </View>

            <View style={currentSection != 'top' ? [styles.halfscreenSection] : null} >
                <View style={styles.view_section2}>
                    <Text style={styles.section2}>
                    Avantages:
                    </Text>
                    <FlatList
        data={[
          {key: "Possibilité de partager son compte pour avoir accès à l'application par plusieurs utilisateurs"},
          {key: "Options de partages de recette (V2)"},
          {key: "Possibilité de récuperer des aliments découvert par les autre utilisateur"},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}></FlatList>
                </View>
                <View style={styles.view_section2}>
                <Text style={styles.section2}>
                Inconvenient:
                </Text>
                <FlatList
        data={[
          {key: "Obligé d'avoir une connexion pour accedez à votre historique"},
          {key: "Obligé de crée un compte en ligne"},
          {key: "Possibilité de récuperer des aliments découvert par les autre utilisateur"},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}></FlatList>
                </View>

                <View style={styles.view_sign}>
                    <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}} style={styles.sign}>
                        <Text style={styles.textSign}>Choissir cette option</Text>
                    </TouchableOpacity>
                </View>


            </View>
        </TouchableOpacity>
      );
    };
  
    const renderBottomSection = () => {
      const sectionStyle = (currentSection === '' || currentSection != 'top') ? styles.fullscreenSection : styles.halfscreenSection;
      return (
            <TouchableOpacity
              style={[styles.section, sectionStyle]}
              onPress={() => toggleSectionFullscreen('bottom')}
            >
                <View style={styles.view_title}>
                    <Text style={styles.title}>Mode déconnecté</Text>
                </View>
    
              <View style={styles.view_desc}>
                <Text style={styles.desc}>Le mode déconnecté va vous permettre d'utiliser l'application rapidement.
                    Cependant beaucoup de fonctionnalités seront manquante
                    </Text>
              </View>
    

              <View style={styles.view_img}>
          <Image 
                source={currentSection === 'bottom' ? require('../../assets/double-bas.png') : require('../../assets/double-haut.png') }
                                resizeMode='contain'
                                style={styles.img}
                                resizeMethod="resize"/>
            </View>

                <View style={currentSection != 'bottom' ? [styles.halfscreenSection] : null} >
                    <View style={styles.view_section2}>
                        <Text style={styles.section2}>
                        Avantages:
                        </Text>
                        <FlatList
            data={[
              {key: "Création rapide"},
              {key: "Données stocké sur votre téléphone"},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}></FlatList>
                    </View>
                    <View style={styles.view_section2}>
                    <Text style={styles.section2}>
                    Inconvenient:
                    </Text>
                    <FlatList
            data={[
              {key: "Moins de fonctionnalités"},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}></FlatList>
                    </View>
    
                    <View style={styles.view_sign}>
                        <TouchableOpacity onPress={() => {navigation.navigate('SignUp')}} style={styles.sign}>
                            <Text style={styles.textSign}>Choissir cette option</Text>
                        </TouchableOpacity>
                    </View>
    
    
                </View>
            </TouchableOpacity>
        )
    };
  
    return (
      <View style={styles.container}>
        {renderTopSection()}
        {renderBottomSection()}
      </View>
    );
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 40
      },
      section: {
        flex: 1,
      },
      view_title: {
        height: 50,
        alignItems: 'center'
      },
      title: {
        fontSize: 42,
      },
      view_desc: {
        height: (Dimensions.get('window').height / 2) - 150,
        justifyContent: 'center',
        marginHorizontal: 25,
        textAlign: 'justify'
      },
      desc: {
        fontSize: 20,
      },
      view_img: {
        alignItems: 'center'
      },
      img: {
        width: 25,
        height: 25,
      },
      view_section2: {
        justifyContent: 'center',
        marginHorizontal: 25,
        textAlign: 'justify'
      },
      section2: {
        fontSize: 28,
      },
      halfscreenSection: {
        display: "none"
      },
      fullscreenSection: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      },
      view_sign: {
        marginVertical: 15,
        alignItems: "center",
      },
      sign: {
        width: 275,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row",
        backgroundColor: '#8607FE',
        borderRadius: 15
    },
    textSign: {
        fontWeight: "bold",
        color: "#FFF"
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})