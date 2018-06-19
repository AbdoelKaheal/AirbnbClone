import { Navigation } from 'react-native-navigation';
import MainScreen from './src/Screens/MainScreen/MainScreen';
import MoreOptions from './src/Screens/MoreOptions/MoreOptions';

Navigation.registerComponent('Airbnb.MainScreen', () => MainScreen);
Navigation.registerComponent('Airbnb.MoreOptions', () => MoreOptions);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'Airbnb.MainScreen',
	},
});
