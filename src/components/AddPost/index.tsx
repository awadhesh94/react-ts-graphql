import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LinkProps } from '../../types/LinkListComponent';
import { useMutation } from '@apollo/client';
import { ADD_POST_MUTATION } from '../../Client/schemas/mutation';

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
      <button className='bg-brand-light-green px-6 py-2' onClick={() => addPostAction()}>
        Add
      </button>
    </div>
  );
};
