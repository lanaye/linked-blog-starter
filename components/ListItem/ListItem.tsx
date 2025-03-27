import React from 'react';
import { Advent_Pro } from 'next/font/google'

interface Props {
  title: string,
  endAd: string,
  url: string,
}
const adventProFontBold = Advent_Pro({ weight: "600", subsets: ["cyrillic"] });
const adventProFont = Advent_Pro({ weight: "200", subsets: ["cyrillic"] });

function ListItem({ title, endAd, url}: Props) {

  return (
    <a href={url} className={`flex list--item justify-between px-3 py-2 ${adventProFontBold.className}`} >
      <div className='text-[16px]'>{title}</div>
      <div className={`text-[16px] ${adventProFont.className}`}>{endAd}</div>
    </a>
  );
}

export default ListItem;
