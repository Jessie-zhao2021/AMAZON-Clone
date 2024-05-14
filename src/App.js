import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { useStateValue } from './Components/StateProvider';



function App() {
  const [{}, dispatch] = useStateValue();


  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else{
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={<Checkout />}/>

          <Route path="/login" element={<Login />}/>

          {/* This is the default page */}
          <Route path='/' element={<Home />}/>

        </Routes>
      </div>
    </Router>

  );
}



export default App;
