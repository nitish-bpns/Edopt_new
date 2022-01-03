import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import NavbarStyles from '../styles/components/navbar.module.css';
import FooterStyles from '../styles/components/footer.module.css';

export default function Layout({ children }) {
    return (
        <div className="layout">
            <nav className={NavbarStyles.navbar}>
                <div>
                    <Link to="/" className={NavbarStyles.logo}> <img src={'/data/images/general/eDOPT.png'} alt="Logo" /></Link>
                    <input className={NavbarStyles.menuBtn} type="checkbox" id={NavbarStyles.menuBtn} />
                    <label className={NavbarStyles.menuIcon} htmlFor={NavbarStyles.menuBtn}>
                        <span className={NavbarStyles.navicon}></span>
                    </label>
                    <ul className={NavbarStyles.menu}>

                        <li>
                            <Link to="/fundraisers">Browse Fundraisers</Link>
                        </li>
                        <li>
                            <Link to="/start"> <span className={NavbarStyles.startf}>Start a Fundraiser</span></Link>
                        </li>

                    </ul>
                </div>

            </nav>



            <div className="main-container">
                {children}
            </div>



            <footer>
                <div className={FooterStyles.footerContainer}>


                    <div className={FooterStyles.footerCol}>
                        <center>
                            <div className={FooterStyles.columnOne}>
                                <img src={'/data/images/general/eDOPT.png'} alt="Logo" />
                                <div className={FooterStyles.address}>

                                    <div>


                                        <br />
                                        <div className={FooterStyles.iconsContainer}>
                                            <a href="https://www.facebook.com/edoptofficial/">
                                                <FaFacebook />
                                            </a>
                                            <a href="https://twitter.com/edoptofficial">
                                                <FaTwitter />
                                            </a>
                                            <a href="https://www.youtube.com/channel/UCWcyPj4DDQSDbba9D7T-kfA">
                                                <FaYoutube />
                                            </a>
                                            <a href="https://www.instagram.com/edoptofficial/">
                                                <FaInstagram />
                                            </a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </center>
                    </div>
                    <div className={FooterStyles.footerCol}>
                        <div className={FooterStyles.columnTwo}>
                            <a className={FooterStyles.quickLinkHeader} href="/">
                                Contact Us
                            </a>
                            <br />

                            <br />
                            <a className={FooterStyles.quickLinkOne} href="/">
                                Email: edoptofficial@gmail.com
                            </a>

                            <br />
                            <a className={FooterStyles.quickLinkOne} href="/">
                                Contact No :+91 7557023104

                            </a>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    );
}