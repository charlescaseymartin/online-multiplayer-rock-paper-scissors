
type TitleType = {
  children: string | JSX.Element | JSX.Element[];
}

export default function Title({ children }: TitleType) {
  return (
    <h1 className='text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl py-6'>
      {children}
    </h1>
  )
}