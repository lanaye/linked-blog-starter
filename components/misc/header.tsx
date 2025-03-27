import Link from 'next/link'
import { useEffect, useState } from 'react';

import localFont from 'next/font/local'
import { Advent_Pro } from 'next/font/google'
const myFont = localFont({ src: '../../public/fonts/violance-thriller.regular.ttf' })
const adventProFont = Advent_Pro({ weight: "700", subsets: ["cyrillic"] });
const Header = () => {
  const [top, setTop] = useState(true);
  const [opened, setOpened] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`header fixed max-w-[1440px] w-full z-30 transition duration-300 ease-in-out ${!top && 'header-top shadow-lg'}`}>
      <div className="flex gap-16 items-center justify-between h-16 md:h-20 px-5 flex md:hidden">
        <div className={`tham tham-e-squeeze tham-w-6 ${opened ? 'tham-active' : ''}`} onClick={() => setOpened(!opened)}>
          <div className="tham-box">
            <div className="tham-inner" />
          </div>
        </div>

        <h2 className="text-5xl pt-4">
          <Link href="/home" aria-label="Chosen" className={myFont.className}>
            CHOSEN
          </Link>
        </h2>
        <div className={`${!opened ? 'hidden' : 'toggle-menu'}`}>
          <div className={`tham tham-e-squeeze tham-w-8 ${opened ? 'tham-active' : ''}`} onClick={() => setOpened(!opened)}>
            <div className="tham-box">
              <div className="tham-inner tham-color" />
            </div>
          </div>
          <h2 className={`text-4xl z-[2] ${adventProFont.className}`}>
            <Link href="/home" aria-label="Chosen" >
              ГОЛОВНА
            </Link>
          </h2>
          <h2 className={`text-4xl z-[2] ${adventProFont.className}`}>
            <Link href="/geo" aria-label="Chosen" >
              ГЕОГРАФІЯ
            </Link>
          </h2>
          <h2 className={`text-4xl z-[2] ${adventProFont.className}`}>
            <Link href="/character" aria-label="Chosen" >
              ПЕРСОНАЖІ
            </Link>
          </h2>
          <h2 className={`text-4xl z-[2] ${adventProFont.className}`}>
            <Link href="/session" aria-label="Chosen" >
              СЕССІЇ
            </Link>
          </h2>
          <img src='/assets/to.png' className='toggle-tower' />
        </div>
        <div className='flex items-center gap-4'>
          <a target="_blank" href="https://t.me/lana_ye" className={`text-lg ${adventProFont.className}`}>
            ЗАПИСАТИСЬ НА ГРУ
          </a>
          <a target="_blank" href="https://t.me/lana_ye" ><img src="/assets/telegram.svg"></img></a>
        </div>
      </div>
      <div className="flex gap-16 items-center justify-between h-16 md:h-20 px-5 hidden md:flex">
        <h2 className="text-5xl pt-4">
          <Link href="/home" aria-label="Chosen" className={myFont.className}>
            CHOSEN
          </Link>
        </h2>
        <div className='flex grow items-center gap-12'>
          <h2 className={`text-lg ${adventProFont.className}`}>
            <Link href="/home" aria-label="Chosen" >
              ГОЛОВНА
            </Link>
          </h2>
          <h2 className={`text-lg ${adventProFont.className}`}>
            <Link href="/geo" aria-label="Chosen" >
              ГЕОГРАФІЯ
            </Link>
          </h2>
          <h2 className={`text-lg ${adventProFont.className}`}>
            <Link href="/character" aria-label="Chosen" >
              ПЕРСОНАЖІ
            </Link>
          </h2>
          <h2 className={`text-lg ${adventProFont.className}`}>
            <Link href="/session" aria-label="Chosen" >
              СЕССІЇ
            </Link>
          </h2>
        </div>
        <div className='flex items-center gap-4'>
          <a target="_blank" href="https://t.me/lana_ye" className={`text-lg ${adventProFont.className}`}>
            ЗАПИСАТИСЬ НА ГРУ
          </a>
          <a target="_blank" href="https://t.me/lana_ye"><img src="/assets/telegram.svg"></img></a>
        </div>
      </div>
    </header >
  )
}

export default Header
