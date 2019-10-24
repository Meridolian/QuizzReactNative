import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import Dialog, { DialogContent } from 'react-native-popup-dialog';


export default class Quizz extends Component {

    state = {
        visible: false,
        bonneReponse: "2 terrains de football. 2 terrains."
    }

    render() {
        return(
            <View style={style.main_container}>
                {/** QUESTION */}
                <Text style={style.question}>
                    La tour Eiffel, en guise de comparaison, mesure comme ? La tour Eiffel, en guise de comparaison, mesure comme ? La tour Eiffel, en guise de comparaison, mesure comme ?
                </Text>

                {/** BOUTONS REPONSE */}
                <View style={style.boutons}>
                    <Button 
                        containerStyle={style.bouton}
                        title="2 terrains de football. 2 terrains."
                        type="outline"
                        onPress={() => {
                            this.setState({ visible: true });
                            
                        }} 
                    />
                    <Button 
                        style={style.bouton}
                        title="Un immeuble de 15 étages. "
                        type="outline"
                        onPress={() => {
                            this.setState({ visible: true });
                        }}
                    />
                    <Button 
                        style={style.bouton}
                        title="Ma bite."
                        type="outline"
                        onPress={() => {
                            this.setState({ visible: true });
                        }}
                    />
                    <Button 
                        style={style.bouton}
                        title="Un Boeing 747."
                        type="outline"
                        onPress={() => {
                            this.setState({ visible: true });
                        }}
                    />
                    <Dialog
                        visible={this.state.visible}
                        onTouchOutside={() => {
                        this.setState({ visible: false });
                        }}
                    >
                        <DialogContent style={style.popup}>
                            
                            <Text style={style.elementpopup}>REPONSE DU USER</Text>
                            <Text style={style.elementpopup}>REPONSE DE L'API</Text>
                            <Text style={style.elementpopup}>ANECDOTE DE LA QUESTION</Text>
                            <Button
                                title="Question Suivante"
                                type="outline"
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
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 20
    }
})
