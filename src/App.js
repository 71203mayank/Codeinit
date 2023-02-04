import { useState } from "react";
import { createContext } from "react";
import "./App.css";
import Login from "./Components/LoginPage/Login";
import User from "./Components/User/User";

let userIdContext = createContext();

function App() {
  const [uid, setUid] = useState();

  return (
    <div className="App">
      <userIdContext.Provider value={{ user: [uid, setUid] }}>
        <Login />
        <User />
      </userIdContext.Provider>
    </div>
  );
}

export default App;
export { userIdContext };
