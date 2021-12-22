import "./styles.css";

const Form = () => {
  return (
    <form>
      <div className="form-group">
        <p className="label">Title</p>
        <input type="text" className="input" placeholder="Title" required />
      </div>
      <div className="form-group">
        <p className="label">Subtitle</p>
        <input type="text" className="input" placeholder="Subtitle" required />
      </div>
      <div className="form-group">
        <p className="label">Title</p>
        <textarea
          placeholder="type here"
          className="textarea"
          required
        ></textarea>
      </div>
    </form>
  );
};

export default Form;
