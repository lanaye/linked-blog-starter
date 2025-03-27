
import { Advent_Pro } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';

interface Props {
  src: string,
  name: string,
  additionalText: string,
  url: string
  size?: string,
}
const MookManiaBold = localFont({ src: '../../public/fonts/Mookmania-Bold.otf' })
const adventProFont = Advent_Pro({ weight: "200", subsets: ["cyrillic"] });


function Npc({ src, name, additionalText, url }: Props) {

  return (
    <a href={url} className='npc'>
      <img src='/assets/corner-top.svg' className='corner-top' />
      <img src={src} alt="npcs" className='npc-avatar' />
      <div className='npc-text'>
        <div className={`text-2xl text-center uppercase ${MookManiaBold.className}`}>{name}</div>
        <div className={`text-base text-center ${adventProFont.className}`}>{additionalText}</div>
      </div>
    </a>
  );
}

export default Npc;
