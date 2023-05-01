import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { getStatusColor } from '../../utils/getStatusColor';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const background = getStatusColor();
  return (
    <>
      <span
        className={css.status}
        style={{ backgroundColor: [background] }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
