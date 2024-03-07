import { useParams } from "react-router-dom"

export default function UjKonyv(){
    
    const prop = useParams();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
                <div className="container-fluid">
                    <a className="nav-item nav-link" href="/">Könyvek</a>
                    <a className="nav-item nav-link" href="ujkonyv">Új könyv</a>
                </div>
            </nav>
            <form onSubmit={(e)=>{
                e.preventDefault();
                fetch(`https://localhost:5001/Konyv`,{method:"POST",headers: {"Content-Type": "application/json"},body:JSON.stringify({
                    "nev": document.getElementById("nev").value,
                    "kiadasEve": document.getElementById("kiadaseve").value,
                    "ertekeles": document.getElementById("ertekeles").value,
                    "kepneve": document.getElementById("kepnev").value
                })})
                .then((resp)=> resp.json())
                .then((data)=> {
                    console.log(data)
                    alert(data)
                })
            }}>
              <div class="mb-3">
                <label for="nev" class="form-label">Nev</label>
                <input type="text" class="form-control" id="nev" aria-describedby="nev"/>
              </div>
              <div class="mb-3">
                <label for="kiadaseve" class="form-label">Kiadas Éve</label>
                <input type="number" class="form-control" id="kiadaseve"/>
              </div>
              <div class="mb-3 form-control">
                <label class="form-control" for="ertekeles">Értekeles</label>
                <input type="number" class="form-control" id="ertekeles"/>
              </div>
              <div class="mb-3 form-control">
                <label class="form-control" for="kepnev">Kép neve</label>
                <input type="text" class="form-control" id="kepnev"/>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}