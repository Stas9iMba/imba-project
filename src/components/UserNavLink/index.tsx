import NiceModal from '@ebay/nice-modal-react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

import FollowersModal from 'src/containers/FollowersModal';
import FollowingsModal from 'src/containers/FollowingsModal';

import style from './UserNavLink.module.scss';

function UserNavLink() {
  const handleFollowersButtonClick = useCallback(() => {
    void NiceModal.show(FollowersModal);
  }, []);

  const handleFollowingsButtonClick = useCallback(() => {
    void NiceModal.show(FollowingsModal);
  }, []);

  return (
    <ul className={style['list']}>
      <li>
        <Link to="/posts">
          <p>53</p>
          <span>Posts</span>
        </Link>
      </li>
      <li>
        <button type="button" onClick={handleFollowingsButtonClick}>
          <p>12</p>
          <span>Following</span>
        </button>
      </li>
      <li>
        <button type="button" onClick={handleFollowersButtonClick}>
          <p>1</p>
          <span>Followers</span>
        </button>
      </li>
    </ul>
  );
}

export default UserNavLink;
