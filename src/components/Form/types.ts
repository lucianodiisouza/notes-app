export type FormDataProps = {
  id?: number;
  title?: string;
  subtitle?: string;
  content?: string;
};

export type FormProps = {
  readonly: boolean;
  formData: FormDataProps | undefined;
  setFormData: React.Dispatch<React.SetStateAction<FormDataProps | undefined>>;
};
