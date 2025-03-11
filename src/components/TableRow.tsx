import { useContext, useState, useRef } from "react";
import { AnimalContext } from "../contexts/AnimalContextProvider.tsx";
import { Animal } from "../contexts/AnimalContextProvider.tsx";

interface TableRowProps {
  animal: Animal;
}

const TableRow: React.FC<TableRowProps> = ({ animal }) => {
  const { name, reserved, desc, _id } = animal;
  const { animals, setAnimals, setIsLoading, setError } =
    useContext(AnimalContext);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const nameRef = useRef<HTMLTextAreaElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);
  const [editName, setEditName] = useState<string>(name);
  const [editDesc, setEditDesc] = useState<string>(desc);

  const remove = () => {
    setIsLoading(true);
    const URI = `${import.meta.env.VITE_BACKEND_URI}/delete/${_id.toString()}`;

    fetch(URI, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error, status: ${res.status}`);
        }
        return res.json();
      })
      .then(() => {
        const animalsCopie = animals.filter((animal) => animal._id !== _id);
        localStorage.setItem("animals", JSON.stringify(animalsCopie));
        setAnimals(animalsCopie);
        if (animalsCopie.length === 0) {
          setError("There are no animals in the database");
        }
      })
      .catch((err) => {
        setError(err.message || "unknown error");
      })
      .finally(() => setIsLoading(false));
  };

  const reserve = () => {
    setIsLoading(true);
    const URI = `${import.meta.env.VITE_BACKEND_URI}/patch/${_id.toString()}`;

    const animal = animals.find((animal) => animal._id === _id);
    if (!animal) {
      console.error("Animal not found");
      return;
    }
    const { reserved } = animal;
    fetch(URI, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ reserved: !reserved }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error, status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const animalsCopie = animals.map((animal) =>
          animal._id === _id ? data : animal
        );
        localStorage.setItem("animals", JSON.stringify(animalsCopie));
        setAnimals(animalsCopie);
      })
      .catch((err) => {
        setError(err.message || "unknown error");
      })
      .finally(() => setIsLoading(false));
  };

  const edit = () => {
    setIsEditing(true);
  };

  const confirm = () => {
    setIsLoading(true);
    const animal = animals.find((animal) => animal._id == _id);
    const newAnimal = { ...animal, name: editName, desc: editDesc };
    const URI = `${import.meta.env.VITE_BACKEND_URI}/put/${_id.toString()}`;
    fetch(URI, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAnimal),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error, status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const animalsCopie = animals.map((animal) =>
          animal._id === _id ? data : animal
        );
        localStorage.setItem("animals", JSON.stringify(animalsCopie));
        setAnimals(animalsCopie);
      })
      .catch((err) => {
        setError(err.message || "unknown error");
      })
      .finally(() => setIsLoading(false));
  };

  const discard = () => {
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <textarea
            rows={5}
            name="name"
            id="edit-name"
            ref={nameRef}
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        ) : (
          name
        )}
      </td>
      <td>{reserved.toString()}</td>
      <td>
        {isEditing ? (
          <textarea
            rows={5}
            name="desc"
            id="edit-desc"
            ref={descRef}
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
        ) : (
          desc
        )}
      </td>
      <td data-id={_id}>
        {isEditing ? (
          <>
            <button onClick={confirm}>Confirm</button>
            <button onClick={discard}>Discard</button>
          </>
        ) : (
          <>
            <button onClick={remove}>Remove</button>
            <button onClick={reserve}>Toggle Reserve</button>
            <button onClick={edit}>Edit</button>
          </>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
