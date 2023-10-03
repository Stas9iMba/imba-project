import NiceModal, { antdModalV5, useModal } from '@ebay/nice-modal-react';
import { Modal } from 'antd';

import FollowingList from '~components/FollowingList';

const FollowingsModal = NiceModal.create(() => {
  const modal = useModal();

  return (
    <Modal title="Followings" centered {...antdModalV5(modal)}>
      <FollowingList />
    </Modal>
  );
});

export default FollowingsModal;
