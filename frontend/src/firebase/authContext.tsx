import { createContext, ReactNode, useEffect, useState, VFC } from 'react';

import { getAuth, onAuthStateChanged } from 'firebase/auth';

import firebaseApp from './firebase';

type Props = {
  children: ReactNode;
};

type AuthContextState = {
  userID: string;
};

const AuthContext = createContext({} as AuthContextState);

const AuthProvider: VFC<Props> = ({ children }) => {
  const firebaseAuth = getAuth(firebaseApp);
  const [userID, setUserID] = useState('');
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

  return <AuthContext.Provider value={{ userID }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
