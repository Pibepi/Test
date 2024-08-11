import React from 'react';
import './Footer.scss';
import client1 from '../assets/images9/client1.svg';
import client2 from '../assets/images9/client2.svg';
import client3 from '../assets/images9/client3.svg';
import client4 from '../assets/images9/client4.svg';
import client5 from '../assets/images9/client5.svg';
import client6 from '../assets/images9/client6.svg';
import client7 from '../assets/images9/client7.svg';
import client8 from '../assets/images9/client8.svg';
import client9 from '../assets/images9/client9.svg';
import client10 from '../assets/images9/client10.svg';
import client11 from '../assets/images9/client11.svg';
import client12 from '../assets/images9/client12.svg';
import client13 from '../assets/images9/client13.svg';
import client14 from '../assets/images9/client14.svg';
import client15 from '../assets/images9/client15.svg';
import client16 from '../assets/images9/client16.svg';
import client17 from '../assets/images9/client17.svg';
import client18 from '../assets/images9/client18.svg';
import client19 from '../assets/images9/client19.svg';
import client20 from '../assets/images9/client20.svg';
import logo from '../assets/images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="clients">
                <ul className="d-flex flex-wrap justify-content-center list-unstyled">
                    <li className="mx-3 my-2"><img src={client1} alt="Client 1" /></li>
                    <li className="mx-3 my-2"><img src={client2} alt="Client 2" /></li>
                    <li className="mx-3 my-2"><img src={client3} alt="Client 3" /></li>
                    <li className="mx-3 my-2"><img src={client4} alt="Client 4" /></li>
                    <li className="mx-3 my-2"><img src={client5} alt="Client 5" /></li>
                    <li className="mx-3 my-2"><img src={client6} alt="Client 6" /></li>
                    <li className="mx-3 my-2"><img src={client7} alt="Client 7" /></li>
                    <li className="mx-3 my-2"><img src={client8} alt="Client 8" /></li>
                    <li className="mx-3 my-2"><img src={client9} alt="Client 9" /></li>
                    <li className="mx-3 my-2"><img src={client10} alt="Client 10" /></li>
                    <li className="mx-3 my-2"><img src={client11} alt="Client 11" /></li>
                    <li className="mx-3 my-2"><img src={client12} alt="Client 12" /></li>
                    <li className="mx-3 my-2"><img src={client13} alt="Client 13" /></li>
                    <li className="mx-3 my-2"><img src={client14} alt="Client 14" /></li>
                    <li className="mx-3 my-2"><img src={client15} alt="Client 15" /></li>
                    <li className="mx-3 my-2"><img src={client16} alt="Client 16" /></li>
                    <li className="mx-3 my-2"><img src={client17} alt="Client 17" /></li>
                    <li className="mx-3 my-2"><img src={client18} alt="Client 18" /></li>
                    <li className="mx-3 my-2"><img src={client19} alt="Client 19" /></li>
                    <li className="mx-3 my-2"><img src={client20} alt="Client 20" /></li>
                </ul>
            </div>
            <div className="footer-content d-flex justify-content-between align-items-center">
                <div className="company-info d-flex flex-column">
                    <div className="company-info1 d-flex align-items-center">
                        <img src={logo} alt="SkillHunter" className="logo" />
                        <p className="company-name">SkillHunter</p>
                    </div>
                    <div className="company-info2 d-flex align-items-center mt-2">
                        <a href="#" className="copyright ml-3">© 2024, SkillHunter</a>
                        <a href="#privacy" className="privacy-policy ml-3">Privacy Policy</a>
                    </div>
                </div>
                <div className="cta d-flex align-items-center">
                    <p className="mb-0 mr-4">Request a callback and speak with an expert</p>
                    <button className="cta-button">WRITE TO THE MANAGER</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
