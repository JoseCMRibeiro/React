import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ContextSamples from '../Pages/contextSamples';
import EmptyPage from '../Pages/empty';

export default function NavBar() 
{  
  return (
    <div>      
        <nav>     
            <Link to="/route1">CONTEXT</Link>
            <Link to="/route2">EMPTY</Link>        
        </nav>
        <Routes>
          <Route path="/route1" element={<ContextSamples />} />
          <Route path="/route2" element={<EmptyPage />} />        
        </Routes>
    </div>
  );
}

