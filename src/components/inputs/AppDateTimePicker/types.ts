export interface AppDateTimePickerProps {
  value: Date | null;
  onChange: (value: Date | null) => void;
  label: string;
  isDisabled?: boolean;
  error?: string;
}
