import Navbar from '../Navbar/Navbar';
import './header.scss';
import Stack from '../Stack/Stack';
import ProfilePic from '../../assets/images/Portfolio-image.png'


function Header() {
  return (
    <>
    <Navbar/>
      <header className='header_container'>
        <div className="landingpage-left">
          <h2 className="intro"> Hello! the name's Chuka</h2>
          <h2 className="fullname"> Odunna Chuka </h2>
          <p className="about_me">
             I use my skills to bring ideas to life and create functional, <br/>intuitive and engaging experiences for users. I enjoy collaborating <br/>within a team to solve  problems. In addition I am also able to work <br/>independently  and take ownership of projects.
          </p>
          <Stack/>
        </div>
        <div className="landingpage-right">
          <img src={ProfilePic} alt="profile-pic" />
        </div>
        <p className="jd">Frontend - w<span className="webdev-junction">e</span>b</p>
      </header>
    </>
  )
}

export default Header