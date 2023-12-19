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

  useEffect(() => {
    const fetchAllPost = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/post');
        const result=response;
       
        if(response.status==200)
        {
          setdata(response.data);
        }
      } catch (error) {
        throw new Error("Unable to fetch data");
      }
    };
  
    fetchAllPost(); // Call the function when the component mounts
  }, []); // Dependency array is empty for componentDidMount behavior
  
  

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
