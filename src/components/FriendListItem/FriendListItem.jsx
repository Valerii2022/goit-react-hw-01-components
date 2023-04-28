// import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';
// import friends from './friends.json';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <span className="status"></span>
      <img className="avatar" src="" alt="User avatar" width="48" />
      <p className="name"></p>
    </li>
  );
};

// FriendListItem.propTypes = {};
