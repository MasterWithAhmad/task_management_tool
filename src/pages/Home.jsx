import { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar'; // Import SearchBar component

const Home = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []); // State for tasks stored in local storage
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task }]); // Add new task to state
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId)); // Remove task from state
  };

  const editTask = (taskId, newText) => {
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, text: newText } : task))); // Update task text
  };

  // Filter tasks based on the search term
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Management</h1>
      <AddTask addTask={addTask} /> {/* Component to add tasks */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> {/* Component to search tasks */}
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} editTask={editTask} /> {/* Component to list tasks */}
    </div>
  );
};

export default Home;

// /src/pages/Home.jsx

//src/pages/Home.jsx
// import useLocalStorage from '../hooks/useLocalStorage';
// import AddTask from '../components/AddTask';
// import TaskList from '../components/TaskList';
// import SearchBar from '../components/SearchBar';

// const Home = () => {
//   const [tasks, setTasks] = useLocalStorage('tasks', []);

//   const addTask = (taskText) => {
//     const newTask = {
//       id: Date.now(),
//       text: taskText,
//       status: 'Pending', // Example status
//       createdAt: new Date().toISOString(), // Example creation date
//     };
//     setTasks([...tasks, newTask]);
//   };

//   const deleteTask = (taskId) => {
//     setTasks(tasks.filter((task) => task.id !== taskId));
//   };

//   const editTask = (taskId, newText, newStatus) => {
//     setTasks(
//       tasks.map((task) =>
//         task.id === taskId ? { ...task, text: newText, status: newStatus } : task
//       )
//     );
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Task Management</h1>
//       <AddTask addTask={addTask} />
//       <SearchBar />
//       <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
//     </div>
//   );
// };

// export default Home;