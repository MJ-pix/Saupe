import { Link } from "react-router-dom";
import "./ProjectCard.css"

  const ProjectCard = ({ imageSrc, title, href }) => {
      return (
          //VIDEON KORKEUDET STAATTISEKSI  TAI JOTAI JA OBJECTFIT COVER YMSMS
          <div className="card"><Link style={{textDecoration: "none", color:"black"}} to={href}>
            {/* <img src={imageSrc} alt={title} className="card-image" /> */}
            <div className="video-wrapper">
            <video width="100%" height="fit-content" loop muted autoPlay src={imageSrc} className='video'></video>
            </div>
            <div className="card-text">
              <h3>{title}</h3>
            </div>
            </Link>
          </div>
      );
    };

export default ProjectCard