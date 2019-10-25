import React from 'react';
import { View, TextInput, Text, ImageBackground, Image } from 'react-native';
import { Button } from 'react-native-elements';

class Resultat extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            input : "",
            score : "0",
            //jsonData : [],
        }
    }

    // componentDidMount() {
    //     fetch('https://www.kiwime.com/oqdb/files/1041369882/OpenQuizzDB_041/openquizzdb_41.json')
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.setState({ jsonData: data })
    //       //console.log(this.state.jsonData)
    //     })
    //     .catch(console.log)
    //     //this.setState({data: this.state.jsonData.quizz.confirmé[0].question})
    //   }    

    _setTextInput(text){
        this.setState({input: text})
    }

    _getTextScore(){
        return this.state.score
    }

    // _getTextJsonData(){
    //     // var data = this.state.jsonData.quizz.débutant.map(function(item) {
    //     //     return {
    //     //         key: item.id,
    //     //         label: item.question
    //     //     };
    //     // });
    //     var data = new Object()
    //     data = this.state.jsonData.quizz
    //     console.log(data.débutant[0])
    //     return this.state.jsonData.thème
    // }

    render() {
        
        const { counter } = this.props.navigation.state.params.data

        return(
            <View style={style.vue}>
                <Text style={style.textScore}>VOTRE SCORE</Text>
                <Text style={style.score}>{counter}/5</Text>
                <TextInput style={style.textScore}placeholder='Nom' onChangeText={(text) => this._setTextInput(text)} ref={input => { this.textInput = input }}/>
                <Button title='CONTINUER VERS LEADERBOARD'></Button>
            </View>
        )
    }
}

const style = {
    vue:{
        marginTop: 100,
        marginBottom: 100,
        paddingTop: 40,
        paddingBottom: 100,
        alignItems:'center',
        flex: 1,
        flexDirection: 'columns',
        justifyContent: 'space-between',
        borderColor: '#000000',
        borderWidth: 1,
    },

    score:{
        fontSize: 100
    },

    textScore:{
        fontSize: 30
    }
}
export default Resultat
