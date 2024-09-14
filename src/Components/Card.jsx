import { Link } from "react-router-dom";
import { useAppStates } from "../Context/Context";


const Card = ({ user }) => {

  const { dispatch } = useAppStates();

  const addFav = () => {
    console.log(user);
    dispatch({ type: 'SET_FAVS', payload: user });
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/detail/' + user.id}><h2>{user.name}</h2></Link>
        <img src='../../public/images/doctor.jpg' alt={user.username} />
        <p>{user.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
