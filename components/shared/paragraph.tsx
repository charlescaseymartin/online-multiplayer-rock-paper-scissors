
type ParagraphType = {
  children: JSX.Element | JSX.Element[] | string | (JSX.Element | string)[];
  className?: string;
}

export default function Paragraph({ children, className = '' }: ParagraphType) {
  return (
    <p className={`md:text-lg text-heading-3 ${className}`}>
      {children}
    </p>
  )
}