import React, { createContext, ReactNode, useEffect, useMemo, useState, FC } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import firebaseApp from './firebase';

type Props = {
  children: ReactNode;
};

type AuthContextState = {
  userID: string;
};

const AuthContext = createContext({} as AuthContextState);

const AuthProvider: FC<Props> = ({ children }) => {
  const firebaseAuth = getAuth(firebaseApp);
  const [userID, setUserID] = useState('');
  const id = useMemo(() => ({ userID }), [userID]);
  const tokenStorageKey = 'firebase-authentication-jwt';

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUserID(user.uid);
        user.getIdToken().then((idToken) => {
          localStorage.setItem(tokenStorageKey, idToken);
        });
      } else {
        setUserID('');
        localStorage.removeItem(tokenStorageKey);
      }
    });
  });

  return <AuthContext.Provider value={id}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
