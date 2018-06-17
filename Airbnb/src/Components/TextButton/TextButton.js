import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TextButton = props => (
	<TouchableOpacity {...props}>
		<Text style={[styles.buttonText, props.buttonTextStyle]}>{props.text}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	buttonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 17,
	},
});

export default TextButton;
