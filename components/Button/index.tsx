interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  return (
    <div className={`relative mt-8 block w-[120px]`}>
      <div className="bg-[rgba(204,204,204,0.50)] h-full w-1/2 absolute top-1/2 -translate-y-1/2 rounded-md transition-all ease-in-out duration-700 group-hover/button:w-full p-6 -z-10"></div>
      <span className="p-4 font-semibold">{text}</span>
    </div>
  );
};

export default Button;
