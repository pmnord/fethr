import React, { useState } from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignInContainer, Title, ButtonsContainer } from "./sign-in.styles";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = userCredentials;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      setError({ error });
    }
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
          <CustomButton onClick={signInWithGoogle} isGoogleSignin type='button'>
            Sign In With Google
          </CustomButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
