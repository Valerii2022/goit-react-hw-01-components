import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { getStatusBgColor } from '../../utils/getStatusBgColor';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        className={css.status}
        style={{ backgroundColor: getStatusBgColor(isOnline) }}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
