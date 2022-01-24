import { Link } from "react-router-dom"

const userId = 'José'

export default function HomePage() {
    return (
        <div>
            Home
            <Link to={`/users/${userId}`}>Mi Perfil</Link>
        </div>
    )
}
