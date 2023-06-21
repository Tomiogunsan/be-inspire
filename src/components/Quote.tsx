import React from 'react'
import { QuoteProps } from '@/views/dashboard/dashBoard.type'
import { gql, useMutation } from '@apollo/client'
import { AiFillHeart } from 'react-icons/ai'
import { AUTH_TOKEN } from '@/views/auth/constants'

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`

export default function Quote(props: QuoteProps) {
  const { firstName, quote, quoteId, createdAt } = props
  const authToken = localStorage.getItem(AUTH_TOKEN)

  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: quoteId,
    },
  })
  //   console.log(firstName)
  return (
    <div className='bg-red-600 rounded-md text-white flex flex-col items-center justify-center'>
      <p>{firstName}</p>
      <p>{quote}</p>

      {authToken && (
        <div>
          <AiFillHeart />
        </div>
      )}
    </div>
  )
}
