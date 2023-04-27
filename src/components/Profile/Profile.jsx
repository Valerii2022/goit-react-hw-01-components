import PropTypes from 'prop-types';
// import css from './Profile.module.css';

export const Profile = user => {
  return (
    <div className="profile__wrap">
      <p>{user.username}</p>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
};
