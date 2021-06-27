import React from 'react'
import ForgotPasswordForm from '../forms/ForgotPasswordForm'
import { Link } from 'react-router-dom'

const ForgotPasswordPage = () => {
  return (
    <div>
      <ForgotPasswordForm />
      <Link to='/login'>Login</Link>
    </div>
  )
}

export default ForgotPasswordPage
