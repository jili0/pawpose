import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContextProvider.tsx";

const SeedButton = () => {
  const { setAnimals, setError, setIsLoading } = useContext(AnimalContext);
  const seedAnimals = () => {
    setIsLoading(true);
    const animals = [
      {
        name: "Bella",
        desc: "Eine freundliche Labrador-Hündin.",
        hearts: "5",
        reserved: false,
        deletedAt: null,
      },
      {
        name: "Max",
        desc: "Ein verspielter Kater mit viel Energie.",
        hearts: "8",
        reserved: true,
        deletedAt: null,
      },
      {
        name: "Luna",
        desc: "Eine ruhige und liebevolle Hauskatze.",
        hearts: "3",
        reserved: false,
        deletedAt: null,
      },
      {
        name: "Rocky",
        desc: "Ein treuer Schäferhund mit Wachinstinkt.",
        hearts: "10",
        reserved: false,
        deletedAt: null,
      },
      {
        name: "Milo",
        desc: "Ein neugieriger Hamster mit goldbraunem Fell.",
        hearts: "2",
        reserved: true,
        deletedAt: null,
      },
      {
        name: "Daisy",
        desc: "Ein kleiner, verspielter Zwergkaninchen.",
        hearts: "6",
        reserved: false,
        deletedAt: null,
      },
      {
        name: "Charlie",
        desc: "Ein Papagei, der gerne spricht.",
        hearts: "7",
        reserved: true,
        deletedAt: null,
      },
      {
        name: "Coco",
        desc: "Eine verspielte Meerschweinchen-Dame.",
        hearts: "4",
        reserved: false,
        deletedAt: null,
      },
      {
        name: "Oscar",
        desc: "Ein ruhiger Goldfisch im Aquarium.",
        hearts: "1",
        reserved: false,
        deletedAt: null,
      },
      {
        name: "Buddy",
        desc: "Ein energiegeladener Border Collie.",
        hearts: "9",
        reserved: true,
        deletedAt: null,
      },
    ];

    const URI = `${import.meta.env.VITE_BACKEND_URI}/post/many`;

    fetch(URI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(animals),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error, status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        alert("successfully added animals!");
        localStorage.setItem("animals", JSON.stringify(data));
        setAnimals(data);
      })
      .catch((err) => {
        setError(
         err.message || "unknown error"
        );
      })
      .finally(() => setIsLoading(false));
  };

  return <button onClick={seedAnimals}>Add Some Animals</button>;
};

export default SeedButton;
