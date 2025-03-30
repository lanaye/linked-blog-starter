import React from 'react';
import { Advent_Pro } from 'next/font/google'
import PostType from '../../../interfaces/post';
import localFont from 'next/font/local';

type Props = {
  post: PostType
}

const MookManiaBold = localFont({ src: '../../../public/fonts/Mookmania-Bold.otf' })
const adventProFont = Advent_Pro({ weight: "200", subsets: ["cyrillic"] });

function GeoPageRegion({
  post
}: Props) {

  const isMoreThanTwo = (post.content.match(/<li>/g) || []).length > 3;
  return (
    <>
      <div className={'geo-page'}>
        <div className='frame01 flex flex-col justify-center gap-4 p-8'
        >
          <img src='/assets/corner.svg' className='corner' />
          <div className='flex justify-between'>
            <div/>
            <div className={`text-center text-5xl uppercase ${MookManiaBold.className}`}>{post.title}</div>
            <a href='/geo'>
              <div className='cross' />
            </a>
          </div>
          <div className={`text-center text-base self-center w-[50%] ${adventProFont.className}`}>{post.excerpt}</div>

          <div
            className={`city ${isMoreThanTwo ? 'justify-start' : 'justify-center '}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </>
  );
}

export default GeoPageRegion;
