import "./styles.css";
type CardProps = {
  title: string;
  subtitle: string;
  date: string;
};

const Card = ({ title, subtitle, date }: CardProps) => {
  return (
    <div className="card">
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
