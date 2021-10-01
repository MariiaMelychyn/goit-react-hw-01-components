import s from './FriendsList.module.css';
import PropTypes from 'prop-types';
import Friend from './Friend';

export default function FriendsList({ friends }) {
  return (
    <div className={s.friends}>
      <ul className={s.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li>
            <Friend avatar={avatar} name={name} isOnline={isOnline} id={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};