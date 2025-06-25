import './navbar.scss'
import {FaEllipsisH} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {

  const [isExpanded, setisExpanded] = useState(false);

  return(
    <>
    <h5 style={{position: "absolute", zIndex: 1000, color: "cyan" }}>@74% completion</h5>
    <FaEllipsisH className= "toggle-sidebar" onClick={()=> setisExpanded(!isExpanded)}/>
      <nav className={isExpanded ? "nav-bar expanded" : "nav-bar"}>
        <ul className="nav-list">
          <li className="list-item">
            <a href="#projects" className="link">Projects</a>
          </li>
          <li className="list-item">
            <a href="#contact" className="link">Contact</a>
          </li>
          <li className="list-item">
            <a href="https://drive.google.com/file/d/1FMkdbY-Nrhuha_0hjX5QHpwpkC5HywVt/view?usp=drive_link" target='_blank'rel="noreferrer" className="link" id="cv">Download CV</a>
          </li>
        </ul>
      </nav>
      <div className={isExpanded ? "overlay expanded" : "overlay"}></div>
    </>
  )
}

export default Navbar
