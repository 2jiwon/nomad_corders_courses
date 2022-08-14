interface InputProps {
  name: string;
  type: string;
  label: string;
  [key: string]: any;
}
export default function Input({ name, type, label, register }: InputProps) {
  return (
    <div>
      <input {...register} id={name} type={type} placeholder={label} />
    </div>
  );
}
