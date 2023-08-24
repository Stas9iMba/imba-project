import { Layout } from 'antd';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '~assets/icons/logo.svg';

import style from './Header.module.scss';

function Header() {
  return (
    <Layout.Header>
      <div className={style['header-wrapper']}>
        <Link to="/" className={style['logo']}>
          <Logo className={style['logo__icon']} />
        </Link>
      </div>
    </Layout.Header>
  );
}

export default Header;
