import React from 'react';
import localFont from 'next/font/local';
import PostType from '../../interfaces/post';
import Npc from '../Npc/Npc';
const MookManiaBold = localFont({ src: '../../public/fonts/Mookmania-Bold.otf' })

type Props = {
  post: PostType
}

function Sessions({
  post
}: Props) {

  //name,url,src,text;(without at the end)
  const sessions = post.content.replace('<p>', '').replace('</p>', '').split(';');
  sessions.pop();
  const sessionsCards = () => sessions.map((session) => {
    const data = session.split(',');
    return <Npc
      src={data[3]}
      key={data[0]}
      name={data[0]}
      additionalText={data[1]}
      url={data[2]}
    />
  });

  return (
    <div className={'sessions-page'}>
      <div className={`text-center text-5xl uppercase ${MookManiaBold.className}`}>Сесії</div>
      <div className='flex flex-wrap gap-x-5 gap-y-9'>
        {sessionsCards()}
      </div>
    </div >
  );
}

export default Sessions;
