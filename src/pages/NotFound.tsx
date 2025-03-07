import { Link } from "react-router-dom";
import Layout from "../components/Layout.tsx";

const NotFound: React.FC = () => {
  return (
    <Layout>
      <h2>404</h2>
      <p>Sorry, the page is not found.</p>
      <Link to="/">Go back home</Link>
    </Layout>
  );
};

export default NotFound;
