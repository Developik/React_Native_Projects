import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View,
  SafeAreaView
} from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


import Header from './components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),

  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return <AppLoading startAsync={fetchFonts}
      onFinish={() => { setDataLoaded(true) }} />
  }

  const configureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(0);
  }

  const startGameHandler = (selecterNumber) => {
    setUserNumber(selecterNumber);
    setGuessRounds(0);
  }

  const GameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={
    startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber}
      onGameOver={GameOverHandler} />;
  }
  else if (guessRounds > 0) {
    content = <GameOverScreen
      roundsNumber={guessRounds}
      userNumber={userNumber}
      onConfigureNewGame={configureNewGame} />
  }

  return (
    <SafeAreaView style={styles.screen}>
        <Header title="Guess a Number" />
        {content}
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
