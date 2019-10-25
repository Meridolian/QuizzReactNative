import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Dialog, { DialogContent } from 'react-native-popup-dialog';


export default class Quizz extends Component {

    tab = [
        {
            id: "1",
            question: "Quel plombier de jeu vidéo, vêtu de rouge, est également la mascotte de Nintendo ?",
            choix1: "Luigi",
            choix2: "Wario",
            choix3: "Mario",
            choix4: "Peach",
            reponse: "Mario",
            anecdote: "Mario est facilement reconnaissable à sa moustache, sa salopette, ses gants blancs et sa casquette rouge marquée d'un M."
        },
        {
            id: "2",
            question: "Quel a été le tout premier nom de Mario, apparu en 1981 dans le jeu 'Donkey Kong' ?",
            choix1: "Link",
            choix2: "Jumpman",
            choix3: "Yoshi",
            choix4: "Zelda",
            reponse: "Jumpman",
            anecdote: "Les jeux de la série 'Super Mario' ont joué un rôle important dans l'évolution du jeu de plates-formes."
        },
        {
            id: "3",
            question: "Quel était le nom de prototype de la  console de jeux vidéo de salon GameCube ?",
            choix1: "Revolution",
            choix2: "Dolphin",
            choix3: "Game 128",
            choix4: "Famicon",
            reponse: "Dolphin",
            anecdote: "C'est le 24 août 2000 que la machine est officiellement présentée avec son nouveau nom, la GameCube."
        },
        {
            id: "4",
            question: "Que faisait la société Nintendo avant de produire des jeux vidéo ?",
            choix1: "Des dés à jouer",
            choix2: "Des montres",
            choix3: "Des livres",
            choix4: "Des cartes à jouer",
            reponse: "Des cartes à jouer",
            anecdote: "C'est à partir des années 1970 que la société Nintendo a diversifié ses activités en produisant des jouets et des bornes d'arcade."
        },
        {
            id: "5",
            question: "Quelle arme est utilisée par Luigi dans 'Luigi's Mansion' sous la dénomination « Ectoblast 3000 » ?",
            choix1: "Un aspirateur",
            choix2: "Une raquette",
            choix3: "Un lance-flammes",
            choix4: "Un marteau",
            reponse: "Un aspirateur",
            anecdote: "Le jeu retrace les aventures de Luigi dans un manoir qu'il a gagné lors d'un concours auquel il n'a jamais participé."
        },
    ]

    state = {
        visible: false,
        quizz: this.tab[0],
        titlepopup: "Question Suivante",
        counter: 0,
    }


    appearPopup = (choix) => {
        if (this.state.quizz.id == 5){
            this.setState({
                titlepopup: 'Resultat'
            })
        }
        else {
            this.setState({
                titlepopup: "Question Suivante"
            })
        }

        if (choix == this.state.quizz.reponse) {
            this.setState({
                visible: true,
                winlose: "VRAI",
                textColor: "green",
                counter: this.state.counter + 1
            })
        }
        else if (choix != this.state.quizz.reponse) {
            this.setState({
                visible: true,
                winlose: "FAUX",
                textColor: 'red',
            })
        }

        console.log(this.state.counter);
    }


    nextStep = () => {
        if (this.state.quizz.id == 5) {
            this.setState({
                visible: false
            })
            this.props.navigation.navigate('Resultat', { data: { counter: this.state.counter} })
        }
        else {
            this.setState({
                visible: false,
                quizz: this.tab[this.state.quizz.id++]
            })
        }
    }

    render() {
        return (
            <View style={style.main_container}>
                {/** QUESTION */}
                <Text style={style.question}>
                    {this.state.quizz.question}
                </Text>

                {/** BOUTONS REPONSE */}
                <View style={style.boutons}>
                    <Button
                        containerStyle={style.bouton}
                        title={this.state.quizz.choix1}
                        type="outline"
                        onPress={() => {
                            this.appearPopup(this.state.quizz.choix1)

                        }}
                    />
                    <Button
                        style={style.bouton}
                        title={this.state.quizz.choix2}
                        type="outline"
                        onPress={() => {
                            this.appearPopup(this.state.quizz.choix2)
                        }}
                    />
                    <Button
                        style={style.bouton}
                        title={this.state.quizz.choix3}
                        type="outline"
                        onPress={() => {
                            this.appearPopup(this.state.quizz.choix3)
                        }}
                    />
                    <Button
                        style={style.bouton}
                        title={this.state.quizz.choix4}
                        type="outline"
                        onPress={() => {
                            this.appearPopup(this.state.quizz.choix4)
                        }}
                    />
                    <Dialog
                        visible={this.state.visible}
                        onTouchOutside={() => {
                            this.setState({ visible: false });
                        }}
                    >
                        <DialogContent style={style.popup}>

                            <Text style={style.elementpopup, { color: this.state.textColor }}>{this.state.winlose}</Text>
                            <Text style={style.elementpopup}>{this.state.quizz.reponse}</Text>
                            <Text style={style.elementpopup}>{this.state.quizz.anecdote}</Text>
                            <Button
                                title={this.state.titlepopup}
                                type="outline"
                                onPress={this.nextStep}

                            />
                        </DialogContent>
                    </Dialog>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    main_container: {
        flex: 1,
        paddingTop: 40
    },
    question: {
        position: 'relative',
        alignItems: 'center',
        paddingTop: 20,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    boutons: {
        position: 'relative',
        alignItems: 'flex-start',
        paddingTop: 25,
        paddingLeft: 15,
        marginRight: 20
    },
    bouton: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 20

    },
    popup: {

    },
    elementpopup: {
        position: 'relative',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 20
    }
})
