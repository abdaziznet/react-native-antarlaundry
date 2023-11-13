import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Icons from '../../assets';
import * as Constants from '../../utils';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home')
      return isFocused ? <Icons.IconHomeActive /> : <Icons.IconHome />;
    if (label === 'Orders')
      return isFocused ? <Icons.IconOrdersActive /> : <Icons.IconOrders />;
    if (label === 'Profile')
      return isFocused ? <Icons.IconProfileActive /> : <Icons.IconProfile />;
    return <Icons.IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    color: isFocused ? Constants.ACTIVE_COLOR : Constants.NON_ACTIVE_COLOR,
    margin: 5,
  }),
});
