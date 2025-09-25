import './App.css'
// No react, componentes são FUNÇÕES

function CampoDeEntrada(props){
  return <input {...props}/>
}

function Label({children, htmlFor}){
  return (
    <label htmlFor={htmlFor}>
    {children}
    </label>
  )
}

function CampoDeFormulario({children}) {
  return (
    <fieldset>
      {children}
    </fieldset>
  )
}

function TituloFormulario (props) {
  return (
    <h2>{props.children}</h2>
  )
}

function FormularioDeEvento(){
  return (
    <form className='form-evento'>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <CampoDeFormulario>
        <Label htmlFor="nome"> Qual é o nome do evento:</Label>
        <CampoDeEntrada type="text" id='nome' placeholder='Sumer dev hits' />
      </CampoDeFormulario>
    </form>

  )
}

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
