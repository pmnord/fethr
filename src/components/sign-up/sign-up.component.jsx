import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, Title } from './sign-up.styles';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) return alert('Passwords do not match');

    const { signUpStart } = this.props;
    signUpStart({ email, password, displayName });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password</span>
        <form action='' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          {this.state.error && (
            <div className='error'>{this.state.error.message}</div>
          )}
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (emailAndPassword) => dispatch(signUpStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignUp);
