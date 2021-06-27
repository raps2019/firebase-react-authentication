import React from 'react'
import UpdateProfileForm from '../forms/UpdateProfileForm'
import { Link } from 'react-router-dom'

const UpdateProfilePage = () => {
  return (
    <div>
      <UpdateProfileForm></UpdateProfileForm>
      <Link to='/'>Cancel</Link>
    </div>
  )
}

export default UpdateProfilePage
