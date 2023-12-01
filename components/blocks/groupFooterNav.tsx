
type GroupFooterNavType = {
  children: JSX.Element | JSX.Element[];
}

export default function GroupFooterNav({ children }: GroupFooterNavType) {
  return (
    <div className="grid md:grid-cols-2 gap-8 h-max">
      {children}
    </div>
  )
}