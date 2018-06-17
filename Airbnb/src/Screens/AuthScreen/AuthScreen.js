import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import GradientWrapper from '../../Components/GradientWrapper/GradientWrapper';
import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';
class Auth extends Component {
	static navigatorStyle = {
		navBarHidden: true,
	};
	render() {
		return (
			<GradientWrapper>
				<Header />
				<ScrollView contentContainerStyle={styles.wrapper}>
					<Body />
				</ScrollView>
			</GradientWrapper>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});

export default Auth;
