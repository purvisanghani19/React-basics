import './App.css';
import Picture from './practice/Picture';
import Dateandtime from './practice/Dateandtime';
import Miniproject from './practice/Miniproject';
import Calculater from './practice/calculater/Calculater';
import Cards from './practice/arrayas/Props/Cards';
import Slot from './practice/slot machine/Slot';
import Increment from './practice/Hooks/Increment';
import Clock from './practice/Digital clock/Clock';
import Changecolor from './practice/Evants/Changecolor';
import Form from './practice/Forms/Form';
import Multipalinput from './practice/Forms/Multipalinput';
import Todo from './practice/todo list/Todo';
import Inc from './practice/Increment/decrement/Inc';
import Useeffect from './practice/Useeffect';
import Api from './practice/axios/Api';
import About from './practice/React router/About';
import Error from './practice/React router/Error';
import { Route, Routes } from 'react-router';
import Menu from './practice/React router/Menu';
import Useparams from './practice/React router/Useparams';
import Login from './practice/Login/Registration/Login';
import Regi from './practice/Login/Regi';

function App() {

  return (
    <>
      {/* <div class="container">
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-body">
            <h5 class="card-title">Date and Time</h5>
            <a href=''></a>
          </div>
        </div>
      </div> */}

      {/* <Dateandtime /> */}
      {/* <Picture /> */}
      {/* <Miniproject /> */}
      {/* <Calculater/> */}
      {/* <Cards/> */}
      {/* <Slot/> */}
      {/* <Increment/> */}
      {/* <Clock/> */}
      {/* <Changecolor/> */}
      {/* <Form/> */}
      {/* <Multipalinput/> */}
      {/* <Todo/> */}
      {/* <Inc/> */}
      {/* <Useeffect/> */}
      {/* <Api/> */}


      <Menu />
      <Routes>
        <Route exact path='/' element={<About />}></Route>
        <Route exact path='/contact/:id?' element={<Useparams />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/registration' element={<Regi />}></Route>
      </Routes>


      

    </>




  );
}

export default App;
