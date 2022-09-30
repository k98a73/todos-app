import { deleteDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { db } from '../firebaseConfig';
import { selectUser } from '../slices/userSlice';

export const useDeleteTag = () => {
  const user = useSelector(selectUser);
  const [deleteErr, setDeleteErr] = useState('');

  const deleteTag = async (idx: string) => {
    setDeleteErr('');
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'tags', idx));
    } catch (err: any) {
      setDeleteErr(err.message);
    }
  };

  return {
    deleteTag,
    deleteErr,
  };
};
