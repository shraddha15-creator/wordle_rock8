import React from 'react';
import {KeyboardRow} from './KeyboardRow';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Keyboard = ({onKeyPress}) => {
  const keyboardRow1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const keyboardRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keyboardRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'];

  return (
    <View style={styles.keyboard}>
      <KeyboardRow letters={keyboardRow1} onKeyPress={onKeyPress} />
      <KeyboardRow letters={keyboardRow2} onKeyPress={onKeyPress} />
      <KeyboardRow letters={keyboardRow3} onKeyPress={onKeyPress} />
      <View style={styles.keyboardRow}>
        <TouchableOpacity onPress={() => onKeyPress('ENTER')}>
          <View style={styles.key}>
            <Text style={styles.keyLetter}>ENTER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: 'column',
    backgroundColor: '#262626',
    paddingTop: 20,
    margin: 10,
    borderRadius: 10,
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  key: {
    backgroundColor: '#ddd',
    padding: 10,
    margin: 3,
    borderRadius: 5,
    elevation: 5,
  },
  keyLetter: {
    fontWeight: '500',
    fontSize: 15,
  },
});
