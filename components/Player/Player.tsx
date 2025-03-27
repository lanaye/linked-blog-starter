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


function Player({ src, name, additionalText, url }: Props) {

  return (
    <a href={url} className='player-wrapper'>
      <img src={src} alt="player" className='player' />
      <div className='player-text'>
        <div className={`text-base text-center ${MookManiaBold.className}`}>{name}</div>
        <div className={`text-base text-center ${adventProFont.className}`}>{additionalText}</div>
      </div>
    </a>
  );
}

export default Player;
