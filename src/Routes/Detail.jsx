import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppStates } from "../Context/Context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const { state } = useAppStates();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const params = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${params.id}`;
  
  useEffect(() => {
    axios(url)
      .then(response => {
        console.log(response.data);
        setUser(response.data);

        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className={'container ' + state.theme}>
      { 
        loading 
        ? 
          <h1>Cargando...</h1> 
        :
          <>
            <h1>Detail Dentist id : {user.id}</h1>
            <p>Nombre: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Celular: {user.phone}</p>
            <p>Website: {user.website}</p>
          </>
      } 
    </div>
  )
}

export default Detail