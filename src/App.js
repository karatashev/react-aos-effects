
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Homepage from './pages/Homepage';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/register' element={<Register />}/>

      </Routes>


      {/* <Home /> */}
    </div>
  );
}

export default App;
