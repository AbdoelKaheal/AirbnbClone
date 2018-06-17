import React from 'react';
import { Text, StyleSheet } from 'react-native';

const WelcomeText = props => (
	<Text style={[styles.hText, props.style]}>{props.text}</Text>
);

const styles = StyleSheet.create({
	hText: {
		fontSize: 32,
		color: 'white',
		fontWeight: '600',
	},
});

export default WelcomeText;
