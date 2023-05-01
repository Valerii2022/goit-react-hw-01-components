import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getRandomColor } from '../../utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat__list}>
        {stats.map(el => {
          const backgroundColor = getRandomColor();
          return (
            <li
              className={css.item}
              key={el.id}
              style={{ backgroundColor: [backgroundColor] }}
            >
              <span className={css.label}>{el.label}</span>
              <span className={css.percentage}>{el.percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};