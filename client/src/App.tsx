import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
