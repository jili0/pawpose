import AddAnimalForm from "../components/AddAnimalForm.tsx";
import AnimalTable from "../components/AnimalTable.tsx";

const Admin: React.FC = () => {
  return (
    <>
      <AddAnimalForm />
      <AnimalTable />
    </>
  );
};

export default Admin;
