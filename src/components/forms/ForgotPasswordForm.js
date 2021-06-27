import React, { useRef, useState } from 'react';
import * as Styled from './Form.styles'
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';


const ForgotPasswordForm = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth()
  const [error, setError] = useState('')
  const [ message, setMessage ] = useState('');
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(emailRef.current.value)

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage(`Password reset email sent to ${emailRef.current.value}`)
    } catch(error) {
      setError(error.message);
    }

    setLoading(false)
  }

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.FormHeading>Password Reset</Styled.FormHeading>
      {error && <h2>{error}</h2>}
      {message && <h2>{message}</h2>}
      <Styled.FieldContainer>
        <Styled.Label>Email</Styled.Label>
        <Styled.Input type="email" ref={emailRef} required></Styled.Input>
      </Styled.FieldContainer>
      <Styled.Button disabled={loading} type="submit">Reset Password</Styled.Button>
    </Styled.Form>
  );
}

export default ForgotPasswordForm
