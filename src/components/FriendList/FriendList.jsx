// import PropTypes from 'prop-types';
// import css from './FriendList.module.css';
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = ({ friends }) => {
   return <ul className="friend-list">
      {friends.map((el) => {
         console.log(el)
   //       <li className="item">
   //      <span className="status">isOnline{el.isOnline}</span>
   //    <img className="avatar" src={el.avatar} alt="User avatar" width="48" />
   //      <p className="name">{el.name}</p>
   //  </li>
         // <FriendListItem avatar={friends[0].avatar} name={friends[0].name} isOnline={friends[0].isOnline}/>
      })}
  </ul>;
};

// FriendList.propTypes = {};
