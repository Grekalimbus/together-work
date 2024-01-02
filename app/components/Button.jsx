const Button = ({text, type}) => {
  return (
    <div>
      <button
        type={type}
        className="w-[134px] h-[51px] text-white bg-black ml-4"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;