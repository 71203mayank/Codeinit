import './App.css';
import Left from './Components/Left/Left';
import Login from './Components/LoginPage/Login';
import MainPage from './Components/MainPage/MainPage';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Login/>
      <MainPage/>
      <Left/>
      
    </div>
  );
}

export default App;
