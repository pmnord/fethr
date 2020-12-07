import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignUpContainer, Title } from './sign-up.styles';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    const { displayName, email, password, confirmPassword } = credentials;
    if (password !== confirmPassword)
      return setError({ message: 'Passwords do not match' });

    try {
      signUpStart({ email, password, displayName });
    } catch (error) {
      setError(error);
    }
  };

  const handleChange = (event) => {
    setError(null);
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <SignUpContainer>
      <Title>I do not have an account</Title>
      <span>Sign up with your email and password</span>
      <form action='' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={credentials.displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={credentials.email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={credentials.password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={credentials.confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        {error && <div className='error'>{error.message}</div>}
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (emailAndPassword) => dispatch(signUpStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignUp);
