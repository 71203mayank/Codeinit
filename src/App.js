import './App.css';
import Left from './Components/Left/Left';
import Login from './Components/LoginPage/Login';
import MainPage from './Components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Login/>
      <MainPage/>
      <Left/>
      
    </div>
  );
}

export default App;
