import './App.css';
import LoginUp from './components/LoginUp/LoginUp.jsx';
import NavBar from './components/NavBar/NavBar';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import PublicPage from './components/ContentPage/PublicPage/PublicPage';
import CinemaPlaces from './components/ContentPage/CinemaPlaces/CinemaPlaces';
import ProfilePage from './components/ContentPage/ProfilePage/ProfilePage';
import NotFound from './components/ContentPage/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    
    <div className="loginupContainer">
      <LoginUp/>
    </div>


    <div className="container">
      
      
      <div className="navBarContainer">
        <NavBar/>
      </div>
      
      <div className="contentContainer">
        <Routes>
          <Route path='/' element={<PublicPage />}/>
          <Route path='/places' element={<CinemaPlaces />}/>
          <Route path='/userprofile/:id' element={<ProfilePage />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>

      </div>
    
    </div>

      

    </div>
  );
}

export default App;
