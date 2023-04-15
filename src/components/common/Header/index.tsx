import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../../../Client/api';

export const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  return (
    <div className='px-4 py-2 bg-brand-yellow font-brandSemiBold'>
      <div className='flex justify-between'>
        <div className='flex gap-4'>
          <Link to='/'>Home</Link>
          {authToken && (
            <>
              <div>|</div>
              <Link to='/add-post'>Add Post</Link>
            </>
          )}
          <div>|</div>
          <Link to='/search'>Search</Link>
        </div>
        {authToken ? (
          <Link
            to='/'
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate('/');
            }}
          >
            Logout
          </Link>
        ) : (
          <Link to='/login'>Login</Link>
        )}
      </div>
    </div>
  );
};
