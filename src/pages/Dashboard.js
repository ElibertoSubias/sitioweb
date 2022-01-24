import { useNavigate, Routes, Route, Link, Outlet } from "react-router-dom"

export default function Dashboard() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    };

    return (
        <div>
            Dashboard
            <Outlet/>
            <button onClick={handleClick}>Salir</button>
            <Link to="welcome">Say welcome</Link>

            
        </div>
    )
}
