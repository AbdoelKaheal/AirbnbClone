import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

const GradientWrapper = props => (
	<LinearGradient
		colors={['rgb(9,84,99)', 'rgb(19,131,136)']}
		style={styles.container}
		start={{ x: 0.1, y: 0.3 }}
		end={{ x: 1, y: 1 }}
	>
		{props.children}
	</LinearGradient>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

export default GradientWrapper;
