// /src/hooks/useLocalStorage.jsx
import { useState } from 'react';

// Custom hook for managing local storage
function useLocalStorage(key, initialValue) {
  // Initialize state with value from local storage or the initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading local storage", error);
      return initialValue;
    }
  });

  // Function to update local storage and state
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error("Error setting local storage", error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;