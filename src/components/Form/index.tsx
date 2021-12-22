import MDEditor from "@uiw/react-md-editor";

import "./styles.css";
import { FormProps } from "./types";

const Form = ({ formData, setFormData }: FormProps) => {
  return (
    <form>
      <div className="form-group">
        <p className="label">Title</p>
        <input
          type="text"
          className="input"
          placeholder="Title"
          value={formData?.title || ""}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>
      <div className="form-group">
        <p className="label">Subtitle</p>
        <input
          type="text"
          className="input"
          placeholder="Subtitle"
          value={formData?.subtitle || ""}
          onChange={(e) =>
            setFormData({ ...formData, subtitle: e.target.value })
          }
          required
        />
      </div>
      <div className="form-group">
        <p className="label">Content</p>
        <MDEditor
          value={formData?.content || ""}
          onChange={(value) => setFormData({ ...formData, content: value })}
        />
      </div>
    </form>
  );
};

export default Form;
