export type ModalProps = {
  children: React.ReactNode;
  hide: () => void;
  show: boolean;
  mode: "create" | "delete" | "edit" | "read";
  submitForm?: () => void;
};

export type ModalButtonsProps = {
  hide: () => void;
  submitForm?: () => void;
};
