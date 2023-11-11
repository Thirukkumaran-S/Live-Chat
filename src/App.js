import React from "react";
import "./App.css";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import Users_Groups from "./Components/Users_Groups";
import CreateGroups from "./Components/CreateGroups";
import ChatArea from "./Components/ChatArea";
import Welcome from "./Components/Welcome";
import Users from "./Components/Users";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <MainContainer/> */}
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="app" element={<MainContainer />}>
          <Route path="groups" element={<Users_Groups />}></Route>
          <Route path="creategroups" element={<CreateGroups />}></Route>
          <Route path="chat" element={<ChatArea />}></Route>
          <Route path="welcome" element={<Welcome />}></Route>
          <Route path="users" element={<Users/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
