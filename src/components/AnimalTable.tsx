import { useContext } from "react";
import { AnimalContext } from "../contexts/AnimalContextProvider";
import TableRow from "./TableRow";

const AnimalTable: React.FC = () => {
  const { animals } = useContext(AnimalContext);

  return (
    <div className="table">
      <table border={1}>
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
    </div>
  );
};

export default AnimalTable;
