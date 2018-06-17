import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/Screens/AuthScreen/AuthScreen';
import MoreOptions from './src/Screens/MoreOptions/MoreOptions';

Navigation.registerComponent('Airbnb.AuthScreen', () => AuthScreen);
Navigation.registerComponent('Airbnb.MoreOptions', () => MoreOptions);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'Airbnb.AuthScreen',
	},
});
