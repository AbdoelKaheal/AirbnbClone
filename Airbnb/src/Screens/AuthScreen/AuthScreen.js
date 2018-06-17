import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';
class Auth extends Component {
	static navigatorStyle = {
		navBarHidden: true,
	};
	render() {
		return (
			<LinearGradient
				colors={['rgb(9,84,99)', 'rgb(19,131,136)']}
				style={styles.container}
				start={{ x: 0.1, y: 0.3 }}
				end={{ x: 1, y: 1 }}
			>
				<Header />
				<ScrollView contentContainerStyle={styles.wrapper}>
					<Body />
				</ScrollView>
			</LinearGradient>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	wrapper: {
		flex: 1,
	},
});

export default Auth;
