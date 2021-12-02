import React from 'react';
import { useFirebase } from '../firebase/useFirebase';

const Logout = () => {
  const { Logout } = useFirebase();

  return (
    <div>
      <h1>Logout?</h1>
      <button onClick={Logout}>Confirm</button>
    </div>
  );
};

export default Logout;
