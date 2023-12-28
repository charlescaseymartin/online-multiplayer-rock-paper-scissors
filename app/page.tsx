'use client';

import { useState, useContext, useEffect } from 'react';
import { AppContext, ClientSocketLobbies } from './context';
import PageLayout from '@/components/shared/pageLayout';
import Paragraph from '@/components/shared/paragraph';
import PlayBtn from '@/components/shared/playBtn';
import Title from '@/components/shared/title';


export default function Home() {
  // const [openOptions, setOpenOptions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState('');
  const socket = useContext(AppContext)?.socket;
  const lobby = useContext(AppContext)?.lobby;
  const selectLobby = useContext(AppContext)?.selectLobby;

  // const closeOptions = () => setOpenOptions(false);

  const onPlayWithFriend = async () => {
    if(selectLobby) selectLobby(ClientSocketLobbies.friend);
    if (socket) {
      console.log('create lobby and invite link');
      const options: RequestInit = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ socketId: socket.id }),
      }

      try {
        setIsLoading(true);
        const response = await fetch('/friend-lobby/create', options);
        const message = await response.json();
        console.log(message);
      } catch (err: any) {
        setLoadingError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
  }

  const onPlayWithStranger = () => {
    if(selectLobby) selectLobby(ClientSocketLobbies.stranger);
    console.log('Create a new lobby and send players to the arena');
    // get the first player waiting to play
    // create a lobby
    // connect both players to the lobby
  }

  useEffect(() => {
    if(socket && lobby) {
      if(lobby === ClientSocketLobbies.friend) socket.on('friend:connected', (data) => console.log(data));
      if(lobby === ClientSocketLobbies.stranger) socket.on('stranger:connected', (data) => console.log(data));
    }
  }, [socket])

  return (
    <div className='relative'>
      {/* <OptionsModal isOpen={openOptions} onClose={closeOptions} /> */}
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
            isLoading={isLoading}
            clickHandler={onPlayWithFriend}
          />
          <PlayBtn
            text='Play With A Stranger'
            clickHandler={onPlayWithStranger}
          />
        </div>
      </PageLayout>
    </div>
  )
}