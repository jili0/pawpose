import { useContext } from "react";
import AnimalCard from "./AnimalCard.tsx";
import { animalContext } from "../contexts/AnimalContextProvider.tsx";

const AnimalList = () => {
  const {animals} = useContext(animalContext);
  return (
    <div>
      {animals?.map((animal) => (
        <AnimalCard animal={animal} />
      ))}
    </div>
  );
};

export default AnimalList;
