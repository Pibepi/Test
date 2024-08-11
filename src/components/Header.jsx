import React from 'react';
import './Header.scss';
import Masonry from 'react-masonry-css';
import logo from '../assets/images/logo.svg';
import Frame21 from '../assets/images/Frame 21.svg';
import Frame from '../assets/images/Frame 19.svg';
import Frame22 from '../assets/images/Property 1=Frame 22.svg';
import Frame23 from '../assets/images/Property 1=Frame 23.svg';
import Frame24 from '../assets/images/Property 1=Frame 24.svg';
import Frame25 from '../assets/images/Property 1=Frame 25.svg';

const breakpointColumnsObj = {
  default: 2,
  768: 1
};

const Header = () => (
  <header className="header container-fuid">
    <div className="header__content ">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
        <p>SkillHunter</p>
      </div>
      <input type="checkbox" id="burger-toggle" className="header__burger-toggle" />
      <label htmlFor="burger-toggle" className="header__burger">
        <span className="header__burger-icon"></span>
        <span className="header__burger-icon"></span>
        <span className="header__burger-icon"></span>
      </label>
      <nav className="header__nav">
        <div className="header__nav-left">
          <a href="#cases" className="header__link">CASES</a>
          <a href="#tools" className="header__link">TOOLS</a>
          <a href="#about" className="header__link">ABOUT THE AGENCY</a>
        </div>
        <div className="header__nav-right">
          <p>Request a callback and speak with an expert</p>
          <button className="header__button">Write to the Manager</button>
        </div>
      </nav>
    </div>

    <div className="header__hero">
      <div className="header__main-left">
        <h1>WE CREATE THE BEST TALENT ACCORDING TO GLOBAL STANDARDS</h1>
        <p>
          We successfully close the most challenging digital vacancies. We are trusted by companies with expert and non-standard projects because of our results.
        </p>

        <div className="header__clients">
          <div className="header__more-clients">
            <img className='frame' src={Frame} alt="Frame" />
            <img className='frame21 w-200' src={Frame21} alt="Frame21" />
          </div>
        </div>
      </div>

      <div className="header__main-right">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div className="emilia-card cardGR">
            <img src={Frame22} alt="Frame 22" />
          </div>
          <div className="card-new cardGR">
            <img src={Frame25} alt="Frame 25" />
          </div>
          <div className="mark-card cardGR">
            <img src={Frame23} alt="Frame 23" />
          </div>
          <div className="alice-card cardGR">
            <img src={Frame24} alt="Frame 24" />
          </div>
        </Masonry>
      </div>
    </div>
  </header>
);

export default Header;
