import css from './TaskCounter.module.css';
import { useSelector } from 'react-redux';
import { selectTasksCount } from '../../redux/tasksSlice';

export const TaskCounter = () => {

  const count = useSelector(selectTasksCount);

  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};

