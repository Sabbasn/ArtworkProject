interface Props {
  name: string;
  type: string;
}

export default function FormInput(props: Props) {
  const id: string = props.name.charAt(0).toLowerCase();
  return (
    <div className="form-floating flex-nowrap mb-3">
      <input
        type={props.type}
        className="form-control"
        placeholder={props.name}
        id={`${id}-input`}
      />
      <label htmlFor={id}>{props.name}</label>
    </div>
  );
}
