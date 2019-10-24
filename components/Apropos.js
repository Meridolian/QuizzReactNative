import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class Apropos extends Component {

    _return() {
        this.props.navigation.navigate("Accueil");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>B.I.T.E.</Text>
                <Text style={styles.label}>(Bureau d'Investigation de Tout Environnement)</Text>
                <Text style={styles.text}>Ce quizz vous est proposé par l'équipe de Mathieu, Maxime, Clément et Yanis, grâce aux questionnaires en libre service du site OpenQuizzDB.</Text>
                <Text style={styles.text}>Choisissez un thème et tentez de répondre à un maximum de question pour marquer le plus de point et finir à la tête du classement. </Text>

                <View style={styles.button}>
                    <Button onOress={() => this._return()} title='Retour' type='clear' />
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
        textAlign: 'center',
    },
    text: {
        fontSize: 14,
        margin: 20,
        textAlign: 'center',
    },
    button: {
        margin: 20,
    },
    label: {
        fontSize: 12,
        marginBottom: 30,
        textAlign: 'center',
    }
});