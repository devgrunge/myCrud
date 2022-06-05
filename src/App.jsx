import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import { useState } from "react";
import Login from "./pages/Login";


function App() {
  const [user, setUser] = useState(null);

  const actionLoginDataGoogle = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL
    }

    setUser(newUser);

  }

  if (user === null) {
    return (
      <Login onReciveGoogle={actionLoginDataGoogle} />
    );
  }

return (
<>
<Router>
  <Routes>
    <Route path="/"  element={<Home />}/>
  </Routes>
  <Routes>
    <Route path="/about"  element={<About/>}/>
  </Routes>
</Router>
</>
)
}

export default App
