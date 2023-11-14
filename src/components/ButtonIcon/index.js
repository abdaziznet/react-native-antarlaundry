import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Icons from '../../assets';
import * as Constant from '../../utils';

const ButtonIcon = ({title}) => {
  const Icon = () => {
    if (title === 'Add Balance') return <Icons.IconAddBalance />;
    if (title === 'Get Point') return <Icons.IconGetPoint />;
    return <Icons.IconAddBalance />;
  };

  return (
    <TouchableOpacity>
      <View style={styles.icon}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: Constant.BG_COLOR_ICON,
    borderRadius: 5,
    padding: 5,
  },
  text: {
    fontSize: 8,
    fontFamily: 'TitilliumWeb-Bold',
    textAlign: 'center',
  },
});
