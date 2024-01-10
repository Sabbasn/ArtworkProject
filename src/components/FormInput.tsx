import { ChangeEvent } from "react";

interface Props {
  name: string;
  type: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput(props: Props) {
  const id: string = props.name.charAt(0).toLowerCase();
  const nameNoWhitespace = props.name.replace(" ", "");
  const name: string =
    nameNoWhitespace[0].toLowerCase() + nameNoWhitespace.slice(1);
  return (
    <div className="form-floating flex-nowrap mb-3">
      <input
        type={props.type}
        className="form-control"
        name={name}
        placeholder={name}
        id={`${id}-input`}
        onChange={props.onChange}
      />
      <label htmlFor={id}>{props.name}</label>
    </div>
  );
}
