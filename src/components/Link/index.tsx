import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface LinkProps {
  title: string;
  onPress?: any;
}
const Link: React.FC<LinkProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  text: {
    textDecorationLine: 'underline',
    fontSize: 14,
    fontWeight: '500',
    color: '#4A403A',
  },
});
