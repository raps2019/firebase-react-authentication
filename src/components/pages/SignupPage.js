import React from 'react'
import SignupForm from '../forms/SignupForm'
import { Link } from 'react-router-dom'

const SignupPage = () => {

  
  return (
    <div>
      <SignupForm></SignupForm>
      <div>
        Already have an account? <Link to='/login'>Login</Link> 
      </div>
    </div>
  )
}

export default SignupPage
