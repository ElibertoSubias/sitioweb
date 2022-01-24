import { useParams } from "react-router"

export default function UserPage() {

    const {id} = useParams();

    return (
        <div>
            Perfil de {id}
        </div>
    )
}
