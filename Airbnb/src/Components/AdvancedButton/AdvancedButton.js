import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const AdvancedButton = props => {
	return (
		<TouchableOpacity style={[styles.button, props.style]}>
			{props.iconName ? (
				<Icon
					name={props.iconName}
					size={props.iconSize ? props.iconSize : 21}
					color={props.iconColor}
					style={styles.icon}
				/>
			) : (
				undefined
			)}
			<Text style={[styles.text, props.textStyle]}>{props.text}</Text>
		</TouchableOpacity>
	);
};

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('screen');

const styles = StyleSheet.create({
	button: {
		width: SCREEN_WIDTH - 50,
		height: 0.06 * SCREEN_HEIGHT,
		flexDirection: 'row',
		borderRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#fff',
		borderStyle: 'solid',
		backgroundColor: 'transparent',
	},
	icon: {
		position: 'absolute',
		left: 20,
	},
	text: {
		fontSize: 18,
		color: 'white',
	},
});

export default AdvancedButton;
