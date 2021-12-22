import "./styles.css";

type ButtonProps = {
  children: React.ReactNode;
  variant: string;
};

const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`std-button ${variant}`}>
      {children}
    </button>
  );
};

export default Button;
