import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LinkListComponent } from './LinkList';
import { AddPostComponent } from './AddPost';
import { Header } from './common/Header';
import { SignInSignOutComponent } from './SignInSignOut';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LinkListComponent />} />
        <Route path='/add-post' element={<AddPostComponent />} />
        <Route path='/login' element={<SignInSignOutComponent />} />{' '}
      </Routes>
    </div>
  );
};
