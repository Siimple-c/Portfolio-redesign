import Navbar from '../Navbar/Navbar';
import './header.scss';
import Stack from '../Stack/Stack';
import ProfilePic from '../../assets/images/Portfolio-image.png'
import {FaEllipsisH} from 'react-icons/fa';


function Header() {
  return (
    <>
    <FaEllipsisH className= "toggle-sidebar"/>
    <Navbar/>
      <header className='header_container'>
        <div className="landingpage-left">
          <div className="name-intro"><h2 className="intro"> Hello! the name's Chuka,</h2>
          <h2 className="fullname"> Odunna Chuka. </h2></div>
          <p className="about_me">
             I use my skills to bring ideas to life and create functional, intuitive and engaging experiences for users. I enjoy collaborating within a team to solve  problems. In addition I am also able to work independently  and take ownership of projects.
          </p>
          <Stack/>
        </div>
        <div className="landingpage-right">
          <img src={ProfilePic} alt="profile-pic" />
        </div>
        <p className="jd">Frontend - w<span className="webdev-junction">e</span>b</p>
        <div className="overlay"></div>
      </header>
    </>
  )
}

export default Header