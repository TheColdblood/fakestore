import React, { useContext, useState } from "react";
import { ApiContext } from "../contexts/ApiContext";

function Urlap(){
    const {postAdat} = useContext(ApiContext)
    /* saját belső state */
    const [adat, setAdat] = useState({
        title:'...',
        price:1000,
        category:'...', 
        description:'...',
        image:'...'
    })
   
    function adatKuld(event){
        event.preventDefault()
        /* összegyűjtjük az űrlapot input mezőiből az adatokat, összeállítunk egy objektumto, post kérréssel elküldjük a helyes végpontra  */
        console.log("kuldes")
    }

    function valtozasKezeles(event){
        /* itt frissítem a state értékét */
        const sv={...adat}
        sv[event.target.id]=event.target.value
        setAdat({...sv})
    }

    return(
        <div>
            <form onSubmit={adatKuld}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Termék neve</label>
                    <input type="text" value={adat.title} onChange={valtozasKezeles} className="form-control" id="title" aria-describedby="titleHelp"></input>
                    <div id="titleHelp" className="form-text">Nagybetűvel kezdődik, legalább 3 betű.</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Termék ára</label>
                    <input type="number" min="1000" max="100000" value={adat.price} onChange={valtozasKezeles} className="form-control" id="price" aria-describedby="priceHelp"></input>
                </div>

               <div className="mb-3">
                    <label htmlFor="category" className="form-label">Kategória</label>
                    <select className="form-select" aria-label="Kategória" id="category" aria-describedby="categoryHelp">
                        <option value="?"></option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Leírás</label>
                    <div className="form-floating">
                        <textarea className="form-control" value={adat.description} onChange={valtozasKezeles} placeholder="Leirás" id="description" aria-describedby="descriptionHelp"></textarea>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Kép</label>
                    <img src={adat.image} onChange={valtozasKezeles} className="img-thumbnail" alt={adat.title} id="image" aria-describedby="imageHelp"></img>
                </div>

                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Urlap