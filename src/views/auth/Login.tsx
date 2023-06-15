import React, { useEffect, useState } from 'react'
import AuthComponent from '@/views/auth/components/authReusable/AuthComponent'
import Button from '@/Sharedcomponents/button/Button'
import Input from '@/Sharedcomponents/input/input'
import { AiOutlineEye } from 'react-icons/ai'
import { LoginProps} from './auth.type'
import {  gql, useMutation } from '@apollo/client'
import { AUTH_TOKEN } from './constants'
import {  useNavigate } from 'react-router-dom'
// import {AiOutlineEyeInvisible} from 'react-icons/ai'

export default function Login() {
  const navigate = useNavigate()
  const [validationIsFired, setValidationIsFired] = useState(false)
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })
  const [form, setForm] = useState({
    login:true,
    email: '',
    password: '',
  })

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  function validation(data: LoginProps) {
    setValidationIsFired(true)
    let validated = true
    let error: LoginProps = {
      email: '',
      password: '',
    }
    Object.keys(data)?.forEach((field) => {
      if (data[field as keyof LoginProps] === '') {
        error[field as keyof LoginProps] = `${field} is required`
        validated = false
      }
    })
    setErrors(error)
    return validated
  }

  useEffect(() => {
    if (validationIsFired) {
      validation(form)
    } else {
      return
    }
  }, [validationIsFired, form])

//  function onSubmit() {}

  const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
      }
    }
  `

  // eslint-disable-next-line @typescript-eslint/no-redeclare
  const [onSubmit] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: form.email,
      password: form.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token)
      navigate('/')
    },
  })

  return (
    <div>
      <AuthComponent
        title='Log In'
        smallText='Enter your email and password to login'
      />
      <Input
        type='email'
        name='email'
        placeholder='Password'
        label='Email'
        value={form.email}
        onChange={onInputChange}
      />
      {errors.email && (
        <span className='text-red-600 text-sm capitalize pb-4'>
          {errors.email}
        </span>
      )}
      <div className='relative'>
        <Input
          type='password'
          name='password'
          placeholder='Password'
          label='Password'
          value={form.password}
          onChange={onInputChange}
        />
        <AiOutlineEye className='absolute right-2 top-[45px] cursor-pointer text-[#eaebee] font-bold ' />
      </div>
      {errors.password && (
        <span className='text-red-600 text-sm capitalize'>
          {errors.password}
        </span>
      )}
      <Button
        type='submit'
        variant='primary'
        className='w-full mt-2 rounded-sm'
        onClick={
          () => {
          const dataToValidate = {
            email: form.email,
            password: form.password,
          }
          if (validation(dataToValidate)) {
            onSubmit()
          }
        }
        // form.login ? login : ''
      }
        // onClick={onSubmit}
      >
        Sign in
      </Button>
      <div className='flex gap-[4px] items-center pt-4'>
        <p className='text-[#bfc3c8] pt-[8px]'>Don't have an account?</p>
        <Button as='a' variant='link'>
          Sign Up
        </Button>
      </div>
      <Button as='a' variant='link'>
        Forgot Password?
      </Button>
    </div>
  )
}
