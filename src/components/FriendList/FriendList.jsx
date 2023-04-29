// import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
   return <ul className="friend-list">
      {friends.map((el) => {
         <FriendListItem avatar={friends[0].avatar} name={friends[0].name} isOnline={friends[0].isOnline}/>
      })}
  </ul>;
};

// FriendList.propTypes = {};
