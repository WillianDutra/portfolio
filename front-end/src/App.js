import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={ Home } />
        <Route path="/blog" exact Component={ Blog } />
        <Route path="/admin" exact Component={ Admin } />
      </Routes>
    </Router>
  );
}

export default App;
