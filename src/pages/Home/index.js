import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ImageHeader, Logo} from '../../assets';
import {ActiveOrder, Balance, ButtonIcon} from '../../components';
import * as Constant from '../../utils';

const Home = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <View style={styles.activeOrder}>
          <Text style={styles.subTitle}>Active Order</Text>
          <ActiveOrder orderNo="Order No: 0012989" status="On Progress" />
          <ActiveOrder orderNo="Order No: 0012988" status="Pending" />
          <ActiveOrder orderNo="Order No: 0012987" status="On Progress" />
          <ActiveOrder orderNo="Order No: 0012986" status="Completed" />
          <ActiveOrder orderNo="Order No: 0012985" status="Pending" />
          <ActiveOrder orderNo="Order No: 0012984" status="On Progress" />
          <ActiveOrder orderNo="Order No: 0012983" status="Completed" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: windowWidth,
    height: windowHeight * 0.3,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  logo: {
    width: windowWidth * 0.25,
    height: windowHeight * 0.05,
  },
  title: {
    marginTop: windowHeight * 0.05,
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
    paddingHorizontal: 25,
    paddingTop: 5,
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
  activeOrder: {
    paddingTop: 5,
    paddingHorizontal: 25,
    backgroundColor: Constant.BG_COLOR_GREY,
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
