import React from 'react';
import { FeedProps, LinkProps } from '../../../types/LinkListComponent';
import { useMutation } from '@apollo/client';
import { VOTE_MUTATION } from '../../../Client/schemas/mutation';
import { FEED_QUERY } from '../../../Client/schemas/query';
import { AUTH_TOKEN } from '../../../Client/api';

export const LinkComponent: React.FC<LinkProps> = ({
  id,
  index,
  description,
  url,
  postedBy,
  votes,
}) => {
  const auth = localStorage.getItem(AUTH_TOKEN);
  console.log('caccac', votes);
  const [vote] = useMutation(VOTE_MUTATION, {
    variables: {
      linkId: id,
    },
    update: (cache, { data: { vote } }) => {
      const { feed }: FeedProps =
        cache.readQuery({
          query: FEED_QUERY,
        }) || {};

      const updatedLinks = feed?.links?.map((feedLink) => {
        if (feedLink.id === id) {
          return {
            ...feedLink,
            votes: [...(feedLink.votes || []), vote],
          };
        }
        return feedLink;
      });

      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            links: updatedLinks,
          },
        },
      });
    },
  });

  return (
    <div className='flex m-1 px-8 py-4 bg-brand-coal text-brand-biege rounded-lg'>
      <div className='mr-3'>
        <span>{index}. </span>
      </div>
      <div className='grid'>
        <span className='font-bold'>{description}</span>
        <p className='text-brand-yellow'>{url}</p>
        {auth && (
          <>
            <span className='text-brand-orange cursor-pointer' onClick={() => vote()}>
              {votes ? votes?.length : 0} votes | by{' '}
            </span>
            <span className='text-brand-pink'>{postedBy?.name ? postedBy?.name : 'Bob'}</span>
          </>
        )}
      </div>
    </div>
  );
};
