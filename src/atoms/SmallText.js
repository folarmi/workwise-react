const SmallText = ({ text, className }) => {
  return (
    <div className={`font-normal text-sm text-lightBlack ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export { SmallText };
