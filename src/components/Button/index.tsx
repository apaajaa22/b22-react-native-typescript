import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
  onPress?(): void;
}
const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDD2BF',
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
  },
});
