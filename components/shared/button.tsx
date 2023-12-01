
export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
}

type ButtonType = {
  children: JSX.Element | JSX.Element[];
  variant?: ButtonVariants;
  className?: string;
}

export default function Button({ children, variant = ButtonVariants.primary, className }: ButtonType) {
  const buttonVariant = variant === ButtonVariants.primary ? 'bg-primary border-transparent relative after:bg-[#172554] hover:border-[#172554]' : 'text-primary';
  const styleClasses = `px-6 py-3 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear
  after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-[#172554]
  ${buttonVariant} hover:after:opacity-100 hover:after:scale-[2.5] ${className}`;

  return (
    <button className={styleClasses}>
      {children}
    </button>
  )
}