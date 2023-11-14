import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import * as Constant from '../../utils';
import ButtonIcon from '../ButtonIcon';
import Gap from '../Gap';

const Balance = () => {
  return (
    <View style={styles.container}>
      <View style={styles.balanceInfo}>
        <View style={styles.text}>
          <Text style={styles.lblBalance}>Balance :</Text>
          <Text style={styles.valBalance}>Rp. 100.000</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.lblPoint}>Antar Point :</Text>
          <Text style={styles.valPoint}>100 points</Text>
        </View>
      </View>
      <View style={styles.btnAction}>
        <ButtonIcon title="Add Balance" />
        <Gap width={6} />
        <ButtonIcon title="Get Point" />
      </View>
    </View>
  );
};

export default Balance;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    marginTop: -windowHeight * 0.05,
    flexDirection: 'row',
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceInfo: {
    width: '60%',
  },
  lblBalance: {
    fontSize: 15,
    fontFamily: 'TitilliumWeb-Reguler',
  },
  valBalance: {
    fontSize: 15,
    fontFamily: 'TitilliumWeb-Bold',
  },
  lblPoint: {
    fontSize: 9,
    fontFamily: 'TitilliumWeb-Reguler',
  },
  valPoint: {
    fontSize: 9,
    fontFamily: 'TitilliumWeb-Bold',
    color: Constant.ACTIVE_COLOR,
  },
  btnAction: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
