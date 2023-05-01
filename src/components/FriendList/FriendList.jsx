// import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <FriendListItem
        avatar={friends[0].avatar}
        name={friends[0].name}
        isOnline={friends[0].isOnline}
      />
      <FriendListItem
        avatar={friends[1].avatar}
        name={friends[1].name}
        isOnline={friends[1].isOnline}
      />
    </ul>
  );
};

// FriendList.propTypes = {};
