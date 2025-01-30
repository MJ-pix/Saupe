import React from 'react'
import "./Gallery.css"
import ProjectCard from '../ProjectCard/ProjectCard'
import {projectItems} from '../../Constants/constants'


const Gallery = () => {

  return (
    <div className="card-container">
      {projectItems.map((card, index) => (
        <ProjectCard
          key={index}
          imageSrc={card.imageSrc}
          title={card.title}
        />
      ))}
    </div>
  );
};


export default Gallery
