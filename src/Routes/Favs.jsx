import React from "react";
import Card from "../Components/Card";
import { useAppStates } from "../Context/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useAppStates();

  return (
    <div className={'container ' + state.theme}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map((user) => {
          return <Card key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default Favs;
