import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ImageHeader, Logo} from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <Image source={Logo} style={styles.logo}></Image>
        <View style={styles.title}>
          <Text style={styles.welcome}>Welcome,</Text>
          <Text style={styles.username}>Abdul Aziz</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.06,
  },
  title: {
    marginTop: windowHeight * 0.04,
  },
  welcome: {
    color: '#000000',
    fontFamily: 'TitilliumWeb-Reguler',
    fontSize: 15,
  },
  username: {
    color: '#000000',
    fontSize: 27,
    fontFamily: 'TitilliumWeb-Bold',
  },
});
