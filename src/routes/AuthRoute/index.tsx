import { Button } from 'antd';
import { useState, useCallback } from 'react';

import AuthForm, { AuthFormValues } from '~components/AuthForm';
import RegisterForm from '~components/RegisterForm';

import style from './AuthRoute.module.scss';

function AuthRoute() {
  const [isAuthUser, setIsAuthUser] = useState(true);

  const handlerSwitchForm = useCallback(() => {
    setIsAuthUser((isAuth) => !isAuth);
  }, []);

  const handleFinish = useCallback((values: AuthFormValues) => {
    console.log('Success:', values);
  }, []);

  return (
    <div className={style['main']}>
      {isAuthUser ? (
        <div className={style['auth-form']}>
          <h2 className={style['auth-form__title']}>Welcome to Imba</h2>
          <div className={style['auth-form__content']}>
            <AuthForm onFinish={handleFinish} />
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
            <RegisterForm onFinish={handleFinish} />
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
