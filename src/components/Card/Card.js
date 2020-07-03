import React from 'react';
import { FetchCard } from './Fetch';
import { SimpleCard } from './Simple';

export const FETCH_CARD = 'FETCH_CARD';
export const SIMPLE_CARD = 'SIMPLE_CARD';

export const Card = ({type, ...rest}) => {
  switch (type) {
    case FETCH_CARD:
      return <FetchCard {...rest} />;
    case SIMPLE_CARD:
    default:
      return <SimpleCard {...rest} />;
  }
};
