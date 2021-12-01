import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { createContext, ReactNode, useEffect, useState, VFC } from 'react';
import firebaseApp from './firebase';

type Props = {
  children: ReactNode;
};

type AuthContextState = {
  token: string;
  userID: string;
};

const AuthContext = createContext({} as AuthContextState);

const AuthProvider: VFC<Props> = ({ children }) => {
  const firebaseAuth = getAuth(firebaseApp);
  const [userID, setUserID] = useState('');
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUserID(user.uid);
        user.getIdToken().then((idToken) => {
          localStorage.setItem('jwt', idToken);
          setToken(idToken);
        });
      } else {
        setUserID('');
      }
    });
  });

  return <AuthContext.Provider value={{ token, userID }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
