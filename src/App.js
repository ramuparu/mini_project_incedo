import {Routes,Route} from 'react-router-dom'
import './App.css';
import Login from './components/login/Login.component.jsx';
import Register from './components/SignUp/Register.component';


function App() {
  return (
    <Routes>
       <Route path="/login" element={<Login />}/>
       <Route path="/register" element={<Register />}/>
    </Routes>
  );
}

export default App;
