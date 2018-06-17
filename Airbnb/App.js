import { Navigation } from 'react-native-navigation';
import Auth from './src/Screens/AuthScreen/AuthScreen';
Navigation.registerComponent('Airbnb.Auth', () => Auth);

Navigation.startSingleScreenApp({
	screen: {
		screen: 'Airbnb.Auth',
	},
});
