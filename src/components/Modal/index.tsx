import "./styles.css";
import { Button } from "..";
import { ModalButtonsProps, ModalProps } from "./types";

const ModalButtons = ({ hide, submitForm }: ModalButtonsProps) => {
  return (
    <div className="button-container">
      <Button onClick={hide} variant="primary">
        Cancel
      </Button>
      {submitForm && <Button variant="secondary">Save</Button>}
    </div>
  );
};

const Modal = ({ children, show, hide, mode, submitForm }: ModalProps) => {
  return (
    <div
      className="modal-container"
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="modal">
        <div className="modal-header">
          {mode === "create" ? "Create note" : "Edit note"}
          <button onClick={hide} title="close">
            &times;
          </button>
        </div>
        <div className="modal-body">{children}</div>

        <ModalButtons hide={hide} submitForm={submitForm} />
      </div>
    </div>
  );
};

export default Modal;
