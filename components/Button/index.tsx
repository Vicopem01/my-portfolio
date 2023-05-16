interface IButton {
  text: string;
  // classes: string;
  href: string;
}

const Button = ({ text, href }: IButton) => {
  return href ? (
    <a
      className={`text-green relative group/button mt-s4`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-dark-green h-full w-1/2 absolute top-1/2 -translate-y-1/2 rounded-md transition-all ease-in-out duration-700 group-hover/button:w-full p-s3 -z-10"></div>
      <span className="p-s2">{text}</span>
    </a>
  ) : (
    <p className={`text-green relative group/button mt-s4 `}>
      <div className="bg-dark-green h-full w-1/2 absolute top-1/2 -translate-y-1/2 rounded-md transition-all ease-in-out duration-700 group-hover/button:w-full p-s3 -z-10"></div>
      <span className="p-s2">{text}</span>
    </p>
  );
};

export default Button;
