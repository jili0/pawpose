import Layout from "../components/Layout.tsx";
import AddAnimalForm from "../components/AddAnimalForm.tsx";
import AnimalTable from "../components/AnimalTable.tsx";

const Admin: React.FC = () => {
  return (
    <Layout>
      <AddAnimalForm />
      <AnimalTable />
    </Layout>
  );
};

export default Admin;
