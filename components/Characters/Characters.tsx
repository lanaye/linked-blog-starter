import React from 'react';
import localFont from 'next/font/local';
import PostType from '../../interfaces/post';
import Npc from '../Npc/Npc';
const MookManiaBold = localFont({ src: '../../public/fonts/Mookmania-Bold.otf' })

type Props = {
  post: PostType
}

function Characters({
  post
}: Props) {

  //name,url,src,text;(without at the end)
  const characters = post.content.replace('<p>', '').replace('</p>', '').split(';');
  characters.pop();
  const characterCards = () => characters.map((character) => {
    const data = character.split(',');
    return <Npc
      src={data[2]}
      key={data[0]}
      name={data[0]}
      additionalText={data[3]}
      url={data[1]}
    />
  });

  return (
    <div className={'characters-page'}>
      <div className={`text-center text-5xl uppercase ${MookManiaBold.className}`}>Персонажі</div>
      <div className='flex flex-wrap gap-x-5 gap-y-9'>
        {characterCards()}
      </div>
    </div >
  );
}

export default Characters;
