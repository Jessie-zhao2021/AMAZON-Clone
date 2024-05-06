import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout/:soneRandomId/page" />

          <Route path="/login" />

          {/* This is the default page */}
          <Route path='/' />

        </Routes>
      </div>
    </Router>

  );
}



export default App;
