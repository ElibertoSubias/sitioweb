import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import About from './pages/About';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import UsersPage from './pages/UsersPage';
import UserPage from './pages/UserPage';
import Dashboard from './pages/Dashboard';
import "bootswatch/dist/morph/bootstrap.min.css";
import './assets/css/owl.carousel.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import Contenido from './pages/Contenido';

import $ from 'jquery'; 
import Slideshow from './components/Slideshow';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="main-layout">
      <div className="wrapper">
        <div id="content">
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path="/" element={<Contenido/>}></Route>
              <Route path="/acercade" element={<About/>}></Route>
              <Route path="/users" element={<UsersPage/>}></Route>
              <Route path="/usuarios" element={<Navigate to="/users"/>}></Route>
              <Route path="/users/:id" element={<UserPage/>}></Route>
              <Route path="/dashboard/*" element={<Dashboard/>}>
                <Route path="welcome" element={<p>Bienvenido</p>}/>
              </Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
