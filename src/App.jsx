import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import Navbar from './Componets/Navbar/Navbar';
import Sidebar from './Componets/Sidebar/Sidebar';
import Home from './Componets/Home/Home';
import Login from './Componets/Login/Login';
import AdminDashboard from './Componets/AdminDashboard/AdminDashboard';
import StudentDashboard from './Componets/StudentDashboard/StudentDashboard';
import TeacherDashboard from './Componets/TeacherDashboard/TeacherDashboard';
import './App.css';
import { GlobalProvider } from './Context/GlobalContext';
import { AuthProvider ,AuthContext} from './Context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <GlobalProvider>
        <Navbar/>
        <Sidebar/>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
          </Routes>
      </GlobalProvider>
    </AuthProvider>
  );
};

export default App;
