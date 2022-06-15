import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login, Registration, NoPageFound } from './Pages/index';

function App() {
  console.log(process.env);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </div>
  );
}

export default App;
