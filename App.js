import React, { Component } from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import Accueil from "./components/Accueil";
import QuizzList from "./components/QuizzList";
import Quizz from "./components/Quizz";
import Resultat from "./components/Resultat";
import Score from "./components/Score";
import Apropos from "./components/Apropos";
import { createStackNavigator } from "react-navigation-stack";
import BottomNavigation, { FullTab } from "react-native-material-bottom-navigation";
import { Ionicons } from "@expo/vector-icons";
import NavigationService from "./services/NavigationService";


const AppNavigator = createStackNavigator(
	{
		Accueil: { screen: Accueil },
		QuizzList: { screen: QuizzList },
		Quizz: { screen: Quizz },
		Resultat: { screen: Resultat },
		Score: { screen: Score },
		Apropos: { screen: Apropos }
	},
	{
		defaultNavigationOptions: {
		  header: null
		}
	}
);

const Router = createAppContainer(AppNavigator);

export default class App extends Component {

	state = {
		activeTab: "Accueil"
	};

	tabs = [
		{
			key: "Accueil",
			icon: "md-home",
			label: "Accueil",
			barColor: "#FF6F61"
		},
		{
			key: "QuizzList",
			icon: "md-reorder",
			label: "Quizz Liste",
			barColor: "#FF6F61"
		},
		{
			key: "Score",
			icon: "md-podium",
			label: "High Score",
			barColor: "#FF6F61"
		},
		{
			key: "Apropos",
			icon: "md-information-circle-outline",
			label: "Apropos",
			barColor: "#FF6F61"
		}
	];

	renderIcon = icon => ({ isActive }) => (
		<Ionicons size={24} color="white" name={icon} />
	);

	renderTab = ({ tab, isActive }) => (
		<FullTab
			isActive={isActive}
			key={tab.key}
			label={tab.label}
			renderIcon={this.renderIcon(tab.icon)}
		/>
	);

	BottomNavigationHandler = key => {
		this.setState({ activeTab: key });
		NavigationService.navigate(key);
	};

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Router
					ref={navigatorRef => {
					NavigationService.setTopLevelNavigator(navigatorRef);
					}}
					style={{ flex: 1 }}
          		/>
				<BottomNavigation
					activeTab={this.state.activeTab}
					onTabPress={newTab => this.BottomNavigationHandler(newTab.key)}
					renderTab={this.renderTab}
					tabs={this.tabs}
				/>
			</View>
		);
	}
}
