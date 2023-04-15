import React, { useState } from 'react';
import { SignInSignOutProps } from '../../types/SignInSignOut';
import { useMutation } from '@apollo/client';
import { SINGIN_MUTATION, SINGUP_MUTATION } from '../../Client/schemas/mutation';
import { useNavigate } from 'react-router';
import { AUTH_TOKEN } from '../../Client/api';

export const SignInSignOutComponent = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<SignInSignOutProps>({
    isSignUp: false,
    name: '',
    email: '',
    password: '',
  });

  const [login] = useMutation(SINGIN_MUTATION, {
    variables: {
      email: form?.email,
      password: form?.password,
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login?.token);
      navigate('/');
    },
  });

  const [signup] = useMutation(SINGUP_MUTATION, {
    variables: {
      name: form?.name,
      email: form?.email,
      password: form?.password,
    },
    onCompleted: ({ signup }) => {
      localStorage.setItem(AUTH_TOKEN, signup?.token);
      navigate('/');
    },
  });

  return (
    <div className='flex flex-col gap-4 justify-items-start p-5 w-fit items-start'>
      {form?.isSignUp && (
        <input
          type='text'
          placeholder='Enter name'
          value={form?.name}
          className='px-2 py-1 border-1 border-x-brand-biege'
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
      )}
      <input
        type='text'
        placeholder='Enter email'
        value={form?.email}
        className='px-2 py-1 border-1 border-x-brand-biege'
        onChange={(e) => {
          setForm({ ...form, email: e.target.value });
        }}
      />
      <input
        type='text'
        placeholder='Enter password'
        value={form?.password}
        className='px-2 py-1 border-1 border-x-brand-biege'
        onChange={(e) => {
          setForm({ ...form, password: e.target.value });
        }}
      />
      <button
        className='bg-brand-light-green px-6 py-2'
        onClick={() => (!form?.isSignUp ? login() : signup())}
      >
        {form?.isSignUp ? 'Create Account' : 'Login'}
      </button>
      <div
        onClick={() => setForm({ ...form, isSignUp: !form?.isSignUp })}
        className='text-brand-purple font-brandBold underline cursor-pointer'
      >
        {!form?.isSignUp ? 'need to create an account?' : 'already have an account?'}
      </div>
    </div>
  );
};
