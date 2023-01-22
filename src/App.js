import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from '../component/User/Users';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path='/users' element={<Users />}/>
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
