import { JuegosProvider } from "./context/JuegosProvider"
import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"

function App() {

  return (
   <JuegosProvider>
    <header className="d-flex p-5 text-white fs-4 fondo-header justify-content-around align-items-center">
      <h1>Juegos gratis</h1>
      <div className="d-flex gap-5">
        <p>PC</p>
        <p>Browser</p>
      </div>
    </header>
    <main>
      <Container >
        <Formulario/>
      </Container>
    </main>

   </JuegosProvider>
    

  )
}

export default App
