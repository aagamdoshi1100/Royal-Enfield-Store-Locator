export interface FormDataTypes {
  email: string;
  message: string;
  name: string;
  phoneNumber: string;
  [key: string]: string;
}
export interface PreviewBoxPropsTypes {
  data: FormDataTypes;
  handleClose: () => void;
}
