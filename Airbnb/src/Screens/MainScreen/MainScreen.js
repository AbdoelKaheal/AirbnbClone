import React, { Component } from 'react';
import { ScrollView, StyleSheet, StatusBar } from 'react-native';
import GradientWrapper from '../../Components/GradientWrapper/GradientWrapper';
import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';
class Auth extends Component {
	componentWillMount() {
		StatusBar.setBarStyle('light-content');
	}
	static navigatorStyle = {
		navBarHidden: true,
	};
	render() {
		return (
			<GradientWrapper>
				<Header navigator={this.props.navigator} />
				<ScrollView contentContainerStyle={styles.wrapper}>
					<Body navigator={this.props.navigator} />
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
