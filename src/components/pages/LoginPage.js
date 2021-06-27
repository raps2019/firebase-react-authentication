import React from 'react'
import LoginForm from '../forms/LoginForm'
import { Link } from 'react-router-dom'


const LoginPage = () => {
  return (
    <div>
      <LoginForm></LoginForm>
      <div>
        Need an account? <Link to='/signup'>Sign Up</Link>
      </div>
      <div>
        <Link to='/forgot-password'>Forgot Password?</Link>
      </div>
    </div>
  )
}

export default LoginPage
