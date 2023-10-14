import { useParams } from "react-router-dom"

export default function Logement() {
    const { id } = useParams()
    console.log("use param id :", id)
    return (
        <main>
            <h1>Page logement</h1>
        </main>
    )
}