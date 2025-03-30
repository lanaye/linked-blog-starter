import React from 'react';
import { Advent_Pro } from 'next/font/google'
import PostType from '../../../interfaces/post';
import localFont from 'next/font/local';

type Props = {
  post: PostType
}

const MookManiaBold = localFont({ src: '../../../public/fonts/Mookmania-Bold.otf' })
const adventProFont = Advent_Pro({ subsets: ["cyrillic"] });
const adventProFontBold = Advent_Pro({ weight: "700", subsets: ["cyrillic"] });

function GeoPageCity({
  post
}: Props) {

  const backLink = post.backLink?.split(',');
  return (
    <>
      <div className={'geo-city'}>
        <div className='frame01 flex flex justify-center p-[0]'
        >
          <img className="w-[40%] object-cover border-r-[1px] border-inherit" src={post.excerpt} />
          <div className='p-8 overflow-y-scroll scroll-custom flex flex-col gap-9 city-link'>
            <div className='flex flex-col gap-1'>
              <div className={`text-center text-5xl uppercase ${MookManiaBold.className}`}>{post.title}</div>
              <a className={`self-center text-center text-base ${adventProFontBold.className}`} href={backLink[1]}>{`(${backLink[0]})`}</a>
            </div>

            <div
              className={adventProFont.className}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default GeoPageCity;
