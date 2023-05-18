import PhuongThao from './PhuongThao';
import Blogs from './Blogs';
import Home from './Home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <nav>
          			<ul>
            			<li>
              				<Link to="/">Home</Link>
            			</li>
            			<li>
              				<Link to="/contact">Contact</Link>
            			</li>
                  <li>
              				<Link to="/blogs">Blogs</Link>
            			</li>
          			</ul>
        		</nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          			<Route path="/contact" element={<PhuongThao />} />
                <Route path="/blogs" element={<Blogs />} />
          			<Route path="/" element={<Home />} />
        		</Routes>
      </div>
    </Router>
  );
}

export default App;
