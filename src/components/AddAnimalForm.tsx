import { useRef, useState, useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContextProvider.tsx";

const AddAnimalForm: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [name, setName] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const { animals, setAnimals } = useContext(AnimalContext);

  const add = (event: React.FormEvent) => {
    event.preventDefault();
    const nameInputValue = nameRef.current?.value;
    const descInputValue = descRef.current?.value;
    const URI = `${import.meta.env.VITE_BACKEND_URI}/post/single`;
    fetch(URI, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nameInputValue, desc: descInputValue }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        alert("successfully added animal!");
        const newAnimals = [...animals, data];
        localStorage.setItem("animals", JSON.stringify(newAnimals));
        setAnimals(newAnimals);
      })
      .catch((err) => console.error(err));
  };
  return (
    <form id="new-animal" onSubmit={add}>
      <fieldset>
        <legend>Add new animal</legend>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={nameRef}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="desc">Desc</label>
          <textarea
            name="desc"
            id="desc"
            ref={descRef}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
            rows={4}
          />
        </div>
        <button>Add new animal</button>
      </fieldset>
    </form>
  );
};

export default AddAnimalForm;
