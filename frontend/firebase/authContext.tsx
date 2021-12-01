import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useState, VFC } from 'react';
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

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUserID(user.uid);
        user.getIdToken().then((idToken) => {
          localStorage.setItem('firebase-authentication-jwt', idToken);
        });
      } else {
        setUserID('');
      }
    });
  });

  return <AuthContext.Provider value={{ userID }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
