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
import {Balance, ButtonIcon} from '../../components';

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
      <Balance />
      <View style={styles.service}>
        <Text style={styles.subTitle}>Our Service</Text>
        <View style={styles.iconService}>
          <ButtonIcon title={'Kilos'} type={'service'} />
          <ButtonIcon title={'Unit'} type={'service'} />
          <ButtonIcon title={'VIP'} type={'service'} />
          <ButtonIcon title={'Carpet'} type={'service'} />
          <ButtonIcon title={'Only Iron'} type={'service'} />
          <ButtonIcon title={'Express'} type={'service'} />
        </View>
      </View>
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
  service: {
    paddingHorizontal: 30,
    paddingTop: 15,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: 'TitilliumWeb-Bold',
    color: '#000000',
  },
  iconService: {
    // paddingTop: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    flexWrap: 'wrap',
    borderRadius: 10,
  },
});
