import { createContext, useState, useEffect, ReactNode } from "react";

interface AnimalContextType {
  animals: Animal[];
  setAnimals: React.Dispatch<React.SetStateAction<Animal[]>>;
}

export const animalContext = createContext<AnimalContextType>({
  animals: [],
  setAnimals: () => {},
});

interface Props {
  children: ReactNode;
}

export interface Animal {
  _id: number;
  name: string;
  desc: string;
  hearts: number;
  reserved: boolean;
  deletedAt: null;
}

const AnimalContextProvider: React.FC<Props> = ({ children }) => {
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const URI = `http://localhost:3000/admin/get/`;

    const fetchAndUpdateAnimals = () => {
      fetch(URI, {
        method: "GET",
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          localStorage.setItem("animals", JSON.stringify(data));
          setAnimals(data);
        })
        .catch((err) => console.error("Error", err));
    };
    fetchAndUpdateAnimals();
  }, []);

  return (
    <animalContext.Provider value={{ animals, setAnimals }}>
      {children}
    </animalContext.Provider>
  );
};

export default AnimalContextProvider;
