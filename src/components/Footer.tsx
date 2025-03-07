const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      Copyright&copy;<span>{currentYear}</span> Jing Li
    </footer>
  );
};

export default Footer;
