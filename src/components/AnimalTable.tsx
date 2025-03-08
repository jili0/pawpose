import { useContext, useRef, useEffect, useState } from "react";
import { animalContext } from "../contexts/AnimalContextProvider";
import TableRow from "./TableRow";

const AnimalTable: React.FC = () => {
  const { animals, setAnimals } = useContext(animalContext);
  // const [html, setHtml] = useState("");

  // const tbodyRef = useRef<HTMLTableElement>(null);
  // const generateHTML = () => {
  //   setHtml("");
  //   animals &&
  //     animals.forEach((animal) => {
  //       const { _id, name, desc, reserved } = animal;

  //       setHtml(
  //         (prev) =>
  //           (prev += `
  //         <tr>
  //           <td>${name}</td>
  //           <td>${reserved}</td>
  //           <td>${desc}</td>
  //           <td data-id="${_id}">
  //             <button onClick="remove(this)">
  //               Remove
  //             </button>
  //             <button onClick="reserve(this)">
  //               Toggle Reserve
  //             </button>
  //             <button onClick="edit(this)">
  //               Edit
  //             </button>
  //           </td>
  //         </tr>
  //       `)
  //       );
  //     });
  // };

  // const renderHTML = () => {
  //   if (tbodyRef.current) {
  //     tbodyRef.current.innerHTML = html;
  //   }
  // };

  // useEffect(() => {
  //   generateHTML();
  // }, []);

  // renderHTML();

  return (
    <table border={1} width="800">
      <thead>
        <tr>
          <th>Name</th>
          <th>Reserved</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {animals?.map((animal) => (
          <TableRow key={animal._id.toString()} animal={animal} />
        ))}
      </tbody>
    </table>
  );
};

export default AnimalTable;
