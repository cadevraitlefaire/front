import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

export const useAnonymous = (path = '/') => {
  const { isLogged } = useContext(UserContext);
  const { push } = useHistory();
  if (isLogged) {
    push(path)
  }
};
