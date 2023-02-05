import { useState } from "react";
import { createContext } from "react";
import "./App.css";
import Login from "./Components/LoginPage/Login";
import User from "./Components/User/User";
// import {Route,BrowserRouter,Routes} from "react-router-dom";

let userIdContext = createContext();

function App() {
  const [uid, setUid] = useState();

  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/user' element={<User/>}/>

      </Routes>
      </BrowserRouter> */}

      <userIdContext.Provider value={{ user: [uid, setUid] }}>
        {
          (!uid)?<Login />:<></>
        }
        {
          (uid)?<User />:<></>
        }
        
      </userIdContext.Provider>

    </div>
  );
}

export default App;
export { userIdContext };
