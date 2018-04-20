import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import Form from './Form';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';
import SignupSection from './SignupSection';
import CreateAccountForm from './createAccount/Form';
import CreateAccountButtonSubmit from './createAccount/ButtonSubmit';
import CreateAccountSignupSection from './createAccount/SignupSection';

class LoginScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hasAccount: true,
		};
	}

	static navigationOptions = ({ navigation }: any) => ({
		header: null
	})

	navigationToCteateAccount = () => {
		this.setState({
			hasAccount: false
		})
	}

	navigationToLogin = () => {
		this.setState({
			hasAccount: true
		})
	}

	render() {
		return (
			<Wallpaper>
				<Logo />
				{this.state.hasAccount ? <Form /> : <CreateAccountForm />}
				{this.state.hasAccount ? <ButtonSubmit /> : <CreateAccountButtonSubmit />}
				{this.state.hasAccount ? 
					<SignupSection
						navigationToCteateAccount={this.navigationToCteateAccount}/>
					:
					<CreateAccountSignupSection
						navigationToLogin={this.navigationToLogin}/>}

			</Wallpaper>
		);
	}
}

export default LoginScreen