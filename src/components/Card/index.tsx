import "./styles.css";
import { CardProps } from "./types";

import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/garbage.svg";

const Card = ({
  title,
  subtitle,
  date,
  color,
  edit,
  deleteItem,
  view,
}: CardProps) => {
  return (
    <div className="card" style={{ backgroundColor: color }} onClick={view}>
      <div className="floating-container">
        <button
          onClick={(e) => {
            e.stopPropagation();
            edit && edit();
          }}
          title="Edit note"
        >
          <img src={editIcon} alt="Edit note" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteItem && deleteItem();
          }}
          title="Delete note"
        >
          <img src={deleteIcon} alt="Delete note" />
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
