import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
//Auto indent : Shift Option F

export default class Accueil extends Component {

    _goToDetails() {
        this.props.navigation.navigate("APropos");
    }
    _startQuizz() {
        this.props.navigation.navigate("Quizz");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Oh, bonjour et bienvenue dans LE quizz</Text>
                <View style={styles.button}>
                    <Button onPress={() => this._startQuizz()} title='Commencer' />
                </View>
                <View style={styles.button}>
                    <Button onOress={() => this._goToDetails()} title='A Propos' type='clear' />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        marginBottom: 100,
        margin: 30,
        textAlign: 'center',
    },
    button: {
        margin: 20,
    }
});
