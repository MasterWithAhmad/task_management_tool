// /src/components/TaskList.jsx
import Task from './Task';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} /> // Pass edit function as prop
      ))}
    </div>
  );
};

import PropTypes from 'prop-types';

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default TaskList;