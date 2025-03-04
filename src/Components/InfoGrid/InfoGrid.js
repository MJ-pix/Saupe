import React from 'react'
import './InfoGrid.css'

const InfoGrid = () => {
  return (
    <div className='infogrid'>
    <div className='infoblock'>
        <div className='text-wrapper'>
        <p className='info-header'>Case</p>
        <p className='info-section'>Drag Bingo Night – 3 Posters</p>
        </div>
    </div>
    <div className='infoblock'>
    <div className='text-wrapper'>
    <p className='info-header'>Client</p>
    <p className='info-section'>Ervin Latimer / Harju8</p>
        </div>
    </div>
    <div className='infoblock'>
        <div className='text-wrapper'>
        <p className='info-header'>My Role</p>
        <p className='info-section'>Illustrator / Graphic Designer</p>
        </div>
    </div>
      <div className='project-info-text'>
        <div className='info-text-wrapper'>
        <b>Drag Bingo Night</b> was held three times in the Fall of 2024, and I was tasked with creating unique illustrated posters for each event.
        The goal was to capture the raunchy, comedic side of drag rather than focusing on its glamorous aspects.
        I used a mixed media approach, starting with traditional art mediums, which I then scanned and digitally edited to create the final designs.
        </div>
      </div>
    </div>
  )
}

export default InfoGrid
