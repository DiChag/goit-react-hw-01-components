import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.profileName}>{username}</p>
        <a
          className={css.profileTag}
          href="https://t.me/DiChagin"
          target="_blank"
          rel="noopener noreferrer"
        >
          @{tag}
        </a>
        <a
          className={css.profileLocation}
          href="https://goo.gl/maps/oFtWD3hbJfpfDMeG6"
          target="_blank"
          rel="noopener noreferrer"
        >
          {location}
        </a>
      </div>

      <ul className={css.stats}>
        <li className={css.followersList}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.viewsList}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.likesList}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
