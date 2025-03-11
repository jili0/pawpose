import { useContext } from "react";
import AnimalCard from "./AnimalCard.tsx";
import { AnimalContext } from "../contexts/AnimalContextProvider.tsx";
import Pagination from "./Pagination.tsx";

const AnimalList = () => {
  const { animals } = useContext(AnimalContext);
  return (
    <>
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

      <Pagination />
    </>
  );
};

export default AnimalList;
