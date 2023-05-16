interface IButton {
  text: string;
  href: string;
}

const Button = ({ text, href }: IButton) => {
  return href ? (
    <a
      className={`relative group/button mt-8 block w-[100px]`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-[rgba(204,204,204,0.48)] h-full w-1/2 absolute top-1/2 -translate-y-1/2 rounded-md transition-all ease-in-out duration-700 group-hover/button:w-full p-6 -z-10"></div>
      <span className="p-4 font-semibold">{text}</span>
    </a>
  ) : (
    <p className={`relative group/button mt-s4 `}>
      <div className="bg-dark-green h-full w-1/2 absolute top-1/2 -translate-y-1/2 rounded-md transition-all ease-in-out duration-700 group-hover/button:w-full p-3 -z-10"></div>
      <span className="p-2">{text}</span>
    </p>
  );
};

export default Button;
