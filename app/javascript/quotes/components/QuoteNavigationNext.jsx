import React from 'react';
import { Link } from 'react-router-dom';

const QuoteNavigationNext = (props) => {
  let element = null
  if (props.otherQuoteId){
    element = (
      <Link className='link-next' to={`/?quote=${props.otherQuoteId}`}>
        &rsaquo;
      </Link>
    )
  }
  return element
}

export default QuoteNavigationNext
