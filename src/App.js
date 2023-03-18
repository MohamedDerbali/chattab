import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

function App() {
  const user = localStorage.getItem("user");
  const [isLogged, setIsLogged] = useState(user ? user : false);
  return (
    <div className="App">
      {isLogged ? <Home /> : <Login isLogged={isLogged} setIsLogged={setIsLogged} />}
    </div>
  );
}

export default App;
