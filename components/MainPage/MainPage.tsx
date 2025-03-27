import React from 'react';
import { Advent_Pro } from 'next/font/google'
import localFont from 'next/font/local';
import ListItem from '../ListItem/ListItem';
import Player from '../Player/Player';
import { npcs, players, sessions } from '../constants';
import Npc from '../Npc/Npc';
import Feedback from '../Feedback/Feedback';

const adventProFont = Advent_Pro({ weight: "200", subsets: ["cyrillic"] });
const MookManiaBold = localFont({ src: '../../public/fonts/Mookmania-Bold.otf' })
const MookMania = localFont({ src: '../../public/fonts/Mookmania.otf' })
function MainPage() {
  const sessionList = () => {
    return sessions.map((session) =>
      <ListItem
        title={session.name}
        endAd={session.date}
        key={session.name}
        url={session.url}
      />).reverse()
  }

  const playersList = () => {
    return players.map((player) =>
      <Player
        src={player.src}
        key={player.name}
        name={player.name}
        additionalText={player.additionalText}
        url={player.url}
      />)
  }

  const npcsList = () => {
    return npcs.map((npc) =>
      <Npc
        src={npc.src}
        key={npc.name}
        name={npc.name}
        additionalText={npc.additionalText}
        url={npc.url}
      />)
  }

  const feedbacksList = () => {
    return Array.from(new Array(5)).map((_, index) => <Feedback number={index + 1} />)
  }

  const photosList = () => {
    return Array.from(new Array(5)).map((_, index) => <img src={`/assets/photo${index + 1}.png`} />)
  }

  return (
    <>
      <div className={'main-page01'}>
        <div className='frame01 flex flex-col items-end'>
          <img src='/assets/corner.svg' className='corner' />
          <img src='/assets/corner.svg' className='corner' />

          <div className={`flex gap-1 items-baseline mt-[-40px] lg:mt-[-68px] lg:mr-[-62px]`}>
            <div className={`text-5xl md:text-[64px] ${MookManiaBold.className}`}>DUNGEONS</div>
            <div className={`text-8xl md:text-9xl ${MookMania.className}`}>&</div>
          </div>
          <div className={`text-5xl md:text-[64px] mt-[-20px] ${MookManiaBold.className}`}>DRAGONS</div>
          <div className={`${adventProFont.className} text-lg text-end lg:mt-[24px]`}>У темряві підземель і серед вогню драконів народжуються легенди — кинь кубик і стань частиною історії</div>
        </div>
      </div>
      <div className='main-page02'>
        <img src='/assets/book.png' />
        <div className='flex flex-col gap-8 w-[51%]'>
          <div className={`text-5xl ${MookManiaBold.className} uppercase`}>обрані невідомим</div>
          <div>
            <div className={`text-lg ${adventProFont.className}`}>Одного дня у вашій свідомості промайнуло <span className='font-bold'>дивне послання</span>, яке супроводжувалось різким головним болем, що руки автоматично почати тримати голову, щоб вона не розлетілась на друзки. І як тільки тіло почало звикати до цього болю мозок переключився на нове джерело - тепле, ледь обпікаюче, відчуття на долоні. <span className='font-bold'>Загадкова мітка</span> якої же вчора не було - тепер красується у вас на долоні.</div>
            <br />
            <div className={`text-lg ${adventProFont.className}`}> Що це все означає? <span className='font-bold'>Чому саме ви?</span> І чому та клята мітка не стирається? За вільним столом на вас чекають інші з такими ж мітками. </div>
          </div>
        </div>
      </div>
      <div className={'main-page03'}>
        <div className='flex gap-5 justify-center md:h-[340px] lg:h-[220px] flex-wrap md:flex-nowrap w-full'>
          <div className='frame02'>
            <img src='/assets/corner.svg' className='corner' />
            <div className={`text-2xl text-center pr-3 ${MookManiaBold.className}`}>ІСТОРІЯ</div>
            <div className='flex flex-col gap-3 mt-3 overflow-y-scroll lg:max-h-[132px] max-h-[242px] scroll-custom pr-3'>
              {sessionList()}
            </div>
          </div>
          <div className='frame03'>
            <img className="h-[233px]" src='/assets/calendar.svg' />
            <div className='flex flex-col justify-center gap-4'>
              {/* change here */}
              <div className='flex flex-col gap-1'>
                <div className={`text-2xl text-center ${MookManiaBold.className}`}>19.03</div>
                <div className={`text-xs text-center ${MookManiaBold.className}`}>середа, 18:00</div>
              </div>
              <div className={`text-xs text-center ${MookManiaBold.className}`}>клуб настільних ігор Картотека, <br />
                вул. Головна 148</div>
              <a target="_blank" className='uppercase' href="https://t.me/lana_ye">
                <div className={`button py-5 px-[64px] text-base ${MookManiaBold.className}`}>забронювати місце</div>
              </a>
            </div>
          </div>
          <div className='frame04'>
            <img src='/assets/corner.svg' className='corner' />
            <div className='flex flex-col gap-1'>
              <div className={`text-2xl text-center uppercase ${MookManiaBold.className}`}>гра розрахована</div>
              <div className={`text-base text-center uppercase ${MookManiaBold.className}`}>на 3-5 гравців</div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className={`text-2xl text-center uppercase ${MookManiaBold.className}`}>тривалістю</div>
              <div className={`text-base text-center uppercase ${MookManiaBold.className}`}>до 4 годин</div>
            </div>
          </div>
        </div>
        <div className='flex gap-5 justify-center md:h-[340px] lg:h-[388px] flex-wrap md:flex-nowrap w-full'>
          <div className='frame05'>
            <img src='/assets/corner-top.svg' className='corner-top' />
            <div className={`text-2xl text-center uppercase ${MookManiaBold.className}`}>персонажі гравців</div>
            <div className='flex flex-col gap-3 mt-3 overflow-y-scroll lg:max-h-[324px] max-h-[324px] scroll-custom pr-3 w-full'>
              {playersList()}
            </div>
          </div>
          <div className='frame06'>
            <img src='/assets/corner-top.svg' className='corner-top' />
            <div className='flex flex-col gap-4'>
              <div className={`text-2xl text-center uppercase ${MookManiaBold.className}`}>свій світ</div>
              <div className={`text-center ${adventProFont.className}`}>
                У цьому світі міжусобні війни залишилися в далекому минулому. Понад 100 років тому всі народи підписали Пакт Миру, що поклав край ворожнечі між фракціями. Однак це не означає, що світ позбавлений злочинців, таємних змов чи темних сил.
              </div>
              <div className={`text-center ${adventProFont.className}`}>
                Світ створюється разом із гравцями. Кожен може вільно додавати деталі про міста, регіони чи культури, втілюючи свої ідеї без обмежень.
                <br />
                <br />
                <br />
                🤎
              </div>
            </div>
          </div>
          <div className='frame07'>
            <img src='/assets/corner-top-big.svg' className='corner-top' />
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <div className={`text-2xl text-center uppercase ${MookManiaBold.className}`}>ОСОБЛИВОСТІ КАМПАНІЇ</div>
                <div className={`text-base text-center ${adventProFont.className}`}>Доля підготувала низку випробувань, де кожен крок важливий.</div>
              </div>
              <div className='flex flex-col gap-8 mt-7 ml-[-73px]'>
                <div className='flex gap-4'>
                  <img src='/assets/bullet.svg' className='bullet' />
                  <div className={`text-base uppercase ${MookManiaBold.className}`}>Сюжет, що тримає в напрузі </div>
                </div>
                <div className='flex gap-4'>
                  <img src='/assets/bullet.svg' className='bullet' />
                  <div className={`text-base uppercase ${MookManiaBold.className}`}>Фокус на історії та виборах</div>
                </div>
                <div className='flex gap-4'>
                  <img src='/assets/bullet.svg' className='bullet' />
                  <div className={`text-base uppercase ${MookManiaBold.className}`}>Без боїв в кожній пригоді,
                    але з випробуваннями</div>
                </div>
                <div className='flex gap-4'>
                  <img src='/assets/bullet.svg' className='bullet' />
                  <div className={`text-base uppercase ${MookManiaBold.className}`}>Гра про розум, логіку та командну роботу</div>
                </div>
                <div className='flex gap-4'><img src='/assets/bullet.svg' className='bullet' />
                  <div className={`text-base uppercase ${MookManiaBold.className}`}>Приєднуйтесь або
                    залишайте гру, коли забажаєте</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'main-page04'}>
        <div className='flex flex-col gap-5 items-center w-full'>
          <p className={`text-5xl text-center md:text-5xl uppercase ${MookManiaBold.className} z-[2]`}>географія світу</p>
          <img src='/assets/map1.svg' className='mix-blend-screen absolute mt-6 md:mt-14' />
          <img src='/assets/map2.svg' className='mix-blend-darken relative -top-1 md:-top-3' />
        </div>
      </div>
      <div className={'main-page05'}>
        <p className={`text-5xl text-center md:text-5xl uppercase ${MookManiaBold.className}`}>персонажі</p>
        <div className='flex h-[498px] gap-5 overflow-x-scroll scroll-custom mx-5 mt-[45px] py-[10px]'>
          {npcsList()}
        </div>
      </div>
      <div className={'main-page06'}>
        <p className={`text-5xl text-center md:text-5xl uppercase ${MookManiaBold.className}`}>майстриня підземель</p>
        <div className='flex gap-10 items-center justify-center mt-8'>
          <div className='frame08'>
            <img src='/assets/corner-top.svg' className='corner-top' />
            <img src='/assets/dm.png' className='dm' />
          </div>
          {/* todo */}
          <div className={`text-lg w-[40%] ${adventProFont.className}`}>Я люблю створювати захопливі історії, де гравці можуть впливати на світ, приймати складні рішення й розкривати таємниці. Для мене важливі як випробування, так і атмосферні моменти, що роблять пригоди особливими. Обожнюю несподівані повороти, цікавих персонажів і моменти, коли гравці самі дивуються тому, що відбувається.
            <br />
            <br />
            У моїх іграх є місце для гумору, драми й справжніх інтриг — головне, щоб кожен відчував, що його вибір має значення. </div>
        </div>
      </div>
      <div className={'main-page07'}>
        <div className='flex gap-5 overflow-x-scroll scroll-custom mx-5 pb-[10px]'>
          {feedbacksList()}
        </div>
      </div>
      <div className={'main-page08'}>
        <div className='flex gap-2 overflow-x-scroll scroll-custom mx-5 pt-[90px] pb-[10px]'>
          {photosList()}
        </div>
      </div>
      <div className={'main-page09'}>
        <div className='flex flex-col gap-3'>
          <img src='/assets/divider.svg' className='mix-blend-color-dodge' />
          <p className={`text-5xl text-center md:text-6xl uppercase ${MookManiaBold.className}`}>записатись на гру</p>
        </div>
        <div className={`text-center w-[618px] text-lg ${adventProFont.className}`}>Хочеш стати героєм власної історії, розгадувати давні загадки й приймати рішення, що змінюють світ? У цій грі тебе чекає <span className='font-bold'>унікальний світ, захопливий сюжет</span> і персонажі з власними секретами...
          <br />
          <br />
          <span className='font-bold'>Приєднуйся</span>, якщо любиш цікаві історії, командну гру та можливість впливати на події!
        </div>
        <a target="_blank" className='uppercase' href="https://t.me/lana_ye">
          <div className={`button py-3 px-[64px] text-4xl w-[505px] text-center ${MookManiaBold.className}`}>записатись</div>
        </a>
      </div>
    </>
  );
}

export default MainPage;
