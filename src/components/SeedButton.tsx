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
        imageUrl:
          "https://images.unsplash.com/photo-1619276511528-f397bf25e13d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Nala",
        desc: "Eine abenteuerlustige Bengalkatze mit viel Energie.",
        hearts: 6,
        imageUrl:
          "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Simba",
        desc: "Ein mutiger junger Löwenkopfkaninchen.",
        hearts: 4,
        reserved: true,
        imageUrl:
          "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Felix",
        desc: "Ein cleverer Dackel mit einem verspielten Charakter.",
        hearts: 7,
        imageUrl:
          "https://images.unsplash.com/photo-1618265341355-d0e2d1fdf26b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Kiki",
        desc: "Ein neugieriger Wellensittich, der gerne zwitschert.",
        hearts: 3,
        imageUrl:
          "https://images.unsplash.com/photo-1560813562-fd09315f5ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Balu",
        desc: "Ein entspannter, gemütlicher Kater mit flauschigem Fell.",
        hearts: 9,
        reserved: true,
        imageUrl:
          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Max",
        desc: "Ein verspielter Kater mit viel Energie.",
        hearts: "8",
        reserved: true,
        imageUrl:
          "https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Luna",
        desc: "Eine ruhige und liebevolle Hauskatze.",
        hearts: "3",
        imageUrl:
          "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Rocky",
        desc: "Ein treuer Schäferhund mit Wachinstinkt.",
        hearts: "10",
        imageUrl:
          "https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Milo",
        desc: "Ein neugieriger Hamster mit goldbraunem Fell.",
        hearts: "2",
        reserved: true,
        imageUrl:
          "https://images.unsplash.com/photo-1612267168669-679c961c5b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Daisy",
        desc: "Ein kleiner, verspielter Zwergkaninchen.",
        hearts: "6",
        imageUrl:
          "https://images.unsplash.com/photo-1692042720547-8e854403e03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Charlie",
        desc: "Ein Papagei, der gerne spricht.",
        hearts: "7",
        reserved: true,
        imageUrl:
          "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Coco",
        desc: "Eine verspielte Meerschweinchen-Dame.",
        hearts: "4",
        imageUrl:
          "https://images.unsplash.com/photo-1535241749838-299277b6305f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Oscar",
        desc: "Ein ruhiger Goldfisch im Aquarium.",
        hearts: "1",
        imageUrl:
          "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
      },
      {
        name: "Buddy",
        desc: "Ein energiegeladener Border Collie.",
        hearts: "9",
        reserved: true,
        imageUrl:
          "https://images.unsplash.com/photo-1568393691080-d016376b767d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
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
