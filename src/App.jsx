// /src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> {/* Header component */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route for Home page */}
            <Route path="/about" element={<About />} /> {/* Route for About page */}
            <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
          </Routes>
        </main>
        <Footer /> {/* Footer component */}
      </div>
    </Router>
  );
};

export default App;