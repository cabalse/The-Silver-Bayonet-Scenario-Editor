import { useEffect, useState } from "react";
import BUTTON_TYPES from "../../constants/button-types";

const baseClassNames =
  "mt-3 mr-2 inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 sm:mt-0 sm:w-auto";

const Button = ({ onClick, type, enabled = true, children }) => {
  const [classNames, setClassNames] = useState(baseClassNames);

  useEffect(() => {
    if (!enabled) {
      setClassNames(
        `${baseClassNames} bg-slate-200 text-gray-300 hover:bg-gray-200`
      );
      return;
    }

    switch (type) {
      case BUTTON_TYPES.PRIMARY:
        setClassNames(
          `${baseClassNames} bg-white text-gray-900 hover:bg-gray-100`
        );
        break;
      case BUTTON_TYPES.NEGATIVE:
        setClassNames(
          `${baseClassNames} bg-red-500 text-white hover:bg-red-700`
        );
        break;
      case BUTTON_TYPES.HIGHLIGHTED:
        setClassNames(
          `${baseClassNames} bg-blue-400 text-white hover:bg-blue-600`
        );
        break;
      default:
        setClassNames(
          `${baseClassNames} bg-white text-gray-900 hover:bg-gray-100`
        );
        break;
    }
  }, [type, enabled]);

  return (
    <button
      type="button"
      className={classNames}
      onClick={onClick}
      disabled={!enabled}
    >
      {children}
    </button>
  );
};

export default Button;
