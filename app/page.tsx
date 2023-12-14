'use client';

import { useState } from 'react';
import OptionsModal from '@/components/elements/optionsModal';
import PageLayout from '@/components/shared/pageLayout';
import Paragraph from '@/components/shared/paragraph';
import PlayBtn from '@/components/shared/playBtn';
import Title from '@/components/shared/title';


export default function Home() {
  const [openOptions, setOpenOptions] = useState(false);

  const closeOptions = () => setOpenOptions(false);

  const onPlayWithFriend = () => {
    setOpenOptions(true);
  }

  const onPlayWithStranger = () => {
    // get the first player waiting to play
    // create a lobby
    // connect both players to the lobby
  }

  return (
    <div className='relative'>
      <OptionsModal isOpen={openOptions} onClose={closeOptions} />
      <PageLayout>
        <div className='flex justify-center w-full'>
          <Title>
            Welcome to Online Multiplayer Rock Paper Scissors!
          </Title>
        </div>
        <Paragraph>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Facilis ipsum laudantium mollitia consequatur, impedit deleniti sapiente itaque optio,
          reiciendis magni repudiandae ad sint natus, obcaecati nesciunt quo nam laborum! Architecto?
        </Paragraph>
        <div className='flex flex-col justify-center mt-10 md:flex-row'>
          <PlayBtn
            text='Play With A Friend'
            clickHandler={onPlayWithFriend}
          />
          <PlayBtn
            text='Play With A Stranger'
            clickHandler={() => console.log('Create a new lobby and send players to the arena')}
          />
        </div>
      </PageLayout>
    </div>
  )
}