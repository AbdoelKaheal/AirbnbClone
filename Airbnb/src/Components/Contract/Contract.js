import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contract = () => (
	<View>
		<Text style={styles.text}>
			By tapping Continue, Create account or More options, I agree to Airbnb's
			Terms of Service, Payments Terms of Service, Privacy Policy, and
			Nondiscrimination Policy.
		</Text>
	</View>
);

const styles = StyleSheet.create({
	text: {
		color: 'white',
		fontWeight: 'bold',
	},
});

export default Contract;
