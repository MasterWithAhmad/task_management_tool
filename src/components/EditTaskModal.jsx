// /src/components/EditTaskModal.jsx
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root'); // Required for accessibility

const EditTaskModal = ({ isOpen, onRequestClose, task }) => {
  const [taskText, setTaskText] = useState(task.text);
  // const [taskStatus, setTaskStatus] = useState(task.status);

  const handleSave = () => {
    // onEdit(task.id, taskText, taskStatus);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Task"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Edit Task</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Task</label>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        {/* <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Status</label>
          <select
            value={taskStatus}
            onChange={(e) => setTaskStatus(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div> */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={onRequestClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

import PropTypes from 'prop-types';

EditTaskModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default EditTaskModal;