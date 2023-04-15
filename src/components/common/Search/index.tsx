import React, { useState } from 'react';
import { LinkComponent } from '../../LinkList/Link';
import { LinkProps } from '../../../types/LinkListComponent';
import { FEED_SEARCH_QUERY } from '../../../Client/schemas/mutation';
import { useLazyQuery } from '@apollo/client';

export const SearchComponent = () => {
  const [userInput, setUserInput] = useState<string>('');

  const [executeSearch, { data }] = useLazyQuery(FEED_SEARCH_QUERY);

  return (
    <div className='flex flex-col gap-4 justify-items-start p-5 w-fit items-start'>
      <div>
        <input
          type='text'
          placeholder='Search post'
          value={userInput}
          className='px-2 py-1 border-1 border-x-brand-biege'
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
        {userInput && (
          <button
            className='bg-brand-lightText text-brand-biege  px-6 py-2'
            onClick={() =>
              executeSearch({
                variables: { filter: userInput },
              })
            }
          >
            Search
          </button>
        )}
      </div>
      <div>
        {data?.feed?.links?.map((link: LinkProps, index: number) => {
          return (
            <LinkComponent
              key={link?.id}
              id={link?.id}
              description={link?.description}
              url={link?.url}
              postedBy={link?.postedBy}
              votes={link?.votes}
              index={index + 1}
            />
          );
        })}
      </div>
    </div>
  );
};
