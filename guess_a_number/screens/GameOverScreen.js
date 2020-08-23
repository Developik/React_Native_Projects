import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert, Image } from 'react-native';

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors';
import MainButton from '../components/MainButton'


const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>
                The Game is Over!
            </TitleText>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    fadeDuration={300}
                    resizeMode="cover"
                    source={require('../assets/success.png')}
                //source = {{uri: 'https://pixabay.com/get/53e4d2444354aa14f6d1867dda35367b1c37dee35550704a_1920.jpg'}}
                />
            </View>
            <View style={styles.resultBody}>
                <BodyText style={styles.resultText}>
                    Your phone needed
                <Text style={styles.highlight}> {props.roundsNumber} </Text>
                rounds to guess the number
                <Text style={styles.highlight}> {props.userNumber} </Text>
                </BodyText>
            </View>
            <MainButton
                onPress={props.onConfigureNewGame}>
                New Game
            </MainButton>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        height: 300,
        width: 300,
        overflow: 'hidden',
        marginVertical: 10
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
        fontSize: 20
    },
    resultBody: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center'
    }

});

export default GameOverScreen;