import { useContext } from "react";
import AnimalCard from "./AnimalCard.tsx";
import { animalContext } from "../contexts/AnimalContextProvider.tsx";

const AnimalList = () => {
  const { animals } = useContext(animalContext);
  return (
    <div className="animal-list">
      {animals?.map(({ _id, name, desc, hearts, reserved, deletedAt }) => (
        <AnimalCard
          key={_id}
          _id={_id}
          name={name}
          desc={desc}
          hearts={hearts}
          reserved={reserved}
          deletedAt={deletedAt}
        />
      ))}
    </div>
  );
};

export default AnimalList;
