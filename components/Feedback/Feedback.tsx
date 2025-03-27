
import React from 'react';

interface Props {
  number: number,
}

function Feedback({ number}: Props) {
  return (
    <div className='feedback'>
      <img src='/assets/corner-top.svg' className='corner-top' />
      <img src={`/assets/feedback${number}.png`} alt="npcs" className='feedback-avatar' />
    </div>
  );
}

export default Feedback;
