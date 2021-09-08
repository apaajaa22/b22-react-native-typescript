import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface LinkProps {
  title: string;
}
const Link: React.FC<LinkProps> = ({title}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
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
