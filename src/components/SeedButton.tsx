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
      },
      {
        name: "Nala",
        desc: "Eine abenteuerlustige Bengalkatze mit viel Energie.",
        hearts: 6,
      },
      {
        name: "Simba",
        desc: "Ein mutiger junger Löwenkopfkaninchen.",
        hearts: 4,
        reserved: true,
      },
      {
        name: "Felix",
        desc: "Ein cleverer Dackel mit einem verspielten Charakter.",
        hearts: 7,
      },
      {
        name: "Kiki",
        desc: "Ein neugieriger Wellensittich, der gerne zwitschert.",
        hearts: 3,
      },
      {
        name: "Balu",
        desc: "Ein entspannter, gemütlicher Kater mit flauschigem Fell.",
        hearts: 9,
        reserved: true,
      },
      {
        name: "Max",
        desc: "Ein verspielter Kater mit viel Energie.",
        hearts: "8",
        reserved: true,
      },
      {
        name: "Luna",
        desc: "Eine ruhige und liebevolle Hauskatze.",
        hearts: "3",
      },
      {
        name: "Rocky",
        desc: "Ein treuer Schäferhund mit Wachinstinkt.",
        hearts: "10",
      },
      {
        name: "Milo",
        desc: "Ein neugieriger Hamster mit goldbraunem Fell.",
        hearts: "2",
        reserved: true,
      },
      {
        name: "Daisy",
        desc: "Ein kleiner, verspielter Zwergkaninchen.",
        hearts: "6",
      },
      {
        name: "Charlie",
        desc: "Ein Papagei, der gerne spricht.",
        hearts: "7",
        reserved: true,
      },
      {
        name: "Coco",
        desc: "Eine verspielte Meerschweinchen-Dame.",
        hearts: "4",
      },
      {
        name: "Oscar",
        desc: "Ein ruhiger Goldfisch im Aquarium.",
        hearts: "1",
      },
      {
        name: "Buddy",
        desc: "Ein energiegeladener Border Collie.",
        hearts: "9",
        reserved: true,
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
        setError(err.message || "unknown error");
      })
      .finally(() => setIsLoading(false));
  };

  return <button onClick={seedAnimals}>Add Some Animals</button>;
};

export default SeedButton;
