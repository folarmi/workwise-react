const HeaderTwo = ({ text, className }) => {
  return (
    <div className={` text-4xl ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export { HeaderTwo };
