import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const JuegosContext = createContext()

const JuegosProvider = ({children}) =>{


    const [busqueda, setBusqueda] = useState({
        platform: "all",
        category: "",
        relevance: "release-data"
    })

    const handleChangeBusqueda = (datos) =>{
        setBusqueda(datos)
    }

    useEffect(() => {
        const obtenerJuegos = async () => {

            try{
                const url = `https://www.freetogame.com/api/games` 
                
                console.log(url) 
                const {data}  = await axios.get(url)
                console.log(data)


            }catch (error) {
                console.log(error);
            }

        }

        obtenerJuegos()
      
    }, [])


    return(
        <JuegosContext.Provider value={{
            handleChangeBusqueda,
            busqueda
        }}>
    
            {children}
    
        </JuegosContext.Provider>
    )


}


export{
    JuegosProvider
}

export default JuegosContext

