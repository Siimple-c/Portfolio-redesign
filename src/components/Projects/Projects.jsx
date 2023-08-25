import './projects.scss';
import {VscGithubInverted} from 'react-icons/vsc';
import oohacad from '../../assets/images/projects/OOH Acadmey.jpg';
import ecomm from '../../assets/images/projects/ecommerce store.jpg';
import naim from '../../assets/images/projects/Naim Advisory.jpg';
import socialmedia from '../../assets/images/projects/project - social media.jpg';

function projects() {
  return (
    <>
      <div className= "projects-header">
        <h1>PROJECTS</h1>
          <a href="https://github.com/Siimple-c" target="_blank" rel="noreferrer"className="github-logo" > 
          <VscGithubInverted className="icon"/>
          </a>
      </div>

      <div className ="projects-container">
        <div className="project">
          <a href="https://oohacademyng.com/" target="_blank" rel="noreferrer" className="img-container"><img src={oohacad} className="project-img" alt="academy website" /></a>
          <p>Modern, user-friendly website for the OOH advertising sector, featuring courses, updates, and intuitive design for optimal user experience.</p>
        </div>
        <div className="project">
          <a href="https://naim-advisory.com/" target="_blank" rel="noreferrer" className="img-container"><img src={naim} className="project-img" alt="second citizenship site" /></a>
          <p>Info-focused site aiding immigration and second citizenship acquisition by providing accessible info and quick agency representative connections.</p>
        </div>
        <div className="project">
          <a href="https://thgram.netlify.app/" target="_blank" rel="noreferrer" className="img-container"><img src={socialmedia} className="project-img" alt="social media website" /></a>
          <p>Social app built with JavaScript, Sass, and design influences from major platforms. Search feature populates gallery via API on the explore page.</p>
        </div>
        <div className="project">
          <a href="https://mslyn-stores.netlify.app/" target="_blank" rel="noreferrer" className="img-container"><img src={ecomm} className="project-img" alt="ecommerce website" /></a>
          <p>React Context and CSS empower this e-commerce store, blending design and functionality for immersive shopping with dynamic content</p>
        </div>
        
      </div>

    </>
    )
}

export default projects