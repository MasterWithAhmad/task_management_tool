// // /src/components/AddTask.jsx
// import { useState } from 'react';
// import Swal from 'sweetalert2';

// const AddTask = ({ addTask }) => {
//   const [task, setTask] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim()) {
//       addTask(task);
//       Swal.fire('Task Added', 'Your task has been added.', 'success');
//       setTask('');
//     } else {
//       Swal.fire('Error', 'Task cannot be empty.', 'error');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex gap-2">
//       <input
//         type="text"
//         value={task}
//         onChange={(e) => setTask(e.target.value)}
//         placeholder="Add new task"
//         className="p-2 border border-gray-300 rounded"
//       />
//       <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
//     </form>
//   );
// };

// import PropTypes from 'prop-types';

// AddTask.propTypes = {
//   addTask: PropTypes.func.isRequired,
// };

// export default AddTask;


// /src/components/AddTask.jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const AddTask = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') {
      // Show SweetAlert notification for empty input
      Swal.fire({
        title: 'Input Required',
        text: 'Please enter a task description before adding.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    addTask(taskText);
    setTaskText('');

    // Show SweetAlert notification for successful addition
    Swal.fire({
      title: 'Task Added!',
      text: 'Your new task has been added successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
        className="border border-gray-300 rounded-l px-4 py-2 flex-grow"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default AddTask;