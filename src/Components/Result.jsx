import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const Result = ({setGameComplete, activeWord}) => {
  return (
    <View>
      <View style={styles.isGameCompleteWrapper}>
        <Text>
          <Text style={styles.bold}>Correct Word: {activeWord}</Text>
        </Text>
        <View>
          <Button
            title="Reset"
            onPress={() => {
              setGameComplete(false);
            }}
          />
        </View>
      </View>
    </View>
  );
};

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
  logo: {
    width: 80,
    height: 80,
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    // marginTop: -20,
  },

  subTitle: {
    textAlign: 'center',
    color: 'grey',
    fontSize: 20,
  },
  isGameCompleteWrapper: {
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
