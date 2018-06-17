import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AdvancedButton from '../AdvancedButton/AdvancedButton';
import WelcomeText from '../WelcomeText/WelcomeText';
import TextButton from '../TextButton/TextButton';
import Contract from '../Contract/Contract';
class Body extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					source={require('../../../assets/images/Logo.png')}
					style={styles.img}
				/>
				<WelcomeText text="Welcome to Airbnb." />
				<View style={styles.btnContainer}>
					<AdvancedButton
						text="Continue with Facebook"
						iconName="facebook-f"
						iconColor="rgb(9,84,99)"
						style={{ backgroundColor: 'white' }}
						textStyle={{ color: 'rgb(20,98,109)' }}
					/>
					<AdvancedButton text="Create Account" />
				</View>

				<TextButton text="More Options" />
				<Contract />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 25,
		height: 500,
		justifyContent: 'space-around',
	},
	img: {
		height: 60,
		width: 60,
	},
	btnContainer: {
		height: 100,
		width: '100%',
		justifyContent: 'space-between',
	},
});

export default Body;
