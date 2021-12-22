import './styles.css'
import { AddProps } from "./types";

const AddCard = ({ onClick }: AddProps) => {
  return (
    <button className="add-card-container" onClick={onClick}>
      <p>+</p>
    </button>
  );
};

export default AddCard;
