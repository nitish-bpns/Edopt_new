import React, { useEffect, useState } from "react";
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styles from '../styles/home.module.css';

export default function Home() {


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const responsiveNews = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    document.title = 'eDOPT';
    return (
        <Layout className={Styles.main} id="homeTop" >
            <div className={Styles.footerContainer}>
                <div className={Styles.footerCol}>
                    <div className={Styles.columnOne}>

                        <p className={Styles.bea}
                            style={{
                                fontFamily: "Gill Sans MT",
                            }}>
                            Be a <br /><span className={Styles.phero} style={{
                                fontFamily: "Gill Sans MT",
                            }}> hero!</span></p>
                        <br />
                        <br />
                        <p className={Styles.para1}>
                            Empowering Life one at a time, Virtually edopt one meritorious students who lack means.
                        </p>
                        <br />
                        <br />
                        <Link to="/fundraisers" className={Styles.btn1}
                        >
                            edopt now!
                        </Link>
                    </div>
                </div>
                <div className={Styles.footerCol}>
                    <div className={Styles.columnTwo}>
                        <img src="./data/images/posters/img1.png" alt="img" />
                    </div>
                </div>
            </div>

            <div >

                <p className={Styles.para2} style={{ textAlign: "Left", fontSize: "30px", color: "black", marginLeft: "2%", marginTop: "4%" }}>Top  fundraisers</p>
                <div style={{ position: "relative" }}>
                    <center>
                        <Carousel responsive={responsive}>
                            <center>
                                <div className={Styles.cscard}>

                                    <Card className={Styles.stdCard} >
                                        <img src="./data/images/posters/diya.jpg" alt="student" />
                                        <p className={Styles.stdDetail1} >Diya Gosain 15yrs</p>
                                        <p className={Styles.stdDetail2} >Location: Sonipat<br /><br />
                                            COVID-19 hits are hard on her family. She wants to pursue engineering but due to this crisis, facing financial issues. Help her to achieve her dream.

                                        </p>
                                        <center>
                                            <Link to="/diya"
                                            >
                                                <button className={Styles.proBtn} >Profile</button>
                                            </Link>
                                        </center>
                                    </Card>

                                </div>
                            </center>
                            <div className={Styles.cscard}>
                                <center>
                                    <Card className={Styles.stdCard} >
                                        <img src="./data/images/posters/jatin.jpg" alt="student" />
                                        <p className={Styles.stdDetail1} >Jatin Arora 15yrs</p>
                                        <p className={Styles.stdDetail2} >Location: Karnal<br /><br />
                                            A single parent child who wants to serve the nation. Help him to study and pursue his dream to become a teacher to serve the nation.
                                        </p>
                                        <center>
                                            <Link to="/jatin"
                                            >
                                                <button className={Styles.proBtn} >Profile</button>
                                            </Link>
                                        </center>
                                    </Card>
                                </center>
                            </div>

                            <div className={Styles.cscard}>
                                <center>
                                    <Card className={Styles.stdCard} >
                                        <img src="./data/images/posters/priyanshu.png" alt="student" />
                                        <p className={Styles.stdDetail1} >Priyanshu Pandey 16yrs</p>
                                        <p className={Styles.stdDetail2} >Location: Delhi<br /><br />
                                            The Father of this child is a newspaper vendor and can't afford his educational finances. Help this child to fulfil his dream to become software developer.
                                        </p>
                                        <center>
                                            <Link to="/priyanshu"
                                            >
                                                <button className={Styles.proBtn} >Profile</button>
                                            </Link>
                                        </center>


                                    </Card>
                                </center>
                            </div>

                            <div className={Styles.cscard}>
                                <center>
                                    <Card className={Styles.stdCard} >
                                        <img src="./data/images/posters/divyanshu.png" alt="student" />
                                        <p className={Styles.stdDetail1} >Divyanshu Pandey 11yrs</p>
                                        <p className={Styles.stdDetail2} >Location: Delhi<br /><br />
                                            He wants to become an IPS officer but facing difficulties due to financial constraints. Help this child by sponsoring his education.
                                        </p>
                                        <center>
                                            <Link to="/divyanshu"
                                            >
                                                <button className={Styles.proBtn} >Profile</button>
                                            </Link>
                                        </center>


                                    </Card>
                                </center>
                            </div>

                            <div className={Styles.cscard}>
                                <center>
                                    <Card className={Styles.stdCard} >
                                        <img src="./data/images/posters/sakshi.jpg" alt="student" />
                                        <p className={Styles.stdDetail1} >Sakshi 6yrs</p>
                                        <p className={Styles.stdDetail2} >Location: Delhi<br /><br />
                                            The child of a labourer who had lost his employment during COVID-19 seeks help to pay off her school fees.Help this child to fulfil her dreams.
                                        </p>
                                        <center>
                                            <Link to="/sakshi"
                                            >
                                                <button className={Styles.proBtn} >Profile</button>
                                            </Link>
                                        </center>
                                    </Card>
                                </center>
                            </div>

                            <div className={Styles.cscard}>
                                <center>
                                    <Card className={Styles.stdCard} >
                                        <img src="./data/images/posters/anshu.jpg" alt="student" />
                                        <p className={Styles.stdDetail1} >Anshu 14yrs</p>
                                        <p className={Styles.stdDetail2} >Location: Sonipat<br /><br />
                                            Help this single parent-child whose father suffers from kidney damage, to complete her education and achieve her goal of becoming a doctor.
                                        </p>
                                        <center>
                                            <Link to="/anshu"
                                            >
                                                <button className={Styles.proBtn} >Profile</button>
                                            </Link>
                                        </center>
                                    </Card>
                                </center>
                            </div>

                            <div className={Styles.cscard}>
                                <center>
                                    <Card className={Styles.stdCard} >
                                        <img src="./data/images/posters/owiz.png" alt="student" />
                                        <p className={Styles.stdDetail1} >Owiz Ahmed 14yrs</p>
                                        <p className={Styles.stdDetail2} >Location: Banglore<br /><br />
                                            This child wants to fulfill his passed father's wish to be an IAS officer.  Help this child by sponsoring his education.

                                        </p>
                                        <center>
                                            <Link to="/owiz"
                                            >
                                                <button className={Styles.proBtn} >Profile</button>
                                            </Link>
                                        </center>
                                    </Card>
                                </center>
                            </div>

                            <div className={Styles.cscard}>
                                <center>
                                    <Card className={Styles.stdCard} >
                                        <img src="./data/images/posters/awas.png" alt="student" />
                                        <p className={Styles.stdDetail1} >Awas Pasha 10yrs</p>
                                        <p className={Styles.stdDetail2} >Location: Banglore<br /><br />
                                            Awas’s single mother is struggling so hard to make him a Doctor.  Help this child by sponsoring his education.

                                        </p>
                                        <center>
                                            <Link to="/awas"
                                            >
                                                <button className={Styles.proBtn} >Profile</button>
                                            </Link>
                                        </center>
                                    </Card>
                                </center>
                            </div>

                            <div className={Styles.cscard}>
                                <center>
                                    <Card className={Styles.stdCard} >
                                        <img src="./data/images/posters/syed.png" alt="student" />
                                        <p className={Styles.stdDetail1} >Syed Ameen 10yrs</p>
                                        <p className={Styles.stdDetail2} >Location: Banglore<br /><br />
                                            This family has no source of income to make him study. Syed, a talented child!  Help this child by sponsoring his education.

                                        </p>
                                        <center>
                                            <Link to="/syed"
                                            >
                                                <button className={Styles.proBtn} >Profile</button>
                                            </Link>
                                        </center>
                                    </Card>
                                </center>
                            </div>


                        </Carousel>

                    </center>
                </div>
                <Link to="/fundraisers">
                    <button className={Styles.moreBtn}>

                        See More

                    </button>
                </Link>
            </div >
            <br />

            <div style={{ textAlign: "Center", fontSize: "30px", color: "black" }}  >
                <b >How it works</b>
            </div>
            <br />
            <div className={Styles.iconBg}>
                <div className={Styles.rowIcon}>
                    <div className={Styles.columnIcon}>
                        <center>
                            <img style={{ height: "260px", marginTop: "-15%" }} src="./data/images/posters/merit.png" className={Styles.iconImg} alt="icon" />
                            {/* <p className={Styles.para3} >Humble Background</p> */}
                        </center>
                    </div>
                    <div className={Styles.columnIcon}>
                        <center>
                            <img src="./data/images/posters/story.png" className={Styles.iconImg} alt="icon" />
                            {/* <p className={Styles.para3} >Humble Background</p> */}
                        </center>
                    </div>
                    <div className={Styles.columnIcon}>
                        <center>
                            <img src="./data/images/posters/verify.png" className={Styles.iconImg} alt="icon" />
                            {/* <p className={Styles.para3} >Document Verification</p> */}
                        </center>
                    </div>
                    <div className={Styles.columnIcon}>
                        <center>
                            <img src="./data/images/posters/pay.png" className={Styles.iconImg} alt="icon" />
                            {/* <p className={Styles.para3} > Payment to Institution</p> */}
                        </center>
                    </div>
                </div>
                <div className={Styles.rowIcon}>
                    <div className={Styles.columnIcon}>
                        <center>
                            <img src="./data/images/posters/attendance.png" className={Styles.iconImg} alt="icon" />
                            {/* <p className={Styles.para3} >Student Record</p> */}
                        </center>

                    </div>
                    <div className={Styles.columnIcon}>
                        <center>
                            <img src="./data/images/posters/achieve.png" className={Styles.iconImg} alt="icon" />
                            {/* <p className={Styles.para3} > Achievement</p> */}
                        </center>
                    </div>


                    <div className={Styles.columnIcon}>
                        <center>
                            <img src="./data/images/posters/progress.png" className={Styles.iconImg} alt="icon" />
                            {/* <p className={Styles.para3} > Growth</p> */}
                        </center>
                    </div>
                    <div className={Styles.columnIcon}>
                        <center>
                            <img src="./data/images/posters/hero.png" className={Styles.iconImg} alt="icon" />
                            {/* <p className={Styles.para3} >You Become a Hero</p> */}
                        </center>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div>
                <center>
                    <b className={Styles.whatt} >What we do?</b>
                    <br />
                    <regular> <div className={Styles.para4}>eDOPT is an Indian online peer-to-peer funding platform, where any individual organ across the country can fund a meritorious underprivileged student and can see the impact that he/she has made by getting reports of student achievement monthly. </div></regular>

                    <br /><br />
                    <div className={Styles.iframewContainer}>
                        <iframe className={Styles.yt} src="https://www.youtube.com/embed/AL0-g5R9ARA?playlist=AL0-g5R9ARA&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </center>
            </div>

            {/* <div>
                <Carousel responsive={responsive}>

                    <div>
                        <Card className={Styles.donorCard} >



                        </Card>
                    </div>

                    <div>
                        <Card className={Styles.donorCard} >



                        </Card>
                    </div>

                    <div>
                        <Card className={Styles.donorCard} >



                        </Card>
                    </div>

                </Carousel>
            </div>
 */}


            <br />
            <br />
            <div style={{ textAlign: "Center", fontSize: "30px", color: "black" }}>
                <b className={Styles.newst} >In the NEWS!</b>
            </div>


            <div>
                <Carousel responsive={responsiveNews} className={Styles.news} >
                    <img src="./data/images/posters/news01.png" alt="news" />
                    <img src="./data/images/posters/news02.png" alt="news" />
                </Carousel>
            </div>


        </Layout >
    );
}