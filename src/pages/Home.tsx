import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContextProvider.tsx";
import AnimalList from "../components/AnimalList.tsx";
import Loader from "../components/Loader.tsx";
import Error from "../components/Error.tsx";

const Home: React.FC = () => {
  const { isLoading, error } = useContext(AnimalContext);
  return <>{isLoading ? <Loader /> : error ? <Error error={error} /> : <AnimalList />}</>;
};

export default Home;
