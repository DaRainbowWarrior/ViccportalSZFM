import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';
import { AuthProvider } from './utils/auth';

function App() {

  return (
    <AuthProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/create' element={<CreatePost />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App
