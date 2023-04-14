import React from 'react';
import { LinkComponent } from './Link';
import { useQuery } from '@apollo/client';
import { fEED_QUERY } from './GrapqlQuery/LinkList';
import { dataProps } from '../../types/LinkListComponent';

export const LinkListComponent = () => {
  const { data, loading }: dataProps = useQuery(fEED_QUERY);

  return (
    <div>
      {loading ? (
        'loading'
      ) : (
        <>
          {data?.feed?.links?.map(({ id, description, url }) => {
            return <LinkComponent key={id} description={description} url={url} />;
          })}
        </>
      )}
    </div>
  );
};
