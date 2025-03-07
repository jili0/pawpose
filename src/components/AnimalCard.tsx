import { Animal } from "../contexts/AnimalContextProvider";

const AnimalCard: React.FC<Animal> = ({ name, desc, hearts }: Animal) => (
  <div>
    <div>
      <img src="https://dummyimage.com/720x400" alt="blog" />
      <div>
        <h1>{name}</h1>
        <p>{desc}</p>
        <div>
          <a>
            Learn More
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span>
            ❤️ <span>{hearts}</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default AnimalCard;
