import Button from '@/Sharedcomponents/button/Button'
import Input from '@/Sharedcomponents/input/input'
import React, { useState } from 'react'
import { useMutation, gql } from '@apollo/client'
import { useNavigate } from 'react-router-dom'


const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        firstName
        quote
        createdAt
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation($firstName: String!, $quote: String!) {
    post(firstName: $firstName, quote: $quote) {
      id
      createdAt
      quote
      firstName
    }
  }
`

export default function CreateQuote() {
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    firstName: '',
    quote: '',
  })

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
      firstName: formState.firstName,
      quote: formState.quote,
    },
    update: (cache, { data: { post } }) => {
      const data: any = cache.readQuery({
        query: FEED_QUERY,
      })
      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            links: [post, ...data.feed.links],
          },
        },
      })
    },
    onCompleted: () => navigate('/'),
  })

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    createLink()
  }
  return (
    <div className='flex flex-col  w-[50%] ml-[100px] mt-[100px]'>
      <h2>Create a quote</h2>
      <form onSubmit={onSubmit}>
        <Input
          type='input'
          placeholder='Name'
          name='firstName'
          value={formState.firstName}
          onChange={onChange}
        />
        <textarea
          rows={4}
          cols={50}
          placeholder='Write a quote'
          name='quote'
          value={formState.quote}
          onChange={onChange}
          className='mb-6'
        />
        <Button
          type='submit'
          variant='primary'
          className='w-[100px] rounded-md'
        >
          Add
        </Button>
      </form>
    </div>
  )
}
