import { Link } from 'react-router-dom'
import '/style.css'

function Home() {
   return (
   <>
   <h2>Bem vindo a minha Avaliação</h2>
   <Link to="/Exercicios">
   <button>navegar para Exercicios</button>
   </Link>

   <Link to="/Exercicio2"></Link>
   <button>navegar para <Exercicio2></Exercicio2></button>
   </>
   )
}
export  default Home