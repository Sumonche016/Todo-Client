
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Todo from './Components/ToDo/Todo';
import Completed from './Components/Completed/Completed';
import Calender from './Components/Calender/Calender';
import Home from './Components/Home/Home/Home';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Todo></Todo>}></Route>
        <Route path='/completed' element={<Completed></Completed>}></Route>
        <Route path='/calender' element={<Calender></Calender>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div >
  );
}

export default App;
