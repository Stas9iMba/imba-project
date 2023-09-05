import { Link } from 'react-router-dom';

import style from './UserNavLink.module.scss';

function UserNavLink() {
  return (
    <ul className={style['list']}>
      <li>
        <Link to="/posts">
          <p>53</p>
          <span>Posts</span>
        </Link>
      </li>
      <li>
        <Link to="/followings">
          <p>12</p>
          <span>Following</span>
        </Link>
      </li>
      <li>
        <Link to="/followers">
          <p>1</p>
          <span>Followers</span>
        </Link>
      </li>
    </ul>
  );
}

export default UserNavLink;
