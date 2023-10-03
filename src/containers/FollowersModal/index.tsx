import NiceModal, { antdModalV5, useModal } from '@ebay/nice-modal-react';
import { Modal } from 'antd';

import FollowersList from '~components/FollowersList';

const FollowersModal = NiceModal.create(() => {
  const modal = useModal();

  return (
    <Modal title="Followers" centered {...antdModalV5(modal)}>
      <FollowersList />
    </Modal>
  );
});

export default FollowersModal;
