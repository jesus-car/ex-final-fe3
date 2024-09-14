import { useAppStates } from '../Context/Context';
import '../index.css'
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useAppStates();
  const handleTheme = () => {
    dispatch({ type: 'CHANGE_THEME', payload: state.theme === 'dark' ? 'light' : 'dark' });
  }
  return (
    <nav className={'nav ' + state.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to='/'>Home</Link>
      <Link to='favs'>Favoritos</Link>
      <Link to='contact'>Contacto</Link>
      <button onClick={handleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar