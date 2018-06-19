import { Dimensions, View, StyleSheet } from 'react-native';
import React, { Component } from 'react';

import TextButton from '../TextButton/TextButton';

class Header extends Component {
	handleLogin = () => {
		this.props.navigator.push({
			screen: 'Airbnb.LoginScreen',
		});
	};
	render() {
		return (
			<View style={styles.container}>
				<TextButton
					text="Log in"
					style={styles.button}
					onPress={this.handleLogin}
				/>
			</View>
		);
	}
}
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
