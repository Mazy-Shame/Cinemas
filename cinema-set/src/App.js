import './App.css';
import LoginUp from './components/LoginUp/LoginUp.jsx';
import NavBar from './components/NavBar/NavBar';

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

      </div>
    
    </div>

      

    </div>
  );
}

export default App;
