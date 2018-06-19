import React, { Component } from 'react';
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native';
import GradientWrapper from '../../Components/GradientWrapper/GradientWrapper';
import TextButton from '../../Components/TextButton/TextButton';
import Icon from 'react-native-vector-icons/Ionicons';

const NavBar = props => (
	<View style={styles.NavBarContainer}>
		<TouchableOpacity onPress={props.handlePopToMainScreen}>
			<Icon name="ios-arrow-back" size={25} color="white" />
		</TouchableOpacity>
		<TextButton
			text="Forget Password?"
			buttonTextStyle={styles.NavBarButtonText}
		/>
	</View>
);

class Form extends Component {
	state = {
		buttonTextState: 'Show',
		isPasswordSecureView: true,
	};
	handleShowHidePassword = () => {
		this.setState(prevState => {
			return {
				buttonTextState: prevState.buttonTextState === 'Show' ? 'Hide' : 'Show',
				isPasswordSecureView: !prevState.isPasswordSecureView,
			};
		});
	};
	render() {
		return (
			<View style={{ marginVertical: '10%' }}>
				<View style={styles.innerFormContainer}>
					<Text style={styles.placeholders}>EMAIL ADDRESS</Text>
					<TextInput style={styles.formInputs} selectionColor={'white'} />
				</View>
				<View style={styles.innerFormContainer}>
					<View style={styles.placeholderContainer}>
						<Text style={styles.placeholders}>PASSWORD</Text>
						<TextButton
							text={this.state.buttonTextState}
							buttonTextStyle={{ fontSize: 16 }}
							onPress={this.handleShowHidePassword}
						/>
					</View>
					<TextInput
						secureTextEntry={this.state.isPasswordSecureView}
						style={styles.formInputs}
						selectionColor={'white'}
					/>
				</View>
			</View>
		);
	}
}

class LoginScreen extends Component {
	state = {};
	static navigatorStyle = {
		navBarHidden: true,
	};
	handlePopToMainScreen = () => {
		this.props.navigator.pop();
	};
	render() {
		return (
			<GradientWrapper>
				<NavBar handlePopToMainScreen={this.handlePopToMainScreen} />
				<ScrollView contentContainerStyle={styles.formContainer}>
					<Text style={styles.loginBoldText}>Login</Text>
					<Form />
				</ScrollView>
			</GradientWrapper>
		);
	}
}

const styles = StyleSheet.create({
	NavBarContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		height: 75,
		width: '100%',
		alignItems: 'center',
		paddingHorizontal: '5%',
	},
	NavBarButtonText: {
		fontSize: 15,
	},
	loginBoldText: {
		color: 'white',
		fontSize: 29,
		fontWeight: 'bold',
	},
	formContainer: {
		padding: '5%',
		flex: 1,
	},
	placeholders: {
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold',
	},
	placeholderContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	formInputs: {
		fontSize: 22,
		borderBottomColor: 'white',
		borderBottomWidth: 0.5,
		borderStyle: 'solid',
		paddingBottom: 10,
		paddingHorizontal: 5,
		color: 'white',
	},
	innerFormContainer: {
		height: 100,
		justifyContent: 'space-around',
	},
});

export default LoginScreen;
