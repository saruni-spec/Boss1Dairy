interface labelProps {
  text: string;
}

function Label({ text }: labelProps) {
  return <label className="form-label">{text}</label>;
}

export default Label;
