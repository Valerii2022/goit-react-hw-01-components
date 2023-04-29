// import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';
// import friends from './friends.json';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
        <span className="status">isOnline{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
  );
};

// FriendListItem.propTypes = {};
