import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const GuessWord = ({index, guess, word, guessed}) => {
  const letter = guess[index];
  const wordLetter = word[index];

  const blockStyles = [styles.guessSquare];
  const textStyles = [styles.guessLetter];

  if (letter === wordLetter && guessed) {
    blockStyles.push(styles.guessCorrect);
    textStyles.push(styles.guessedLetter);
  } else if (word.includes(letter) && guessed) {
    blockStyles.push(styles.guessInWord);
    textStyles.push(styles.guessedLetter);
  } else if (guessed) {
    blockStyles.push(styles.guessNotInWord);
    textStyles.push(styles.guessedLetter);
  }

  return (
    <View style={blockStyles}>
      <Text style={textStyles}>{letter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  guessSquare: {
    borderColor: '#ddd',
    borderWidth: 2,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 10,
  },
  guessLetter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#878a8c',
  },
  guessedLetter: {
    color: '#fff',
  },
  guessCorrect: {
    // backgroundColor: '#6aaa64',
    backgroundColor: '#95c27e',
    borderColor: 'green',
  },
  guessInWord: {
    // backgroundColor: '#c9b458',
    backgroundColor: '#a2ad40',
    borderColor: 'yellow',
  },
  guessNotInWord: {
    // backgroundColor: '#787c7e',
    backgroundColor: '#aaa',
    borderColor: '#bbb',
  },
});
