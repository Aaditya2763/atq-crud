// App.js
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavbarBox from './components/Navbar/navbar';
import DashBoard from './pages/dashboard';
import PostBox from './pages/Post';
import { Provider } from 'react-redux';
import store from './redux/store/Store';


function App() {
  const [login, setLogin] = useState(false);

  const showAuthHandler = () => {
    setLogin(true);
    console.log(true);
  };

  const hideAuthHandler = () => {
    setLogin(false);
    console.log(false);
  };

  const AuthenticateHandler = () => {
    setLogin(true);
  };

  return (
    <Provider store={store}>
    <BrowserRouter>
    
      <div style={{overflow:'hidden'}}>
        <NavbarBox showAuthHandler={showAuthHandler} hideAuthHandler={hideAuthHandler} login={login} Authenticate={AuthenticateHandler} />

        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/:id" element={<PostBox />} />
          
        </Routes>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
