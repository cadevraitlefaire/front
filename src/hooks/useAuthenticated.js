import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { Token } from '../helpers';
import { Username } from '../helpers/Username';

export const useAuthenticated = (path = '/login') => {
  const { isLogged } = useContext(UserContext);
  const { push } = useHistory();
  const token = new Token();
  if (!isLogged || (token.get() && token.getDecoded().exp <= (Date.now()/1000))) {
    new Username().delete();
    token.delete();
    push(path)
  }
};
