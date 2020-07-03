import React, { useMemo, useState } from 'react';
import { useLoading } from '../../hooks';
import { SearchOneLoading } from '../Loading';
import { Card, SIMPLE_CARD } from './Card';

export const FetchCard = ({resource, id, ...rest}) => {
  const [item, setItem] = useState();
  const memoizedPromises = useMemo(
    () => [
      id ? () => resource.getOne({id}).then(setItem) : () => {},
    ],
    [id]
  );
  const loading = useLoading(memoizedPromises);

  return (
    loading ? <SearchOneLoading /> : item ? <Card {...rest} type={SIMPLE_CARD} title={resource.serializer.serialize(item).name} /> : null
  )
};
