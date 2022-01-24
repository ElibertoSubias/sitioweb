import { NavLink } from "react-router-dom"
import './navbar.css'

export default function Navbar() {
    return (
        <header>                        
            <div className="head-top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="email">
                                <a href="#"><img src={require("../assets/images/mail_icon.png")} /> Email : demo@gmail.com</a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="logo">
                                <a href="index.html"><img src={require("../assets/images/logo.png")} /></a>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <div className="contact_nu">
                                <a href="#"> <img src={require("../assets/images/phone_icon.png")} /> Contact : +71 71234567</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg">
                <div className="container">
                    <nav className="navigation navbar-expand-md  navbar-dark ">

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExample04">
                            <ul className="navbar-nav mr-auto">
                                <li><NavLink className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} to="/">Inicio</NavLink></li>
                                <li><NavLink className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} to="/acercade">About</NavLink></li>
                                <li><NavLink className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} to="/users">Yoga</NavLink></li>
                                <li><NavLink className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} to="/usuarios">Pricing</NavLink></li>
                                <li><NavLink className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} to="/users/1">Yoga Online</NavLink></li>
                                <li><NavLink className={({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'} to="/dashboard">Contact us</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
