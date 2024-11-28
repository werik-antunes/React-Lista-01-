
import './App.css'
import Saudacao from './components/Saudacao'



function App() {
  const isDia = true;
  return (
    <>
      <h1>Exemplo de Saudação Condicional</h1>
      <Saudacao isDia={isDia} />
    </>
  )
}

export default App
