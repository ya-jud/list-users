import React from 'react';
import './styles.sass';

import GetUsersButton from './components/getUsersButton/getUsersButton';
import UsersList from './components/usersList/usersList';

const App = (): JSX.Element => {
  return (
    <div className='box'>
      <div className='content'>
        <GetUsersButton />
        <UsersList />
      </div>
    </div>
  );
};

export default App;
