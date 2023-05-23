import './styles/QuoteBox.css'
import React from 'react'

const QuoteBox = ({phrase, handleChangeQuote}) => {
  return (
    <section className='quoteBox'>

          <button className='quoteBox__btn' onClick={handleChangeQuote}>Discover more</button>

          <article className='quoteBox__phrace'>
            <p>{phrase}</p>
          </article>

        </section>
  )
}

export default QuoteBox