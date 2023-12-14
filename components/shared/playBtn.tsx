
type PlayBtnType = {
  text: string;
  clickHandler: () => void;
}

export default function PlayBtn({ text, clickHandler }: PlayBtnType) {
  return (
    <button className='p-2 m-2 rounded text-white font-semibold bg-emerald-500' onClick={clickHandler}>
      {text}
    </button>
  )
}