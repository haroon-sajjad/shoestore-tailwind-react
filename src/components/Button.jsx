const Button = ({
  label,
  btnUrl,
  linkTarget,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <a
      href={btnUrl}
      target={linkTarget}
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg 
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-orange-600 text-white border-orange-600"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5"
        />
      )}
    </a>
  );
};

export default Button;
