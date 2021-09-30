import s from './Friend.module.css';
import PropTypes from 'prop-types';

function friendIsOnline(status) {
  if (status) {
    return '#2ECC71';
  } else {
    return '#E74C3C';
  }
}
export default function FriendsList({ friends }) {
  return (
    <div className={s.friends}>
      <ul className={s.friendList}>
        {friends.map(friend => (
          <li className={s.item} key={friend.id}>
            {' '}
            <span
              className={s.status}
              style={{ color: friendIsOnline(friend.isOnline) }}
            >
              {' '}
              ●
            </span>
            <img
              className={s.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="48"
            />
            <p className={s.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number,
};

FriendsList.defaultProps = {
  avatar:
    'https://st.depositphotos.com/1779253/5140/v/600/depositphotos_51402215-stock-illustration-male-avatar-profile-picture-use.jpg',
  name: 'User name',
  isOnline: false,
};