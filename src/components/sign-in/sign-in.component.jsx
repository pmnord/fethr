import React from 'react';

// import "./sign-in.styles.scss";

import FormInput from '../form-input/form-input.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form action=''>
          <FormInput
            handleChange={this.handleChange}
            name='email'
            type='email'
            label='Email'
            value={this.state.email}
            required
          />
          <FormInput
            handleChange={this.handleChange}
            name='password'
            type='password'
            label='Password'
            value={this.state.password}
            required
          />
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle}>
            Sign In With Google
          </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
