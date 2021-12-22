export type ButtonProps = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | string;
  onClick?: () => void;
};
