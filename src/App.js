import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Components/Home/HomePage';
import StudentList from './Components/Student/StudentList';
import CreateStudent from './Components/Student/CreateStudent';
import Navbar from './Components/Layout/Navbar';
import StudentDetail from './Components/Student/StudentDetail';
import NotFound from './Components/Layout/NotFound';


function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/Home' element={<HomePage/>}/>
            <Route path='/student' element={<StudentList/>}/>
            <Route path='/student/add' element={<CreateStudent/>}/>
            <Route path='/student/detail/:studentId/:name' element={<StudentDetail/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </>
    
  );
}

export default App;
