import "./styles.css";
import { CardProps } from "./types";

const Card = ({
  title,
  subtitle,
  date,
  color,
  edit,
  deleteItem,
}: CardProps) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      <div className="floating-container">
        <button onClick={edit} title="Edit note">
          E
        </button>
        <button onClick={deleteItem} title="Delete note">
          D
        </button>
      </div>

      <div className="card-header">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div className="card-footer">
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Card;
