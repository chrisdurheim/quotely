import React from 'react';
import { Link } from 'react-router-dom';

const QuoteNavigationPrevious = (props) => {
  let element = null
  if (props.otherQuoteId){
    element = (
      <Link className='link-previous' to={`/?quote=${props.otherQuoteId}`}>
        &lsaquo;
      </Link>
    )
  }
  return element
}

export default QuoteNavigationPrevious
