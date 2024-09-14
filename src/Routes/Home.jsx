import Card from '../Components/Card'
import { useAppStates } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useAppStates();
  
  return (
    <main className={'container ' + state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        { state.users.map((user) => {
            return (<Card key={user.id} user={user}/>)
          }
        )}
      
      </div>
    </main>
  )
}

export default Home