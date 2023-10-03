import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { redirect } from 'react-router-dom';

import UserService from 'src/services/UserService';
import PhotoGallery from '~components/PhotoGallery';
import UserInfo from '~components/UserInfo';
import UserNavLink from '~components/UserNavLink';

import style from './HomeRoute.module.scss';

export function HomeRouteLoader() {
  if (UserService.Instance.CurrentUser) {
    return null;
  }

  return redirect('/auth');
}

function HomeRoute() {
  return (
    <div className={style['home']}>
      <div className={style['container']}>
        <div className={style['home__top']}>
          <Avatar size={64} icon={<UserOutlined />} />
          <UserNavLink />
        </div>
        <UserInfo />
        <div className={style['home__button']}>
          <Button type="primary" block>
            Primary Button
          </Button>
        </div>
        <div className={style['home__gallery']}>
          <PhotoGallery />
        </div>
      </div>
    </div>
  );
}

export default HomeRoute;
