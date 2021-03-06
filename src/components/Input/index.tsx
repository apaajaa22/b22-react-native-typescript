import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface InputProps {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  onChangeText?: any;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  secureTextEntry,
  onChangeText,
  value,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        style={styles.TextInput}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '700',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 15,
  },
});
