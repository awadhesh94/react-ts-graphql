import React from 'react';
import { LinkComponent } from './Link';
import { useQuery } from '@apollo/client';
import { dataProps } from '../../types/LinkListComponent';
import { FEED_QUERY } from '../../Client/schemas/query';

export const LinkListComponent = () => {
  const { data, loading }: dataProps = useQuery(FEED_QUERY);

  return (
    <div className='grid py-4 px-8'>
      <div className='flex flex-row flex-wrap'>
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
    </div>
  );
};
