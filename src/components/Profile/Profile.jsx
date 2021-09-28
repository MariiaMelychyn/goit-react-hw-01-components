import PropTypes from 'prop-types';
import noAvatar from '../../images/photo.png';

import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img
        src={noAvatar}
        alt="Аватар пользователя"
        className={styles.avatar}
        width="150"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>

    <ul className={styles.stats}>
      <li className={styles.item}>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.defaultProps = {
  avatar: "https://is5-ssl.mzstatic.com/image/thumb/Purple71/v4/06/35/3e/06353e20-cb84-c0fb-941f-fa42c64855f9/source/512x512bb.jpg",
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;