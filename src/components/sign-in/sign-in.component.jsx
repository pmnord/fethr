import React, { useState } from 'react';
// import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { SignInContainer, Title, ButtonsContainer } from './sign-in.styles';

import {
  emailSignInStart,
  googleSignInStart,
} from '../../redux/user/user.actions';

const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { email, password } = userCredentials;
      emailSignInStart({ email, password });
      setCredentials({ email: '', password: '' });
    } catch (error) {
      setError(error);
    }

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    // setCredentials({ email: '', password: '' });
    // } catch (error) {
    //   console.log(error);
    //   setError({ error });
    // }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
    // Unlike setState, we have to manually rebuild the state object with the spread operator
    // (Otherwise we lose password when we set email and vice versa)
  };

  return (
    <SignInContainer>
      <Title>I already have an account</Title>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name='email'
          type='email'
          label='Email'
          value={userCredentials.email}
          required
        />
        <FormInput
          handleChange={handleChange}
          name='password'
          type='password'
          label='Password'
          value={userCredentials.password}
          required
        />
        {error && <div>{error.message}</div>}
        <ButtonsContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton
            onClick={googleSignInStart}
            isGoogleSignin
            type='button'
          >
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
