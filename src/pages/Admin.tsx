import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContextProvider.tsx";
import Loader from "../components/Loader.tsx";
import Error from "../components/Error.tsx";
import AddAnimalForm from "../components/AddAnimalForm.tsx";
import AnimalTable from "../components/AnimalTable.tsx";

const Admin: React.FC = () => {
  const { isLoading, error } = useContext(AnimalContext);
  return (
    <>
      <AddAnimalForm />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <AnimalTable />
      )}
    </>
  );
};

export default Admin;
