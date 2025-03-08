import { useState, useContext, useRef } from "react";
import { animalContext, Animal } from "../contexts/AnimalContextProvider";

interface ModalProps {
  animal: Animal;
  setShouldShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ animal, setShouldShowModal }) => {
  const { _id, name, desc } = animal;
  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const [editName, setEditName] = useState<string>(name);
  const [editDesc, setEditDesc] = useState<string>(desc);
  const { animals, setAnimals } = useContext(animalContext);

  const doEdit = () => {
    const animal = animals.find((animal) => animal._id == _id);
    const newAnimal = { ...animal, name: editName, desc: editDesc };
    const URI = `http://localhost:3000/admin/put/${_id.toString()}`;
    fetch(URI, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAnimal),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const animalsCopie = animals.map((animal) =>
          animal._id === _id ? data : animal
        );
        localStorage.setItem("animals", JSON.stringify(animalsCopie));
        setAnimals(animalsCopie);
      });
  };

  const close = () => {
    setShouldShowModal(false);
  };

  return (
    <div id="modal">
      <fieldset>
        <legend>Edit</legend>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="edit-name"
            ref={nameRef}
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">Desc</label>
          <input
            type="text"
            name="desc"
            id="edit-desc"
            ref={descRef}
            value={editDesc}
            onChange={(e) => setEditDesc(e.target.value)}
          />
        </div>
        <button onClick={doEdit}>Confirm Edit</button>
        <button onClick={close}>Close Edit</button>
      </fieldset>
    </div>
  );
};

export default Modal;
