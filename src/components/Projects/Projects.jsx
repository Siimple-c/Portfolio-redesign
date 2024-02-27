import './projects.scss';
import {VscGithubInverted} from 'react-icons/vsc';
import oohacad from '../../assets/images/projects/OOH Acadmey.jpg';
import ecomm from '../../assets/images/projects/SOLFIN.jpg';
import naim from '../../assets/images/projects/Naim Advisory.jpg';
import socialmedia from '../../assets/images/projects/project - social media.jpg';

function Projects() {
  return (
    <section id= "projects">
      <div className= "projects-header">
        <h1>PROJECT PORTFOLIO</h1>
          <a href="https://github.com/Siimple-c" target="_blank" rel="noreferrer"className="github-logo" > 
          <VscGithubInverted className="icon"/>
          </a>
      </div>

      <div className ="projects-container">
        <div className="project">
          <a href="https://mslyn-stores.netlify.app/" target="_blank" rel="noreferrer" className="img-container"><img src={ecomm} className="project-img" alt="ecommerce website" /></a>
          <h3 className="project-title">SOLARIS FINANCE</h3>
          <p>Fintech app for finance managements & investments. Fully responsive, functional and user-friendly. </p>
          <ul className="project-stack">
            <li>EJS</li>
            <li>CSS</li>
            <li>Wordpress</li>
          </ul>
          <a href="https://solarisfinance.com/" className="project-link" target="_blank" rel="noreferrer" >GO</a>
        </div>
        <div className="project">
          <a href="https://oohacademyng.com/" target="_blank" rel="noreferrer" className="img-container"><img src={oohacad} className="project-img" alt="academy website" /></a>
          <h3 className="project-title">OOH ACADEMY</h3>
          <p>Modern, user-friendly website for the OOH advertising sector, featuring courses, updates, and intuitive design for optimal user experience.</p>
          <ul className="project-stack">
            <li>Javascript</li>
            <li>CSS</li>
            <li>Wordpress</li>
          </ul>
          <a href="https://oohacademyng.com/" className="project-link"  target="_blank" rel="noreferrer" >GO</a>
        </div>
        <div className="project">
          <a href="https://naim-advisory.com/" target="_blank" rel="noreferrer" className="img-container"><img src={naim} className="project-img" alt="second citizenship site" /></a>
          <h3 className="project-title">NAIM ADVISORY</h3>
          <p>Info-focused site aiding immigration and second citizenship acquisition by providing accessible info and quick agency representative connections.</p>
          <ul className="project-stack">
          <li>Javascript</li>
            <li>CSS</li>
            <li>Wordpress</li>
          </ul>
          <a href="https://naim-advisory.com/" className="project-link" target="_blank" rel="noreferrer" >GO</a>
        </div>
        <div className="project">
          <a href="https://thgram.netlify.app/" target="_blank" rel="noreferrer" className="img-container"><img src={socialmedia} className="project-img" alt="social media website" /></a>
          <h3 className="project-title">THGRAM</h3>
          <p>Social app built with JavaScript, Sass, and design influences from major platforms. Search feature populates gallery via API on the explore page.</p>
          <ul className="project-stack">
            <li>Javascript</li>
            <li>SCSS</li>
          </ul>
          <a href="https://thgram.netlify.app/" className="project-link" target="_blank" rel="noreferrer" >GO</a>
        </div>
        
      </div>

    </section>
    )
}

export default Projects