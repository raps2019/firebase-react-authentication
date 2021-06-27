import React, { useRef, useState } from 'react';
import * as Styled from './Form.styles';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router';

const UpdateProfileForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();



    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError('Passwords do not match');
    }
    const promises = [];

    setLoading(true);
    setError('');


    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises).then( () => {
      history.push('/')
    }).catch((error) => {
      setError(error)
    }).finally(() => setLoading(false))


  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.FormHeading>Update Profile</Styled.FormHeading>
      {error && <h2>{error}</h2>}
      <Styled.FieldContainer>
        <Styled.Label>Email</Styled.Label>
        <Styled.Input type="email" ref={emailRef} required defaultValue={currentUser.email}></Styled.Input>
      </Styled.FieldContainer>
      <Styled.FieldContainer>
        <Styled.Label>Password</Styled.Label>
        <Styled.Input type="password" ref={passwordRef} placeholder='Leave blank to keep the same'></Styled.Input>
      </Styled.FieldContainer>
      <Styled.FieldContainer>
        <Styled.Label>Confirm Password</Styled.Label>
        <Styled.Input
          type="password"
          ref={confirmPasswordRef}
          placeholder='Leave blank to keep the same'
        ></Styled.Input>
      </Styled.FieldContainer>
      <Styled.Button disabled={loading} type="submit">
        Update
      </Styled.Button>
    </Styled.Form>
  );
};

export default UpdateProfileForm;
