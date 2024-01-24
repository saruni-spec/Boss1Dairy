interface buttonProps {
  buttonName: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}
const Button = ({ buttonName, onClick, type }: buttonProps) => {
  return (
    <button className="btn btn-primary" onClick={onClick} type={type}>
      {buttonName}
    </button>
  );
};

export default Button;
