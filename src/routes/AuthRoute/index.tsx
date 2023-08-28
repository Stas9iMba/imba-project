import { Button } from 'antd';
import sha256 from 'crypto-js/sha256';
import { useState, useCallback } from 'react';

import UserService from 'src/services/UserService';
import AuthForm, { AuthFormValues } from '~components/AuthForm';
import RegisterForm, { RegisterFormValues } from '~components/RegisterForm';

import style from './AuthRoute.module.scss';

function AuthRoute() {
  const [isAuthUser, setIsAuthUser] = useState(true);

  const handlerSwitchForm = useCallback(() => {
    setIsAuthUser((isAuth) => !isAuth);
  }, []);

  const handleAuthFinish = useCallback((values: AuthFormValues) => {
    UserService.Instance.auth(values.username, sha256(values.password).toString());
  }, []);

  const handleRegisterFinish = useCallback((values: RegisterFormValues) => {
    UserService.Instance.register(values.username, sha256(values.password).toString());
  }, []);

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
            <Button type="link" onClick={handlerSwitchForm}>
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
            <Button type="link" onClick={handlerSwitchForm}>
              Sign in to your Messenger
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthRoute;
