import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import s from './filter-styles.module.css';
import actions from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/selectors';

export default function Filter () {
  const filterValue = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <div className={s.div}>
      <label className={s.label}>Find contacts by name</label>
      <input
        onChange={(e) => dispatch(actions.filterChange(e.target.value))}
        value={filterValue}
        className={s.input}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};


