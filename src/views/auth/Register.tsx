import React, { useEffect, useState } from 'react'
import AuthComponent from '@/views/auth/components/authReusable/AuthComponent'
import Button from '@/Sharedcomponents/button/Button'
import Input from '@/Sharedcomponents/input/input'
import { RegisterProps } from '@/views/auth/auth.type'
import { gql, useMutation } from '@apollo/client'
import { AUTH_TOKEN } from './constants'
import { useNavigate } from 'react-router-dom'


export default function Register() {
  const navigate = useNavigate()
  const[validationIsFired, setValidationIsFired] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    name: ''
  })
  
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  })

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  function validation(data: RegisterProps) {
  setValidationIsFired(true)
  let validate = true
  let error: RegisterProps = {
    email: '',
    password: '',
    name: '',
  }
  Object.keys(data)?.forEach((field) => {
    if(data[field as keyof RegisterProps] === '') {
      error[field as keyof RegisterProps] = `${field} is required`
      validate = false
    
  }})
  setErrors(error)
  return validate;
 
  }

  useEffect(() => {
   if(validationIsFired){
    validation(form)
   }else{
    return
   }
  
   
  }, [ validationIsFired, form])
  

  // function onSubmit(){
   
  // }

  const REGISTER = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  
  }
  `

  const[onSubmit] = useMutation(REGISTER, {
    variables: {
      name: form.name,
      email: form.email,
      password: form.password
    },
    onCompleted: ({signup}) => {
      localStorage.setItem(AUTH_TOKEN, signup?.token)
    }
  })

  return (
    <div>
      <AuthComponent
        title='Create an account'
        smallText='Sign up now to create and read inspirational quote'
      />
      <Input
        type='input'
        placeholder='Name'
        label='Name'
        value={form.name}
        name='name'
        onChange={onInputChange}
      />
      {errors.name && (
        <span className='text-red-600 text-sm capitalize'>
          {errors.name}
        </span>
      )}
      <Input
        type='email'
        placeholder='Email'
        label='Email'
        value={form.email}
        name='email'
        onChange={onInputChange}
      />
      {errors.email && (
        <span className='text-red-600 text-sm capitalize '>{errors.email}</span>
      )}
      <Input
        type='password'
        placeholder='Password'
        label='Password'
        value={form.password}
        name='password'
        onChange={onInputChange}
      />
      {errors.password && (
        <span className='text-red-600 text-sm capitalize'>
          {errors.password}
        </span>
      )}
      <Button
        type='submit'
        variant='primary'
        className='w-full mt-4 rounded-sm'
        onClick={() => {
          const dataToValidate = {
            email: form.email,
            password: form.password,
            name: form.name,
          }
          if (validation(dataToValidate)) {
            onSubmit()
            navigate('/')
          }
        }}
        // onClick={onSubmit}
      >
        Create Account
      </Button>
      <div className='flex gap-[4px] items-center pt-4'>
        <p className='text-[#bfc3c8] pt-[8px]'>Already have an account?</p>
        <Button as='a' variant='link'>
          Sign In
        </Button>
      </div>
    </div>
  )
}
