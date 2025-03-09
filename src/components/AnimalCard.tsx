import { Animal } from "../contexts/AnimalContextProvider";

const AnimalCard: React.FC<Animal> = ({ name, desc, hearts }: Animal) => (
  <div className="animal-card">
    <img src="https://dummyimage.com/720x400" alt="blog" />
    <div className="animal-card-info">
      <p className="animal-name">{name}</p>
      <p>{desc}</p>
    </div>
  </div>
);

export default AnimalCard;
