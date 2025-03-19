import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {setStatusFilter} from '../../redux/filtersSlice';
import { selectStatusFilter } from '../../redux/filtersSlice';

export const StatusFilter = () => {

  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (filter) => {
    dispatch(setStatusFilter(filter));
  }


  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === 'all'}
        onClick={() => handleFilterChange('all')}
      >
        All
      </Button>
      <Button
        selected={filter === 'active'}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </Button>
      <Button
        selected={filter === 'completed'}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </Button>
    </div>
  );
};
