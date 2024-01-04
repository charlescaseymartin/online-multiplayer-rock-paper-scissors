'use client';

import { useContext, useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppContext, ClientSocketLobbies } from '@/app/context';
import RockPaperScissors from '@/components/screens/combat';
import PageLayout from '@/components/shared/pageLayout';


export default function Area() {
  const socket = useContext(AppContext)?.socket;
  const selectLobby = useContext(AppContext)?.selectLobby;
  // const socket = useContext(AppContext)?.socket;
  const { push } = useRouter();

  useLayoutEffect(() => {
    (async () => {
      // selectLobby(ClientSocketLobbies.stranger)
      if (socket) {
        try {
          const response = await fetch('/friend-lobby/validate', {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ socketId: socket.id }),
          });
          const results = await response.json();
          // if (!results.isValidate) push('/');
        } catch (err: any) {
          console.error(err);
        }
      }
    })()
  }, [])

  return (
    <PageLayout>
      <RockPaperScissors />
    </PageLayout>
  )
}