import './App.css';
import Questionpage from './component/Questionpage';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' component={Questionpage} />
      </Router>

    </div>
  );
}

export default App;
