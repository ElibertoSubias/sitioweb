import { useParams } from "react-router"

export default function UsersPage() {

    const {id} = useParams();

    return (
        <div>
            Usuarios
        </div>
    )
}
