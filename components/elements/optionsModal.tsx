import { useEffect, useState } from 'react';
import Container from '../shared/container';
import FormInput from '../shared/formInput';

type OptionsModalType = {
  isOpen: boolean;
  onClose: () => void;
}

const ROUNDSINPUTERRORMESSAGE = 'Please enter a number between 3 and 7';

export default function OptionsModal({ isOpen, onClose }: OptionsModalType) {
  const [rounds, setRounds] = useState('3');
  const [roundsInputError, setRoundsInputError] = useState('')
  const [inviteLink, setInviteLink] = useState('');

  const onRoundsAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = parseInt(event.currentTarget.value);
    console.log({ numberValue });
    if (!Number.isNaN(numberValue) && numberValue < 3 || numberValue > 7) {
      setRoundsInputError(ROUNDSINPUTERRORMESSAGE);
      setRounds('');
    } else {
      setRounds(numberValue.toString());
      setRoundsInputError('');
    }
  }

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('create lobby and invite link');
    if (!rounds) return setRoundsInputError(ROUNDSINPUTERRORMESSAGE)

    try {
      const response = await fetch('/invite-form', { method: 'post', body: JSON.stringify({ rounds }) });
      const message = await response.json();
      console.log(message);
    } catch (err) {
      console.error(err);
    }

    onClose();
  }

  useEffect(() => console.log({ rounds, roundsInputError }), [rounds, roundsInputError])

  return isOpen && (
    <div className='flex justify-center items-center absolute z-[60] w-full h-screen bg-black bg-opacity-70'>
      <Container>
        <div className='flex justify-center'>
          <div className='w-full md:w-5/12'>
            <div className='flex justify-end'>
              <button
                onClick={onClose}
                className='rounded-full px-2 py-0.5 mb-2 text-white font-semibold bg-red-600'
              >
                X
              </button>
            </div>
            <form onSubmit={onFormSubmit} className='flex justify-center w-full h-fit py-16 rounded bg-white'>
              <div className='flex flex-col items-center w-full'>
                <div className='flex flex-col justify-center mb-4 md:w-3/4'>
                  <label className='flex items-center mx-2'>Amount Rounds</label>
                  <FormInput
                    type='number'
                    name='rounds'
                    id='rounds-amount-input'
                    value={rounds}
                    placeholderText='Enter number between 3 and 7'
                    changeHandler={onRoundsAmountChange}
                  />
                  {roundsInputError && (
                    <span className='text-red-700'>{roundsInputError}</span>
                  )}
                </div>

                <div className='flex flex-col justify-center md:w-3/4'>
                  <FormInput
                    id='invite-link-input'
                    type='text'
                    name='generated-invite-link'
                    value={inviteLink}
                    readOnly={true}
                    placeholderText='Generate an invite link'
                  />
                  <button
                    type='submit'
                    className='rounded p-2 m-1 mt-2 text-white font-semibold bg-emerald-500'
                  >
                    Create Invite Link
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}