import './navbar.scss'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <>
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="list-item"><Link to="/projects" className="link">Projects</Link></li>
          <li className="list-item"><Link to="/contact" className="link">Contact</Link></li>
          <li className="list-item"><a href="https://drive.google.com/file/d/18JiFm8V2LSvW_0HbVO6U5VvZdDse3n9a/view" target='_blank'rel="noreferrer" className="link" id="cv">Download CV</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar