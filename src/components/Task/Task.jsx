import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import {deleteTask, toggleCompleted} from '../../redux/operations';
import { useDispatch } from 'react-redux';

export const Task = ({ task }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleTaggle = () => {
    dispatch(toggleCompleted(task))
  }
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        onChange={handleTaggle}
        className={css.checkbox}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} type='button' onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
