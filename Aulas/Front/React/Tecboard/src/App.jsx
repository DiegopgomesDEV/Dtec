import './App.css'
import  {FormularioDeEvento}  from './assets/Componentes/FormularioDeEvento'
// No react, componentes são FUNÇÕES

function App() {
  
  return (
    <main>
      <header>
        <img src='/logo.png' alt='Tecboard'/>
      </header>
      <section>
        <img src='/banner.png' alt='Banner principal'/>
      </section>
      <FormularioDeEvento></FormularioDeEvento>
    </main>
  )
}

export default App
