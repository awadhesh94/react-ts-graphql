import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FeedProps, LinkProps } from '../../types/LinkListComponent';
import { useMutation } from '@apollo/client';
import { ADD_POST_MUTATION } from '../../Client/schemas/mutation';
import { FEED_QUERY } from '../../Client/schemas/query';

export const AddPostComponent = () => {
  const navigate = useNavigate();
  const [addPost, setAddPost] = useState<LinkProps>({
    description: '',
    url: '',
  });

  const [addPostAction] = useMutation(ADD_POST_MUTATION, {
    variables: {
      description: addPost?.description,
      url: addPost?.url,
    },
    update: (cache, { data: { post } }) => {
      const data: FeedProps =
        cache.readQuery({
          query: FEED_QUERY,
        }) || {};

      cache.writeQuery({
        query: FEED_QUERY,
        data: {
          feed: {
            links: [post, ...(data?.feed?.links || [])],
          },
        },
      });
    },
    onCompleted: () => navigate('/'),
  });

  return (
    <div className='flex flex-col gap-4 justify-items-start p-5 w-fit items-start'>
      <input
        type='text'
        placeholder='Enter description'
        value={addPost?.description}
        className='px-2 py-1 border-1 border-x-brand-biege'
        onChange={(e) => {
          setAddPost({ ...addPost, description: e.target.value });
        }}
      />
      <input
        type='text'
        placeholder='Enter url'
        value={addPost?.url}
        className='px-2 py-1 border-1 border-x-brand-biege'
        onChange={(e) => {
          setAddPost({ ...addPost, url: e.target.value });
        }}
      />
      {addPost?.description && addPost?.url && (
        <button className='bg-brand-light-green px-6 py-2' onClick={() => addPostAction()}>
          Add
        </button>
      )}
    </div>
  );
};
