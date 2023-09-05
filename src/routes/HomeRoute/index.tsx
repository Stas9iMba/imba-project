import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import PhotoGallery from '~components/PhotoGallery';
import UserInfo from '~components/UserInfo';
import UserNavLink from '~components/UserNavLink';

import style from './HomeRoute.module.scss';

function HomeRoute() {
  return (
    <div className={style['home']}>
      <div className={style['container']}>
        <div className={style['home__top']}>
          <Avatar size={64} icon={<UserOutlined />} />
          <UserNavLink />
        </div>
        <UserInfo />
        <div className={style['home__gallery']}>
          <PhotoGallery />
        </div>
      </div>
    </div>
  );
}

export default HomeRoute;
