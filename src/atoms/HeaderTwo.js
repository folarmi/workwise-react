const HeaderTwo = ({ text, className }) => {
  return (
    <div className={` text-4xl ${className}`}>
      <p className="leading-normal">{text}</p>
    </div>
  );
};

export { HeaderTwo };
