import React, { useRef, useState } from 'react';
import * as Styled from './Form.styles';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(emailRef.current.value)

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/')
    } catch(error) {
      setError(error.message);
    }

    setLoading(false)
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.FormHeading>Login to your account</Styled.FormHeading>
      {error && <h2>{error}</h2>}
      <Styled.FieldContainer>
        <Styled.Label>Email</Styled.Label>
        <Styled.Input type="email" ref={emailRef} required></Styled.Input>
      </Styled.FieldContainer>
      <Styled.FieldContainer>
        <Styled.Label>Password</Styled.Label>
        <Styled.Input type="password" ref={passwordRef} required></Styled.Input>
      </Styled.FieldContainer>
      <Styled.Button disabled={loading} type="submit">Login</Styled.Button>
    </Styled.Form>
  );
};

export default LoginForm;
