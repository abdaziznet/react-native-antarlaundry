import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import * as Icons from '../../assets';
import * as Constant from '../../utils';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    if (title === 'Add Balance') return <Icons.IconAddBalance />;
    if (title === 'Get Point') return <Icons.IconGetPoint />;
    if (title === 'Kilos') return <Icons.IconKilos />;
    if (title === 'Unit') return <Icons.IconUnit />;
    if (title === 'VIP') return <Icons.IconVIP />;
    if (title === 'Carpet') return <Icons.IconCarpet />;
    if (title === 'Only Iron') return <Icons.IconIron />;
    if (title === 'Express') return <Icons.IconExpress />;
    return <Icons.IconAddBalance />;
  };

  return (
    <TouchableOpacity>
      <View style={styles.icon(type)}>
        <Icon />
      </View>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  //   container: type => ({
  //     marginBottom: type === 'service' ? 12 : 0,
  //     marginRight: type === 'service' ? 12 : 0,
  //   }),
  icon: type => ({
    backgroundColor: Constant.BG_COLOR_ICON,
    borderRadius: 5,
    padding: type === 'service' ? 20 : 5,
  }),
  text: type => ({
    fontSize: type === 'service' ? 12 : 8,
    fontFamily: 'TitilliumWeb-Bold',
    textAlign: 'center',
    paddingBottom: type === 'service' ? 9 : 0,
  }),
});
