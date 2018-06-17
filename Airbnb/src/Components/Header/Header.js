import { Dimensions, View, StyleSheet } from 'react-native';
import React from 'react';

import TextButton from '../TextButton/TextButton';

const Header = () => (
	<View style={styles.container}>
		<TextButton text="Log in" style={styles.button} />
	</View>
);

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('screen');

const styles = StyleSheet.create({
	container: {
		height: SCREEN_HEIGHT * 0.07,
		width: SCREEN_WIDTH,
		justifyContent: 'flex-end',
	},
	button: {
		position: 'absolute',
		right: 25,
	},
});

export default Header;
