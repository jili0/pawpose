interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return <p className="error">Error: {error}</p>;
};

export default Error;
