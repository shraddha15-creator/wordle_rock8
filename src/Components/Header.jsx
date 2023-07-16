import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.titleContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={styles.logo}
          source={require('../../src/assets/images/wordle-logo.png')}
        />
        <Text style={styles.title}>Wordle</Text>
      </View>
      <Text style={styles.subTitle}>
        Get 6 chances to guess a 5-letter word.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
