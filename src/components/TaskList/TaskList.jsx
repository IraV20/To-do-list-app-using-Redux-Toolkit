import { Task } from '../Task/Task';
import css from './TaskList.module.css';
import { useSelector } from 'react-redux';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case 'aktive':
      return tasks.filter((task) => !task.comleted);
    case 'comleted':
      return tasks.filter((task) => task.comleted);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);

  const statusFilter = useSelector((state) => state.filters.status);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
