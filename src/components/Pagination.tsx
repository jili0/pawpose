interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages }) => {
  return (
    <div className="pagination">
      <button disabled={currentPage === 1}>&lt;</button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} disabled={currentPage === i + 1}>
          {i + 1}
        </button>
      ))}
      <button disabled={currentPage === totalPages}>&gt;</button>
    </div>
  );
};

export default Pagination;
