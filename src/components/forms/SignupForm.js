import React, { useRef, useState } from 'react';
import * as Styled from './Form.styles';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';

const SignupForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(emailRef.current.value);

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.FormHeading>Sign up for an account</Styled.FormHeading>
      {error && <h2>{error}</h2>}
      <Styled.FieldContainer>
        <Styled.Label>Email</Styled.Label>
        <Styled.Input type="email" ref={emailRef} required></Styled.Input>
      </Styled.FieldContainer>
      <Styled.FieldContainer>
        <Styled.Label>Password</Styled.Label>
        <Styled.Input type="password" ref={passwordRef} required></Styled.Input>
      </Styled.FieldContainer>
      <Styled.FieldContainer>
        <Styled.Label>Confirm Password</Styled.Label>
        <Styled.Input
          type="password"
          ref={confirmPasswordRef}
          required
        ></Styled.Input>
      </Styled.FieldContainer>
      <Styled.Button disabled={loading} type="submit">
        Sign Up
      </Styled.Button>
    </Styled.Form>
  );
};

export default SignupForm;
