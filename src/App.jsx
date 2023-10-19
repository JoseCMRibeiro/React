import './App.css';
import { BrowserRouter as Router} from 'react-router-dom'; 
import NavBar from './components/navbar';

export default function App() {
  return (
    <div>
      <Router>
          <div>
            <NavBar/>
          </div>
      </Router>
    </div>
  );
}


