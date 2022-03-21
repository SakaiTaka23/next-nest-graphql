import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { useRouter } from 'next/router';

import { useCreateUserMutation } from '@/graphql/generated';

import firebaseApp from './firebase';

const useFirebase = () => {
  const firebaseAuth = getAuth(firebaseApp);
  const router = useRouter();
  const [createUserMutation] = useCreateUserMutation();

  const Logout = () => {
    firebaseAuth.signOut().then(() => {
      window.location.reload();
    });
  };

  const SignUp = async (email: string, password: string) => {
    await createUserWithEmailAndPassword(firebaseAuth, email, password).then((user_credential) => {
      user_credential.user.getIdToken(true).then(() => {
        createUserMutation();
        router.replace('/private');
      });
    });
  };

  const SignIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        router.replace('/private');
      })
      .catch((error) => {
        alert(error);
      });
  };

  const SignInGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(firebaseAuth, provider)
      .then((user_credential) => {
        user_credential.user.getIdToken(true).then(() => {
          createUserMutation();
          router.replace('/private');
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return {
    firebaseAuth,
    Logout,
    SignUp,
    SignIn,
    SignInGoogle,
  };
};

export { useFirebase };
