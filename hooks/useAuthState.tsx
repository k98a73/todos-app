import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../firebaseConfig';
import { login, logout, selectUser } from '../slices/userSlice';

export const useAuthState = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (authUser) => {
      setIsLoading(true);
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email!,
          }),
        );
      } else {
        dispatch(logout());
      }
      setIsLoading(false);
    });
    return () => {
      unSub();
    };
  }, []);
  return {
    user,
    isLoading,
  };
};
