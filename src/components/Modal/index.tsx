import "./styles.css";
import { Button } from "..";
import { ModalButtonsProps, ModalProps } from "./types";

const ModalButtons = ({ hide }: ModalButtonsProps) => {
  return (
    <div className="button-container">
      <Button onClick={hide} variant="primary">
        Cancel
      </Button>
      <Button variant="secondary">Save</Button>
    </div>
  );
};

const Modal = ({ children, show, hide, mode }: ModalProps) => {
  return (
    <div
      className="modal-container"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="modal">
        <div className="modal-header">
          {mode === "create" ? "Create note" : "Edit note"}
          <button onClick={hide}>&times;</button>
        </div>
        <div className="modal-body">{children}</div>

        <ModalButtons hide={hide} />
      </div>
    </div>
  );
};

export default Modal;
