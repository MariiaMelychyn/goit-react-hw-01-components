import s from './FriendsList.module.css';
import PropTypes from 'prop-types';
import { friendIsOnline } from '../../helpers/FriendIsOnline-helper';

export default function Friend({ avatar, name, isOnline, id }) {
  return (
    <div key={id} className={s.item}>
      {' '}
      <span className={s.status} style={{ color: friendIsOnline(isOnline) }}>
        {' '}
        ●
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </div>
  );
}
Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
Friend.defaultProps = {
  avatar:
  'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg',
  name: 'User name',
  isOnline: false,
};