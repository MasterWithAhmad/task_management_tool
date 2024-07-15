// /src/components/Header.jsx
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-xl font-bold">TaskManager</div>
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link> {/* Link to Home page */}
          <Link to="/about" className="hover:underline">About</Link> {/* Link to About page */}
          <Link to="/contact" className="hover:underline">Contact</Link> {/* Link to Contact page */}
        </div>
      </nav>
    </header>
  );
};

export default Header;