import React from 'react';
import { Layout } from '../Layout';
import { Login as LoginForm } from '../Form/Login';
import { useAnonymous } from '../../hooks';

export const Login = () => {
  useAnonymous();
  return (
    <Layout navbar={{neverTop: true}}>
      <LoginForm />
    </Layout>
  )
};
