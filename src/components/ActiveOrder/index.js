import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {IconActiveOrder} from '../../assets';
import * as Contstant from '../../utils';

const ActiveOrder = ({orderNo, status}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <IconActiveOrder />
      <View style={styles.text}>
        <Text style={styles.orderNo}>{orderNo}</Text>
        <Text style={styles.status(status)}>{status}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveOrder;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const getColor = status => {
  switch (status) {
    case 'Completed':
      return Contstant.ACTIVE_COLOR;
    case 'On Progress':
      return Contstant.FONT_COLOR_BLUE;
    case 'Pending':
      return Contstant.FONT_COLOR_ORANGE;
    default:
      return Contstant.FONT_COLOR_ORANGE;
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
    padding: 7,
    backgroundColor: 'white',
    marginVertical: windowHeight * 0.01,
    alignItems: 'center',
  },
  text: {
    marginLeft: windowWidth * 0.02,
  },
  orderNo: {
    fontSize: 15,
    fontFamily: 'TitilliumWeb-SemiBold',
  },
  status: status => ({
    fontSize: 12,
    fontFamily: 'TitilliumWeb-Light',
    color: getColor(status),
  }),
});
