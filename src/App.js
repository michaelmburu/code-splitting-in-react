import React, {lazy, Suspense} from 'react';
import {Link, Routes, Route} from 'react-router-dom';


// Code splitting Routes
const Home = lazy(() => import('./Pages/Home'));
const About = lazy(() => import('./Pages/About'));
const Articles = lazy(() => import('./Pages/Articles'));

// Lazy loading components. Use on components that are hidden on load
// Error boundaries to cach exceptions
function App() {
  return (
      <div>
        <h1>Code Splitting</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </Suspense>
        
      </div>
  );
}

export default App;
