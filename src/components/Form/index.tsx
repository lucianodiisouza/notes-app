import "./styles.css";

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <p className="label">Title</p>
        <input type="text" className="input" placeholder="title" required />
      </div>
    </form>
  );
};

export default Form;
