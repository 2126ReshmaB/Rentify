import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/LoginFrom/Login';
import Home from './components/Home/Home';
import Description from './components/Description/Description';
import Description2 from './components/Description/Description2';

function App() {
  return (
    <div classname='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/description' element={<Description />} />
        <Route path='/description2' element={<Description2 />} />

      </Routes>
    </div>
  );
}

export default App;
