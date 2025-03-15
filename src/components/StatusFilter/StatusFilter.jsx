import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {setStatusFilter} from '../../redux/action';

export const StatusFilter = () => {

  const filter = useSelector(state => state.filters.status);
  const dispatch = useDispatch();

  const handleFilterChange = filter => {
    dispatch(setStatusFilter(filter));
  }

  return (
    <div className={css.wrapper}>
      <button onClick={() => handleFilterChange('all')}>All</button>
      <button onClick={() => handleFilterChange('active')}>Active</button>
      <button onClick={() => handleFilterChange('completed')}>Completed</button>
    </div>
  );
};
