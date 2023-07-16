/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {GuessRow} from './src/Components/GuessRow';
import {Keyboard} from './src/Components/Keyboard';
import {Result} from './src/Components/Result';
import {Header} from './src/Components/Header';

const words = ['WASTE', 'EMPTY', 'SHIFT', 'CHEAT', 'HARRY', 'WHICH'];

const defaultGuess = {
  0: '',
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
};

function App() {
  const [activeWord, setActiveWord] = React.useState(words[0]);
  const [guessIndex, setGuessIndex] = React.useState(0);
  const [guesses, setGuesses] = React.useState(defaultGuess);
  const [gameComplete, setGameComplete] = React.useState(false);

  const handleKeyPress = letter => {
    const guess = guesses[guessIndex];

    if (letter === 'ENTER') {
      if (guess.length !== 5) {
        alert('Word too short.');
        return;
      }

      if (!words.includes(guess)) {
        alert('Not a valid word.');
        return;
      }

      if (guess === activeWord) {
        setGuessIndex(guessIndex + 1);
        setGameComplete(true);
        alert('You win!');
        return;
      }

      if (guessIndex < 5) {
        setGuessIndex(guessIndex + 1);
      } else {
        setGameComplete(true);
        alert('You lose!');
        return;
      }
    }

    if (letter === '⌫') {
      setGuesses({...guesses, [guessIndex]: guess.slice(0, -1)});
      return;
    }

    // don't add if guess is full
    if (guess.length >= 5) {
      return;
    }

    setGuesses({...guesses, [guessIndex]: guess + letter});
  };

  React.useEffect(() => {
    if (!gameComplete) {
      setActiveWord(words[Math.floor(Math.random() * words.length)]);
      setGuesses(defaultGuess);
      setGuessIndex(0);
    }
  }, [gameComplete]);
  console.log('====================================');
  console.log(activeWord);
  console.log('====================================');
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View>
        <GuessRow
          guess={guesses[0]}
          word={activeWord}
          guessed={guessIndex > 0}
        />
        <GuessRow
          guess={guesses[1]}
          word={activeWord}
          guessed={guessIndex > 1}
        />
        <GuessRow
          guess={guesses[2]}
          word={activeWord}
          guessed={guessIndex > 2}
        />
        <GuessRow
          guess={guesses[3]}
          word={activeWord}
          guessed={guessIndex > 3}
        />
        <GuessRow
          guess={guesses[4]}
          word={activeWord}
          guessed={guessIndex > 4}
        />
        <GuessRow
          guess={guesses[5]}
          word={activeWord}
          guessed={guessIndex > 5}
        />
      </View>
      <View>
        {gameComplete ? (
          <Result setGameComplete={setGameComplete} activeWord={activeWord} />
        ) : (
          <Keyboard onKeyPress={handleKeyPress} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  guessRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  container: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#1c1c1c',
  },
  gameCompleteWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  bold: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default App;
