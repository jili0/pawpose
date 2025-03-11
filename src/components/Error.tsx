import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContextProvider.tsx";
import SeedButton from "./SeedButton.tsx";

const Error: React.FC = () => {
  const { error } = useContext(AnimalContext);
  return (
    <>
      <p className="error">{error}</p>
      {error === "There are no animals in the database" && <SeedButton />}
    </>
  );
};

export default Error;
