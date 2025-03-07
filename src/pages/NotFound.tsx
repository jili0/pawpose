import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <>
      <h2>404</h2>
      <p>Sorry, the page is not found.</p>
      <Link to="/">Go back home</Link>
    </>
  );
};

export default NotFound;
