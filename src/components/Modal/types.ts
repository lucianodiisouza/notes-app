export type ModalProps = {
  children: React.ReactNode;
  hide: () => void;
  show: boolean;
  mode: "create" | "delete" | "edit";
};

export type ModalButtonsProps = {
  hide: () => void;
};
