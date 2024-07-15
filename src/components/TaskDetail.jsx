// /src/components/TaskDetail.jsx
import { useHistory } from 'react-router-dom';

import PropTypes from 'prop-types';

const TaskDetail = ({ task }) => {
  const history = useHistory();

  const handleBack = () => {
    history.push('/');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{task?.text}</h2>
          <p className="text-sm text-gray-600 mb-2">Status: {task.status}</p>
          <p className="text-sm text-gray-600 mb-4">Created on: {new Date(task.createdAt).toLocaleDateString()}</p>
          <div className="flex justify-end">
            <button
              onClick={handleBack}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TaskDetail.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string,
    status: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default TaskDetail;