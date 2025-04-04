import { createContext, useState, useEffect, ReactNode } from "react";

interface AnimalContextType {
  animals: Animal[];
  setAnimals: React.Dispatch<React.SetStateAction<Animal[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export const AnimalContext = createContext<AnimalContextType>({
  animals: [],
  setAnimals: () => {},
  isLoading: true,
  setIsLoading: () => {},
  error: null,
  setError: () => {},
});

interface Props {
  children: ReactNode;
}

export interface Animal {
  _id: number;
  name: string;
  desc: string;
  imageUrl: string;
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const URI = `${import.meta.env.VITE_BACKEND_URI}/get/`;

    const fetchAndUpdateAnimals = () => {
      fetch(URI, {
        method: "GET",
      })
        .then((res) => {
          if (!res.ok) {
            if (res.status === 404) {
              throw new Error(`There are no animals in the database`);
            } else {
              throw new Error(`Error fetching data, status: ${res.status}`);
            }
          }
          return res.json();
        })
        .then((data) => {
          localStorage.setItem("animals", JSON.stringify(data));
          setAnimals(data);
        })
        .catch((err) => {
          setError(err.message || "unknown error");
        })
        .finally(() => setIsLoading(false));
    };
    fetchAndUpdateAnimals();
  }, []);

  return (
    <AnimalContext.Provider
      value={{ animals, setAnimals, isLoading, setIsLoading, error, setError }}
    >
      {children}
    </AnimalContext.Provider>
  );
};

export default AnimalContextProvider;