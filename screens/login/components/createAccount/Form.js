import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	Text,
	ActivityIndicator,
	TouchableOpacity,
	Image,
} from 'react-native';

import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';

import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';

export default class createAccountForm extends Component {
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
		};
	}

	render() {
		return (
			<KeyboardAvoidingView behavior='padding'
				style={styles.container}>
				<UserInput source={usernameImg}
					placeholder='手机号'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
				<UserInput source={passwordImg}
					placeholder='密码'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
				<UserInput source={passwordImg}
					placeholder='验证码'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
				<TouchableOpacity style={styles.iconEye}>
					<Text style={styles.text}>发送验证码</Text>
				</TouchableOpacity>
			</KeyboardAvoidingView>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 2,
		alignItems: 'center',
	},
	verificate: {

	},
  iconEye: {
		marginTop: -20,
		marginBottom: 20,
		marginRight: 30,
		alignSelf: 'flex-end',
	},
	text: {

		color: 'white',
		backgroundColor: 'transparent',
	}
});
