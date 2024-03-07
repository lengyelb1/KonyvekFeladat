import { findByText } from "@testing-library/react"
import { useEffect, useState } from "react"

export default function Home(){

    const [data,setdData] = useState();

    useEffect(()=>{

        fetch("https://localhost:5001/Konyv")
        .then((resp)=> resp.json())
        .then((data)=> {
            setdData(data)
        })

    },[])

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light">
              <div className="container-fluid">
                    <a className="nav-item nav-link active" aria-current="page" >Könyvek</a>
                    <a className="nav-item nav-link" href="ujkonyv">Új könyv</a>
              </div>
            </nav>
            
            <KonyvekKi data={data}/>

        </div>
    )
}

function KonyvekKi(prop){

    
    if (prop.data != null) {
        return(
            <div className="row p-5 mx-auto text-center">
                {prop.data.map((x)=>(
                    <div key={prop.data.id+1} className="card col-3 h-50 mx-1">
                      <div className="card-body">
                        <h5 className="card-title">Könyv neve: {x.nev}</h5>
                        <h4 className="card-title">Kiadás éve: {x.kiadasEve}</h4>
                        <h6 className="card-title">Könyv értékelése: {x.ertekeles}</h6>                
                        <a href={`SingleDisplay/${x.id}`}>
                            <img src={x.kepneve} className="card-img-bottom" alt="..."/>
                        </a>
                        <div className="mx-auto mt-4 text-center">
                            <a href={`modosit/${x.id}`} className="mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                </svg>
                            </a>
                            <a href={`delete/${x.id}`} className="mx-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                                </svg>
                            </a>
                        </div>
                      </div>
                    </div>
                ))}
            </div>
        )    
    }else{
        return (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    
}

