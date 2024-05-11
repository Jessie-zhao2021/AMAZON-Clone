import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Checkout from './Components/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />}/>

          <Route path="/login" />

          {/* This is the default page */}
          <Route path='/' element={<Home />}/>

        </Routes>
      </div>
    </Router>

  );
}



export default App;
