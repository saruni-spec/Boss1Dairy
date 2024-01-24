interface inputProps {
  inputType?: string;
  placeholder: string;
  onChange?: (event: any) => void;
  defaultValue?: string;
  value?: string;
  name?: string;
}

const Input = ({
  inputType,
  placeholder,
  defaultValue,
  name,
  value,
}: inputProps) => {
  return (
    <input
      name={name}
      type={inputType}
      className="form-control"
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      aria-describedby="basic-addon1"
    ></input>
  );
};

export default Input;
