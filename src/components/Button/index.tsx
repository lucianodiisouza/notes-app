import "./styles.css";
import { ButtonProps } from "./types";

const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`std-button ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
