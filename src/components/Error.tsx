interface ErrorProps {
  error: string;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return <p className="error">{error}</p>;
};

export default Error;
