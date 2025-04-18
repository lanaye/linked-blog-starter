import React, { useState } from 'react';
import localFont from 'next/font/local';
import { regions } from '../constants';
import { motion } from "motion/react"
const MookManiaBold = localFont({ src: '../../public/fonts/Mookmania-Bold.otf' })

function GeoPage() {
  const [choosenRegion, setChoosenRegion] = useState(-1);
  const regionsList = () => {
    return regions.map((region, index) =>
      <a
        href={region.url}
        className={`region py-4 ${!region.active ? 'not-ready' : ''}`}
        onMouseEnter={(e) => {
          setChoosenRegion(index);
          e.stopPropagation();
        }}
        onMouseLeave={() => {
          setChoosenRegion(-1)
        }}
      >

        <div className={`text-4xl uppercase ${MookManiaBold.className}`}>
          {region.name}
        </div>
      </a >)
  }

  const regionsImageList = () => {
    return regions.map((region, index) => {
      return <img className={`region-image ${index === choosenRegion ? '' : 'hidden'} ${!region.active ? 'not-ready' : ''}`} src={region.src} />
    })
  }
  return (
    <div className={'geo-page'}>
      <div className='frame01 flex justify-between p-[0]'>
        <img src='/assets/corner.svg' className='corner' />
        <div className='flex flex-col m-12 mr-0 overflow-y-scroll scroll-custom w-full max-h-[94%]'>
          {regionsList()}
        </div>
        <motion.div
          key={choosenRegion}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            default: { duration: 1 },
            type: "ease-in"
          }}
        >
          {regionsImageList()}
          {<img className={`region-image ${choosenRegion === -1 ? '' : 'hidden'}`} src={'/assets/map.png'} />}
        </motion.div>
      </div >
    </div >
  );
}

export default GeoPage;
