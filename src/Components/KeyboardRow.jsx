import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const KeyboardRow = ({letters, onKeyPress}) => (
  <View style={styles.keyboardRow}>
    {letters.map(letter => (
      <TouchableOpacity onPress={() => onKeyPress(letter)} key={letter}>
        <View style={styles.key}>
          <Text style={styles.keyLetter}>{letter}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
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
