const HeaderTwo = ({ text, className }) => {
  return (
    <div className={` text-4xl ${className}`}>
      <p className="leading-snug">{text}</p>
    </div>
  );
};

export { HeaderTwo };
