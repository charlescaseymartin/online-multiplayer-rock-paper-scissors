
type PlayBtnType = {
  text: string;
  isLoading?: boolean;
  clickHandler: () => void;
}

export default function PlayBtn({ text, isLoading, clickHandler }: PlayBtnType) {
  return (
    <button className='p-2 m-2 rounded text-white font-semibold bg-emerald-500' onClick={clickHandler}>
      {!isLoading ? text : 'Loading...'}
    </button>
  )
}