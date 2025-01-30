import "./ProjectCard.css"

  const ProjectCard = ({ imageSrc, title }) => {
      return (
        <div className="card">
          {/* <img src={imageSrc} alt={title} className="card-image" /> */}
          <video width="100%" height="fit-content" loop muted autoPlay src={imageSrc} className='video'></video>
          <div className="card-text">
            <h3>{title}</h3>
          </div>
        </div>
      );
    };

export default ProjectCard