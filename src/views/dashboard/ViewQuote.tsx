import Quote from '@/components/Quote'
import { gql, useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { QuoteProps } from './dashBoard.type'

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

export default function ViewQuote() {
  const { data } = useQuery(FEED_QUERY)
  console.log(data)

  return (
    <div className=' grid grid-cols-3 gap-4 mt-20 ml-8'>
      {data?.feed?.links?.map((quote: QuoteProps) => (
        <Quote
          key={quote.id}
          firstName={quote?.firstName}
          quote={quote?.quote}
          name={quote?.name}
          quoteId={quote?.id}
          createdAt={quote.createdAt}
        />
      ))}
    </div>
  )
}
