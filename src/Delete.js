import { useParams } from "react-router-dom"

export default function Delete(){
    const prop = useParams()
    return(
        <div>
            <h1>Are you sure about delete?</h1>

            <a href="/" className="btn btn-secondary">Back</a>
            <a href="/" className="btn btn-danger" onClick={(e)=>{
                e.preventDefault()
                fetch(`https://localhost:5001/Konyv/${prop.id}`, {method:"DELETE",headers: {"Content-Type": "application/json"}})
                .then((resp)=> resp.json())
                .then((data)=> {
                    console.log(data)
                    alert(data)
                })
            }}>DELETE</a>

        </div>
    )
}