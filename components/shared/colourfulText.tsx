

type ColourfulTextType = {
  text: string;
}

export default function ColourfulText({ text }: ColourfulTextType) {
  return (
    <span className='mx-4 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-primary via-30% to-green-600'>
      {text}
    </span>
  )
}