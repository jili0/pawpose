import { Animal } from "../contexts/AnimalContextProvider";

const AnimalCard: React.FC<Animal> = ({ name, desc, imageUrl }: Animal) => (
  <div className="animal-card">
      <img 
        src={imageUrl || "https://dummyimage.com/720x400"} 
        alt={`Image of ${name}`}
        className="animal-image"
        onError={(e) => {
          // If image fails to load, replace with dummy image
          e.currentTarget.src = "https://dummyimage.com/720x400";
        }}
      />
    <div className="animal-card-info">
      <p className="animal-name">{name}</p>
      <p>{desc}</p>
    </div>
  </div>
);

export default AnimalCard;