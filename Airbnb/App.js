import { Navigation } from 'react-native-navigation';
import MainScreen from './src/Screens/MainScreen/MainScreen';
import MoreOptions from './src/Screens/MoreOptions/MoreOptions';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';

Navigation.registerComponent('Airbnb.MoreOptions', () => MoreOptions);
Navigation.registerComponent('Airbnb.LoginScreen', () => LoginScreen);
Navigation.registerComponent('Airbnb.MainScreen', () => MainScreen);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'Airbnb.MainScreen',
	},
});
