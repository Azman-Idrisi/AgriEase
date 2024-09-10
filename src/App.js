import './App.css';
import Login from './components/Login';
import Home from './screens/Home';
import LearnMore from './screens/LearnMore';
import Services from './screens/services';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/learnmore" element={<LearnMore/>}/>
      </Routes>
    </Router>
  );
}

export default App;
