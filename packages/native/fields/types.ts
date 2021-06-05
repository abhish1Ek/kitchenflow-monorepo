export interface IFieldProps {
  onChangeValue: (value: string | any) => void;
  value: string | any;
  error?: string;
  name: string;
  onBlur?: () => void;
}
