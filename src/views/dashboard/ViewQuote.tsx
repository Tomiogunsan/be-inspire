import Quote from '@/components/Quote'
import { gql, useQuery } from '@apollo/client'
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
      }
    }
  }
`

export default function ViewQuote(props: QuoteProps) {
  const { data } = useQuery(FEED_QUERY)
  //   console.log(data)
  return (
    <div>
      {data?.feed?.links?.map((quote: QuoteProps) => (
        <Quote key={quote.id} firstName={quote?.firstName} quote={quote?.quote} />
      ))}
    </div>
  )
}
