import StudentList from './pages/StudentList'
import FavStudentList from './pages/FavStudentList'
import StudentProvider from './StudentProvider'
import './index.css'
import { Routes, Route, NavLink } from "react-router-dom";


function App() {


  return (

    <StudentProvider>
      <div >
        <nav className="bg-gray-200 p-4 gap-4 flex justify-center sticky top-0 z-999">
          <NavLink
            to='/'
            end
            className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
          >
            All Student List
          </NavLink>
          <span> | </span>
          <NavLink
            to='/favorite-students'
            className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
          >
            Favorite Students
          </NavLink>
        </nav>

        <Routes>
          <Route path='/' element={<StudentList />} />
          <Route path='/favorite-students' element={<FavStudentList />} />
        </Routes>
      </div>
    </StudentProvider>


  )
}

export default App
