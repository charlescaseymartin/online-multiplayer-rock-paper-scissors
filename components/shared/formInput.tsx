import { HTMLInputTypeAttribute } from "react"

type FormInputType = {
  id?: string;
  type?: HTMLInputTypeAttribute;
  name?: string;
  value: string | number;
  readOnly?: boolean;
  placeholderText?: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  id = '',
  type = '',
  name = '',
  value,
  readOnly = false,
  placeholderText = '',
  changeHandler = undefined,
}: FormInputType) {
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      readOnly={readOnly}
      onChange={changeHandler}
      placeholder={placeholderText}
      className='py-2 px-2 m-1 rounded bg-slate-200 focus:outline-none focus:ring-1 focus:ring-emerald-500'
    />
  )
}