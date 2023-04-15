import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LinkListComponent } from './LinkList';
import { AddPostComponent } from './AddPost';
import { Header } from './common/Header';
import { SignInSignOutComponent } from './SignInSignOut';
import { SearchComponent } from './common/Search';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LinkListComponent />} />
        <Route path='/add-post' element={<AddPostComponent />} />
        <Route path='/login' element={<SignInSignOutComponent />} />
        <Route path='/search' element={<SearchComponent />} />{' '}
      </Routes>
    </div>
  );
};
