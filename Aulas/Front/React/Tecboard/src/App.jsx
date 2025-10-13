
import './App.css'
import { FormularioDeEvento } from './assets/Componentes/FormularioDeEvento'
import { Tema } from './assets/Componentes/Tema'
import { Banner} from './assets/Componentes/Banner'
import { CardEvento } from './assets/Componentes/CardEvento';

//No react, componentes são FUNÇÕES


function App() {

  
  // Vamos criar um array / //Vamos criar uma lista de objetos
  const temas = [
    {
      id: 1,
      nome:  'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id:3 ,
      nome: 'devops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id:5,
      nome: 'data science'
    },
    {
      id:6,
      nome: 'cloud'
    }
  ]
  
  const eventos = [
    {
      capas: 'https:',
      tema: temas[0],
      data: new Date(),
      titulo:'Mulheres no Font'
    }
  ]
  
  
  return (
    <main>
      <header>
        <img src="/logo.png" alt="Tecboard" />
      </header>
      
      <Banner/>

      <FormularioDeEvento />

      {temas.map(function(item){
        return (
          <section key={item.id}>
            <Tema tema={item}/>
            <CardEvento evento= {eventos[0]}/>
          </section>
        )
      })}

{/* ALT + SHIFT + A
      <section>
        <Tema tema={temas[0]}/>
      </section>
      <section>
        <Tema tema={temas[1]}/>
      </section>
      <section>
        <Tema tema={temas[2]}/>
      </section>
      <section>
        <Tema tema={temas[3]}/>
      </section>
      <section>
        <Tema tema={temas[4]}/>
      </section>
      <section>
        <Tema tema={temas[5]}/>
      </section> */}
    </main>
  )
}


export default App


