import { createContext, useState, useEffect, ReactNode } from "react";

interface AnimalContextType {
  animals: Animal[];
  setAnimals: React.Dispatch<React.SetStateAction<Animal[]>>;
}

export const AnimalContext = createContext<AnimalContextType>({
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
  updatedAt?: Date;
  createdAt?: Date;
}

const AnimalContextProvider: React.FC<Props> = ({ children }) => {
  const [animals, setAnimals] = useState<Animal[]>(() => {
    const storedAnimals = localStorage.getItem("animals");
    return storedAnimals ? JSON.parse(storedAnimals) : [];
  });

  useEffect(() => {
    const URI = `${import.meta.env.VITE_BACKEND_URI}/admin/get/`;

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
    <AnimalContext.Provider value={{ animals, setAnimals }}>
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalContextProvider;
