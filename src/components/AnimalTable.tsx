const AnimalTable: React.FC = () => {
  return (
    <table border={1} width="800">
      <thead>
        <th>Name</th>
        <th>Reserved</th>
        <th>Description</th>
        <th>Actions</th>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default AnimalTable;
