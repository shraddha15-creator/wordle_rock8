import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GuessWord} from './GuessWord';

export const GuessRow = ({guess, word, guessed}) => {
  return (
    <View style={styles.guessRow}>
      <GuessWord index={0} guess={guess} word={word} guessed={guessed} />
      <GuessWord index={1} guess={guess} word={word} guessed={guessed} />
      <GuessWord index={2} guess={guess} word={word} guessed={guessed} />
      <GuessWord index={3} guess={guess} word={word} guessed={guessed} />
      <GuessWord index={4} guess={guess} word={word} guessed={guessed} />
    </View>
  );
};

const styles = StyleSheet.create({
  guessRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
