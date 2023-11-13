import { TypingText } from '../../components';
import React from 'react'

const Login = () => {
  return (
    <div className='h-[70vh]'>
      <div className='text-center mb-12'>
        <TypingText title="Welcome Back"/>
        <div className='text-green-100'>Login to your ISTE-HIT Account</div>
      </div>
    </div>
  )
}

export default Login;