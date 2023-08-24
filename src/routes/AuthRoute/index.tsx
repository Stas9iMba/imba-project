import { Button } from 'antd';
import { useCallback } from 'react';

import AuthForm, { AuthFormValues } from '~components/AuthForm';

import style from './AuthRoute.module.scss';

function AuthRoute() {
  const handleFinish = useCallback((values: AuthFormValues) => {
    console.log('Success:', values);
  }, []);

  return (
    <div className={style['main']}>
      <AuthForm onFinish={handleFinish} />
      <Button type="link">No account?</Button>
    </div>
  );
}

export default AuthRoute;
