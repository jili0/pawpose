import { useContext, useState, useEffect, use } from "react";
import { AnimalContext } from "../contexts/AnimalContextProvider.tsx";

const Pagination: React.FC = () => {
  const { setAnimals, setIsLoading, setError } = useContext(AnimalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const countTotalPages = () => {
    const URI = `${import.meta.env.VITE_BACKEND_URI}/count`;
    fetch(URI, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error(`There are no animals in the database`);
          } else {
            throw new Error(`Error fetching data, status: ${res.status}`);
          }
        }
        return res.json();
      })
      .then((data) => {
        setTotalPages(Math.floor(parseInt(data) / 10));
      })
      .catch((err) => {
        setError(err.message || "unknown error");
      });
  };

  useEffect(() => {
    countTotalPages();
  }, []);

  const choosePage = (page: number) => {
    const URI = `${import.meta.env.VITE_BACKEND_URI}/get?page=${page}`;
    fetch(URI, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error(`There are no animals in the database`);
          } else {
            throw new Error(`Error fetching data, status: ${res.status}`);
          }
        }
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("animals", JSON.stringify(data));
        setAnimals(data);
      })
      .catch((err) => {
        setError(err.message || "unknown error");
      })
      .finally(() => {
        setIsLoading(false);
        setCurrentPage(page);
      });
  };

  return (
    <div className="pagination">
      <button disabled={currentPage === 1}>&lt;</button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          disabled={currentPage === i + 1}
          onClick={() => choosePage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button disabled={currentPage === totalPages}>&gt;</button>
    </div>
  );
};

export default Pagination;
