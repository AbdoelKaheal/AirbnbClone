import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import GradientWrapper from '../../Components/GradientWrapper/GradientWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
import AdvancedButton from '../../Components/AdvancedButton/AdvancedButton';

class MoreOptions extends Component {
	static navigatorStyle = {
		navBarHidden: true,
	};
	handleCloseModal = () => {
		this.props.navigator.dismissModal();
	};
	render() {
		return (
			<GradientWrapper>
				<TouchableOpacity
					onPress={this.handleCloseModal}
					style={styles.closeButton}
				>
					<Icon name="ios-close" size={42} color="white" style={styles.icon} />
				</TouchableOpacity>
				<View style={styles.buttonContainer}>
					<AdvancedButton
						text="Facebook"
						iconName="facebook-f"
						iconColor="rgb(9,84,99)"
						style={styles.whiteButtons}
						textStyle={styles.whiteButtonText}
					/>
					<AdvancedButton
						text="Google"
						iconName="google"
						iconColor="rgb(9,84,99)"
						style={styles.whiteButtons}
						textStyle={styles.whiteButtonText}
					/>
					<AdvancedButton
						text="Weibo"
						iconName="weibo"
						iconColor="rgb(9,84,99)"
						style={styles.whiteButtons}
						textStyle={styles.whiteButtonText}
					/>
					<AdvancedButton
						text="Create Account"
						textStyle={{ fontWeight: 'bold' }}
					/>
				</View>
			</GradientWrapper>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		alignSelf: 'center',
		marginTop: '50%',
		height: '55%',
		justifyContent: 'space-around',
	},
	icon: {
		fontWeight: 'bold',
	},
	closeButton: {
		position: 'absolute',
		left: 20,
		top: 20,
	},
	whiteButtons: {
		backgroundColor: 'white',
	},
	whiteButtonText: { color: 'rgb(20,98,109)', fontWeight: 'bold' },
});

export default MoreOptions;
