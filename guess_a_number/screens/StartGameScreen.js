import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native';

import Card from '../components/Card'
import Colors from '../constants/colors'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import BodyText from '../components/BodyText'
import MainButton from '../components/MainButton'

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {

        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const choosenNumber = parseInt(enteredValue);
        if (isNaN(choosenNumber) || choosenNumber <= 0 ||
            choosenNumber > 99) {
            Alert.alert('Invalid Number',
                'Number has to be a number between 1 and 99',
                [{
                    text: 'Okay', style: 'destructive',
                    onPress: resetInputHandler
                }])
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <Text> Selected Number</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress = {() =>
                 props.onStartGame(selectedNumber)}>
                     Start Game
                </MainButton>

            </Card>
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}> Start a New Game! </Text>
                <Card style={styles.inputContainer}>
                    <BodyText> Select a Number</BodyText>
                    <Input style={styles.input}
                        blurOnSubmit autoCapitalize="none"
                        maxLength={2} autoCorrect={false}
                        keyboardType="number-pad"
                        onChangeText={numberInputHandler}
                        value={enteredValue}

                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button} ><Button
                            title="Reset"
                            color={Colors.accent}
                            onPress={resetInputHandler} />
                        </View>
                        <View style={styles.button} >
                            <Button
                                title="Confirm"
                                color={Colors.primary}
                                onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 50,
        textAlign: "center"
    },
    button: {
        width: 80
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }

});

export default StartGameScreen;