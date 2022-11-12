import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import DetailProjects from './pages/DetailProjects';
import DetailUser from './pages/DetailUser';
import ForgotPassword from './pages/ForgotPassword';
import Login from './pages/Login';
import Prices from './pages/Prices';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ResetPassword from './pages/ResetPassword';
import Users from './pages/Users';

export default function App() {
    return (
        <>
            <Routes>
                <Route exact path='/' element={<Login />} />
                <Route exact path='/forgotpassword' element={<ForgotPassword />} />
                <Route exact path='/resetpassword' element={<ResetPassword />} />
                <Route
                    exact
                    path='/dashboard'
                    element={
                        <>
                            <Sidebar />
                            <Dashboard />
                            <Footer />
                        </>
                    }
                />
                <Route
                    exact
                    path='/dashboard'
                    element={
                        <>
                            <Sidebar />
                            <Dashboard />
                            <Footer />
                        </>
                    }
                />
                <Route
                    exact
                    path='/users'
                    element={
                        <>
                            <Sidebar />
                            <Users />
                            <Footer />
                        </>
                    }
                />
                <Route
                    exact
                    path='/projects'
                    element={
                        <>
                            <Sidebar />
                            <Projects />
                            <Footer />
                        </>
                    }
                />
                <Route
                    exact
                    path='/prices'
                    element={
                        <>
                            <Sidebar />
                            <Prices />
                            <Footer />
                        </>
                    }
                />
                <Route
                    exact
                    path='/profile'
                    element={
                        <>
                            <Sidebar />
                            <Profile />
                            <Footer />
                        </>
                    }
                />
                <Route
                    exact
                    path='/detail-project'
                    element={
                        <>
                            <Sidebar />
                            <DetailProjects />
                            <Footer />
                        </>
                    }
                />
                <Route
                    exact
                    path='/detail-user/'
                    element={
                        <>
                            <Sidebar />
                            <DetailUser />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </>
    );
}
