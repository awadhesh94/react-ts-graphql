import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className='px-4 py-2 bg-brand-yellow font-brandSemiBold'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <Link to='/'>Home</Link>
          <div>|</div>
          <Link to='/add-post'>Add Post</Link>
        </div>
        <div>
          <Link to='/'>Logout</Link>
        </div>
      </div>
    </div>
  );
};
