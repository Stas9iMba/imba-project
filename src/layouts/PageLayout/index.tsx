import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

import style from './PageLayout.module.scss';

function PageLayout() {
  return (
    <Layout className={style['content-wrapper']}>
      <Header />
      <Layout.Content className={style['main']}>
        <Outlet />
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default PageLayout;
