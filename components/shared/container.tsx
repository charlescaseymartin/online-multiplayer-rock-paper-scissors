
type ContainerType = {
  children: JSX.Element | JSX.Element[];
  className?: string;
}

export default function Container({ children, className }: ContainerType) {
  return (
    <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}>
      {children}
    </div>
  )
}