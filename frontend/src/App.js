// App.js
import { useState,useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios"
import NavbarBox from "./components/Navbar/navbar";

import PostBox from "./pages/Post";
import { Provider } from "react-redux";
import store from "./redux/store/Store";

import Dashboard from "./pages/dashboard";

function App() {
  const [data, setdata] = useState([]);
  const [loginuser, setloginuser] = useState("");

  const userHandler = (user) => {
    setloginuser(user)
   
  };


  return (
    <Provider store={store}>
      <BrowserRouter>
        <div style={{ overflow: "hidden" }}>
          <NavbarBox
            loginuserHandler={userHandler}
            user={loginuser}
          />

          <Routes>
            <Route path="/" element={<Dashboard  data={data} setdata={setdata} user={loginuser}/>} />
            <Route path="/:id" element={<PostBox data={data} user={loginuser} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
