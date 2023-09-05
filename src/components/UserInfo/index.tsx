import style from './UserInfo.module.scss';

function UserInfo() {
  return (
    <div className={style['info']}>
      <p className={style['info__username']}>OOTD</p>
      <p className={style['info__about']}>Fit check!</p>
      <p className={style['info__text']}>lorem ipsum lorem ipsum lorem ipsum</p>
    </div>
  );
}

export default UserInfo;
