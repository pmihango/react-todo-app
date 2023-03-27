import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import UserHome from "./UserHome";
import Projects from "./Projects";
import Auth from "./Auth";
import Signup from "./Signup";
import AddProject from "./AddProject";
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState(localStorage.getItem('userInfo'));
  return (
    <BrowserRouter>
       <Header userInfo={userInfo} />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/addProject" element={<AddProject/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
