export type FormDataProps = {
  id?: number;
  title?: string;
  subtitle?: string;
  content?: string;
};

export type FormProps = {
  formData: FormDataProps | undefined;
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps | undefined>>;
};
