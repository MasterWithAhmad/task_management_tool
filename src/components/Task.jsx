import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditTaskModal from './EditTaskModal';

const Task = ({ task, deleteTask, editTask }) => {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask(task.id);
        Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
      }
    });
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setEditModalOpen(true);
  };

  const handleEdit = (taskId, newText, newStatus) => {
    editTask(taskId, newText, newStatus);
  };

  // Ensure createdAt is converted to number if needed
  const createdAtTimestamp = typeof task.createdAt === 'string' ? Date.parse(task.createdAt) : task.createdAt;

  return (
    <div className="border border-gray-300 rounded p-4 shadow-md cursor-pointer" onClick={() => navigate(`/tasks/${task.id}`)}>
      <div className="flex justify-between mb-2">
        <h3 className="text-lg font-semibold">{task.text}</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={handleEditClick}
            className="text-blue-500 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); handleDelete(); }}
            className="text-red-500 hover:text-red-600"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 mb-2">{task.status}</p>
      <p className="text-sm text-gray-600">{new Date(createdAtTimestamp).toLocaleDateString()}</p>

      <EditTaskModal
        isOpen={isEditModalOpen}
        onRequestClose={() => setEditModalOpen(false)}
        task={task}
        onEdit={handleEdit}
      />
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string,
    createdAt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired, // Allow string or number
  }).isRequired,
  deleteTask: PropTypes.func.isRequired,
  editTask: PropTypes.func.isRequired,
};

export default Task;
