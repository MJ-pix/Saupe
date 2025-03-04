import React from 'react'
import "./Gallery.css"
import ProjectCard from '../ProjectCard/ProjectCard'
import {projectItems} from '../../Constants/constants'


const Gallery = () => {

  return (
    <div className="card-container" id='gallery'>
      {projectItems.map((card, index, href) => (
        <ProjectCard
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
          href= {card.href}
        />
      ))}
    </div>
  );
};


export default Gallery
