import './App.css'

function App() {

  const TirarDados = ()=>{
    console.log("Btn para tirar dados funcionando")
  }

  return (
    
    <div className='hijo_de_root'> 
      <div className='card'>
        <p>Advice #117</p>
        <h1>"It is easy to sit up and take notice, what's difficult is getting up and taking action"</h1>
        <img className='line' src="/line-pause.svg" alt="linea-pausa" />
        <button onClick={TirarDados} className='contenedor_dado' >
          <img src="/dice.svg" alt="icono-dado" />
        </button>
      </div>
    </div>
  )
}

export default App
