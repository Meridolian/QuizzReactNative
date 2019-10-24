import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Accueil from './components/Accueil';
import QuizzList from './components/QuizzList.js';
import Quizz from './components/Quizz.js';
import Resultat from './components/Resultat.js';
import Score from './components/Score.js';
import Apropos from './components/Apropos';

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
		</View>
	);
}

const AppNavigator = createBottomTabNavigator(
	{
		Accueil: Accueil,
		QuizzList: QuizzList,
		Quizz: Quizz,
		Resultat: Resultat,
		Score: Score,
		Apropos: Apropos 
	},
	{
		initialRouteName: 'Home'
	}	
)
const Navbar = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
