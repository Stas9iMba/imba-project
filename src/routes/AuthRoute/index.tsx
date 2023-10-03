import { useMutation } from '@tanstack/react-query';
import { Button } from 'antd';
import sha256 from 'crypto-js/sha256';
import { useState, useCallback } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

import UserService from 'src/services/UserService';
import AuthForm, { AuthFormValues } from '~components/AuthForm';
import RegisterForm, { RegisterFormValues } from '~components/RegisterForm';
import { User } from '~types/api';

import style from './AuthRoute.module.scss';

export function AuthRouteLoader() {
  if (!UserService.Instance.CurrentUser) {
    return null;
  }

  return redirect('/');
}

function AuthRoute() {
  const [isAuthUser, setIsAuthUser] = useState(true);

  const navigate = useNavigate();

  const authMutation = useMutation<User, unknown, AuthFormValues, unknown>({
    mutationFn: ({ username, password }) =>
      Promise.resolve(UserService.Instance.auth(username, sha256(password).toString())),
      onSuccess: () => {
        navigate('/home');
      }
  });

  const registerMutation = useMutation<User, unknown, RegisterFormValues, unknown>({
    mutationFn: ({ username, password }) =>
      Promise.resolve(UserService.Instance.register(username, sha256(password).toString())),
  });

  const handleSwitchForm = useCallback(() => {
    setIsAuthUser((isAuth) => !isAuth);
  }, []);

  const handleAuthFinish = useCallback(
    (values: AuthFormValues) => {
      authMutation.mutate(values);
    },
    [authMutation],
  );

  const handleRegisterFinish = useCallback(
    (values: RegisterFormValues) => {
      registerMutation.mutate(values);
    },
    [registerMutation],
  );

  return (
    <div className={style['main']}>
      {isAuthUser ? (
        <div className={style['auth-form']}>
          <h2 className={style['auth-form__title']}>Welcome to Imba</h2>
          <div className={style['auth-form__content']}>
            <AuthForm onFinish={handleAuthFinish} />
          </div>
          <div className={style['auth-form__footer']}>
            New to Messenger?
            <Button type="link" onClick={handleSwitchForm}>
              Create an account
            </Button>
          </div>
        </div>
      ) : (
        <div className={style['register-form']}>
          <h2 className={style['register-form__title']}>Create an account</h2>
          <div className={style['register-form__content']}>
            <RegisterForm onFinish={handleRegisterFinish} />
          </div>
          <div className={style['register-form__footer']}>
            <Button type="link" onClick={handleSwitchForm}>
              Sign in to your Messenger
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthRoute;
