import {useState} from 'react'
const Form = () => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })
    const {artista, cancion} = busqueda;

    const actualizarState = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

    }


    return ( 

        <div className="bg-info">
            <div className="container">
                <div className="row">
                    <form
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                                <legend className="text-center"> Buscador de Cancioes </legend>
                              <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label> Artista </label>
                                        <input 
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre del Artista"
                                        onChange={actualizarState}
                                        value={artista}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <label> Cancion </label>
                                        <input 
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre del Cancion"
                                        onChange={actualizarState}
                                        value={cancion}
                                        />
                                    </div>
                                </div>
                              </div>  
                              <button className="btn btn-primary float-right">Buscar <ion-icon name="search-sharp"></ion-icon></button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

        );
}
 
export default Form;