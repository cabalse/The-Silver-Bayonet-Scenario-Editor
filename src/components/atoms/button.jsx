import BUTTON_TYPES from "../../constants/button-types";

const Button = ({ onClick, type, disabled = false, children }) => {
  let classNames =
    "mt-3 mr-2 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto";

  switch (type) {
    case BUTTON_TYPES.PRIMARY:
      classNames = `${classNames} bg-white text-gray-900 hover:bg-gray-100`;
      break;
    case BUTTON_TYPES.NEGATIVE:
      classNames = `${classNames} bg-red-500 text-white hover:bg-red-700`;
      break;
    default:
      classNames = `${classNames} bg-white text-gray-900 hover:bg-gray-100`;
      break;
  }

  if (disabled) {
    classNames = `${classNames} bg-slate-100 text-gray-300`;
  }

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
