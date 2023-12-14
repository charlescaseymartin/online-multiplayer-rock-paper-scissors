import Container from "../shared/container";

type OptionsModalType = {
  isOpen: boolean;
  onClose: () => void;
}

export default function OptionsModal({ isOpen, onClose }: OptionsModalType) {

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('create lobby and invite link');
    onClose();
  }

  return isOpen && (
    <div className='flex justify-center items-center absolute z-[60] w-full h-screen bg-black bg-opacity-30'>
      <Container>
        <div className='flex justify-center'>
          <form onSubmit={onFormSubmit} className='w-full h-fit p-4 rounded bg-white md:w-1/2'>
            <div className='flex justify-end'>
              <button
                onClick={onClose}
                className='rounded-full px-2 py-0.5 text-white font-semibold bg-red-600'
              >
                X
              </button>
            </div>

            <div className='mb-8 mt-1'>
              <div>Options:</div>
              {/* Input Fields */}
            </div>

            <div className='flex justify-center'>
              <button
                type='submit'
                className='rounded p-2 text-white font-semibold bg-emerald-500'
              >
                Create Invite Link
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}