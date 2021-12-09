import React, { useEffect, useState } from "react";
import Layout from '../components/Layout'
import { Link } from 'react-router-dom';
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";
import { Card, CardBody, CardFooter } from "react-simple-card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Styles from '../styles/home.module.css';
import { HashLink } from 'react-router-hash-link';
// import story from "./../certi/story.png";
// import verify from "./../certi/verify.png";
// import pay from "./../certi/pay.png";
// import merit from "./../certi/merit.png";
// import attendance from "./../certi/attendance.png";
// import achieve from "./../certi/achieve.png";
// import progress from "./../certi/progress.png";
// import hero from "./../certi/hero.png";
import how from "./../certi/howitw.png";

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
                            Raise a <br /><span className={Styles.phero} style={{
                                fontFamily: "Gill Sans MT",
                            }}> hero!</span></p>
                        <br />
                        <br />
                        <p className={Styles.para1}>
                            Empower one life at a time. Virtually edopt one meritorious students who lack means.
                        </p>
                        <br />
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
                        <img src="./data/images/posters/ss1.png" alt="img" />
                    </div>
                </div>
            </div>
            <div className={Styles.ss2}>
                <img src="./data/images/posters/ss2.png" alt="img" />
                <center>
                    <HashLink to="/fundraisers#feed1" className={Styles.btn1}
                    >
                        eDOPT Now
                    </HashLink>
                </center>
            </div>
            <br />
            <br />
            <div >
                <div className={Styles.heading1} ><b>
                    Top Students</b></div>
                <br />
                <div style={{ position: "relative" }}>
                    <center>
                        <Carousel responsive={responsive}>


                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/awadh.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Awadh Khandelwal </p>
                                    <p className={Styles.stdDetail3} >11 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 98.8% (Class 6th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                                    <p className={Styles.stdDetail2}>

                                        <b>Amount: </b> Rs.13,000<br />

                                    </p>
                                    <center>
                                        <Link to="/awadh"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>

                            <div className={Styles.cscard}>

                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/anshu.jpg" alt="student" />
                                    <p className={Styles.stdDetail1} >Anshu</p>
                                    <p className={Styles.stdDetail3} >14 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 98% (Class 9th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Sonipat<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.20,000<br />

                                    </p>
                                    <center>
                                        <Link to="/anshu"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>
                            <div className={Styles.cscard}>

                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/owiz.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Owaiz Ahmed</p>
                                    <p className={Styles.stdDetail3} >14 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 98% (Class 9th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Bangalore<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.21,000<br />

                                    </p>
                                    <center>
                                        <Link to="/owiz"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>



                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/manoj.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Manoj Kumar Lodha</p>
                                    <p className={Styles.stdDetail3} >10 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 96% (Class 5th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.19,200<br />

                                    </p>
                                    <center>
                                        <Link to="/manoj"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>


                            {/* <div className={Styles.cscard}>

                                <Card className={Styles.stdCard} >
                                        <img src="./data/images/posters/jatin.jpg" alt="student" />
                                        <p className={Styles.stdDetail1} >Jatin Arora</p>
                                        <p className={Styles.stdDetail3} >15 yrs</p>
                                        <p className={Styles.stdDetail2} ><b> Result: 96% (Class 10th)</b><br /></p>
                                        <p className={Styles.stdDetail2} ><b>Location:</b> Karnal<br /></p>
                                        <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.20,000<br />
                                         
                                        </p>
                                        <center>
                                            <Link to="/jatin"
                                            >
                                                <button className={Styles.proBtn} >Profile</button>
                                            </Link>
                                        </center>
                                    </Card>
                            </div> */}



                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/chavi.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Chavi</p>
                                    <p className={Styles.stdDetail3} >11 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 95.7% (Class 6th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Sonipat<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.20,000<br />

                                    </p>
                                    <center>
                                        <Link to="/chavi"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>

                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/ranjith.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Ranjith AV</p>
                                    <p className={Styles.stdDetail3} >20 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 95.68% (1st year, College)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Bangalore<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.72,000<br />

                                    </p>
                                    <center>
                                        <Link to="/ranjith"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>



                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/ritesh.jpg" alt="student" />
                                    <p className={Styles.stdDetail1} >Ritesh Darda</p>
                                    <p className={Styles.stdDetail3} >12 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 93%(Class 6th) </b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.20,000<br />

                                    </p>
                                    <center>
                                        <Link to="/ritesh"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>

                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/kavita.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Kavita</p>
                                    <p className={Styles.stdDetail3} >11 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 92% (Class 5th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.20,000<br />

                                    </p>
                                    <center>
                                        <Link to="/kavita"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>


                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/yachi.jpg" alt="student" />
                                    <p className={Styles.stdDetail1} >Yachi Ashwani</p>
                                    <p className={Styles.stdDetail3} >9 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 89% (Class 2nd)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.20,000<br />

                                    </p>
                                    <center>
                                        <Link to="/yachi"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>


                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/meenu.jpg" alt="student" />
                                    <p className={Styles.stdDetail1} >Meenu</p>
                                    <p className={Styles.stdDetail3} >17 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 88.5% (Class 11th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Sonipat<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.24,000<br />

                                    </p>
                                    <center>
                                        <Link to="/meenu"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>


                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/naksh.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Naksh Shringi</p>
                                    <p className={Styles.stdDetail3} >11 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 88% (Class 6th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.20,000<br />

                                    </p>
                                    <center>
                                        <Link to="/naksh"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>

                            <div className={Styles.cscard}>

                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/priyanshu.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Priyanshu Pandey</p>
                                    <p className={Styles.stdDetail3} >16 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 85% (Class 10th ) </b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Delhi<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.40,000<br />

                                    </p>
                                    <center>
                                        <Link to="/priyanshu"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>


                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/bhavya.jpg" alt="student" />
                                    <p className={Styles.stdDetail1} >Bhavya Jain</p>
                                    <p className={Styles.stdDetail3} >11 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 84.5% (Class 6th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.40,000<br />

                                    </p>
                                    <center>
                                        <Link to="/bhavya"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>


                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/pranjal.jpg" alt="student" />
                                    <p className={Styles.stdDetail1} >Pranjal Janin</p>
                                    <p className={Styles.stdDetail3} >13 yrs</p>
                                    <p className={Styles.stdDetail2} ><b>Result: 83% (Class 8th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.40,000<br />

                                    </p>
                                    <center>
                                        <Link to="/pranjal"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>


                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/syed.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Syed Ameen</p>
                                    <p className={Styles.stdDetail3} >10 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 82% (Class 5th ) </b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Bangalore<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.16,000<br />

                                    </p>
                                    <center>
                                        <Link to="/syed">
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>

                            <div className={Styles.cscard}>
                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/chetanay.jpg" alt="student" />
                                    <p className={Styles.stdDetail1} >Chetanay</p>
                                    <p className={Styles.stdDetail3} >7 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> 80.25% (Class 3rd )</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Sonipat<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.14,400<br />

                                    </p>
                                    <center>
                                        <Link to="/chetanay"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>



                            <div className={Styles.cscard}>

                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/diya.jpg" alt="student" />
                                    <p className={Styles.stdDetail1} >Diya Gosain</p>
                                    <p className={Styles.stdDetail3} >15 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 77.6% (Class 9th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Sonipat<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.50,880<br />

                                    </p>
                                    <center>
                                        <Link to="/diya"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>

                            <div className={Styles.cscard}>

                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/divyanshu.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Divyanshu Pandey</p>
                                    <p className={Styles.stdDetail3} >11 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 77.4% (Class 4th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Delhi<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.40,000<br />

                                    </p>
                                    <center>
                                        <Link to="/divyanshu">
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>

                            <div className={Styles.cscard}>

                                <Card className={Styles.stdCard} >
                                    <img src="./data/images/posters/awas.png" alt="student" />
                                    <p className={Styles.stdDetail1} >Awaiz Pasha</p>
                                    <p className={Styles.stdDetail3} >10 yrs</p>
                                    <p className={Styles.stdDetail2} ><b> Result: 74% (Class 5th)</b><br /></p>
                                    <p className={Styles.stdDetail2} ><b>Location:</b> Bangalore<br /></p>
                                    <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.16,000<br />

                                    </p>
                                    <center>
                                        <Link to="/awaiz"
                                        >
                                            <button className={Styles.proBtn} >Profile</button>
                                        </Link>
                                    </center>
                                </Card>
                            </div>
                            {/* 
                            <div className={Styles.cscard}>

<Card className={Styles.stdCard} >
               <img src="./data/images/posters/roopam.jpeg" alt="student" />
               <p className={Styles.stdDetail1} >Roopam Ghanta</p>
               <p className={Styles.stdDetail3} >11 yrs</p>
               <p className={Styles.stdDetail2} ><b> Result: 62%</b><br /></p>
               <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
               <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.16,000<br />
                  
               </p>
               <center>
                   <Link to="/roopam"
                   >
                       <button className={Styles.proBtn} >Profile</button>
                   </Link>
               </center>
           </Card>
   </div>


                            <div className={Styles.cscard}>    
                          <Card className={Styles.stdCard} >
                                 <img src="./data/images/posters/rohit.jpeg" alt="student" />
                                 <p className={Styles.stdDetail1} >Rohit Ghanta</p>
                                 <p className={Styles.stdDetail3} >14 yrs</p>
                                <p className={Styles.stdDetail2} ><b> Result: 59%</b><br /></p>
                                <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                                <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.16,000<br />
                                          
                                </p>
                            <center>
                                <Link to="/rohit">                                          
                                 <button className={Styles.proBtn} >Profile</button>
                                </Link>
                            </center>
                         </Card>
                            </div>

                            <div className={Styles.cscard}>    
                          <Card className={Styles.stdCard} >
                                 <img src="./data/images/posters/aradhay.jpeg" alt="student" />
                                 <p className={Styles.stdDetail1} >Aradhay Sharma</p>
                                 <p className={Styles.stdDetail3} >12 yrs</p>
                                <p className={Styles.stdDetail2} ><b> Result: 57.7%</b><br /></p>
                                <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                                <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.16,000<br />
                                          
                                </p>
                            <center>
                                <Link to="/aradhay">                                          
                                 <button className={Styles.proBtn} >Profile</button>
                                </Link>
                            </center>
                         </Card>
                            </div> */}





                        </Carousel>

                    </center>
                </div>
                <HashLink to="/fundraisers#feed1">
                    <button className={Styles.moreBtn}>

                        See More >

                    </button>
                </HashLink>
            </div >
            <br />
            <br />
            <br />

            <div className={Styles.heading1} >
                <b >How it works</b>
            </div>
            <br />
            <br />


            <div className={Styles.info}>

                <img src={how} alt="img" />

            </div>
            <br />


            {/* <div className={Styles.irow}>
                <div className={Styles.iicon}>
                    <center>
                        <img src={merit} className={Styles.iconImg1} alt="icon" />

                    </center>
                </div>
                <div className={Styles.iicon}>
                    <center>
                        <img src={story} className={Styles.iconImg} alt="icon" />

                    </center>
                </div>
                <div className={Styles.iicon}>
                    <center>
                        <img src={verify} className={Styles.iconImg} alt="icon" />

                    </center>
                </div>
                <div className={Styles.iicon}>
                    <center>
                        <img src={pay} className={Styles.iconImg} alt="icon" />

                    </center>
                </div>
                <div className={Styles.iicon}>
                    <center>
                        <img src={attendance} className={Styles.iconImg} alt="icon" />

                    </center>
                </div>
                <div className={Styles.iicon}>
                    <center>
                        <img src={achieve} className={Styles.iconImg} alt="icon" />

                    </center>
                </div>

                <div className={Styles.iicon}>
                    <center>
                        <img src={progress} className={Styles.iconImg} alt="icon" />

                    </center>
                </div>
                <div className={Styles.iicon}>
                    <center>
                        <img src={hero} className={Styles.iconImg} alt="icon" />

                    </center>
                </div>
            </div> */}
            <br />
            <br />
            <br />
            <div className={Styles.heading1} >
                <b>Students Onboarded</b>
            </div>

            <br />
            <div>
                <Carousel responsive={responsiveNews} className={Styles.onboard} >
                    <img src="./data/images/posters/onboard01.png" alt="onboard" />
                    <img src="./data/images/posters/onboard02.png" alt="onboard" />
                    <img src="./data/images/posters/onboard03.png" alt="onboard" />
                </Carousel>
            </div>
            <br />
            <br />
            <div>
                <center>
                    <div className={Styles.heading1} ><b>What we do?</b></div>
                    <br />
                    <br />

                    <regular> <div className={Styles.para4}>eDOPT is an Indian online peer-to-peer funding platform, where any individual organ across the country can fund a meritorious underprivileged student and can see the impact that he/she has made by getting reports of student achievement monthly. </div></regular>
                    <br /><br />
                    <div className={Styles.iframewContainer}>
                        <iframe className={Styles.yt} src="https://www.youtube.com/embed/AL0-g5R9ARA?playlist=AL0-g5R9ARA&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </center>
            </div>
            <br />
            <br />
            <div>
                <div className={Styles.heading1} ><b>
                    Our Super Mentors</b></div>
                {/* <center> <b className={Styles.donor} >Our Super Mentors</b> </center> */}
                <br />
                <regular> <div className={Styles.para4}>Donor can book a slot with super mentor for it's adopted children. </div></regular>


                <Carousel responsive={responsive}>

                    <div>
                        <a href="https://www.linkedin.com/in/kushtaneja/?originalSubdomain=in" className={Styles.menLink} target="blank" Styles={{ textDecoration: "none", cursor: "pointer" }}>
                            <Card className={Styles.donorBody}>

                                <CardBody className={Styles.donorCard} style={{ padding: "0px", border: "none" }} >
                                    <img src="./data/images/posters/khush.jpg" alt="img" />


                                </CardBody>

                                <CardFooter className={Styles.donorFooter} style={{ border: "none" }} >
                                    <center> Kush Taneja<br />Forbes 30, CEO Fampay

                                        {/* <Link to="/">
                                                <button className={Styles.proBtn} >Book a Slot</button>
                                            </Link> */}
                                    </center>
                                </CardFooter>

                            </Card>
                        </a>
                    </div>


                    <div>
                        <a href="https://www.linkedin.com/in/harshveer-jain-9285448b/?originalSubdomain=in" target="blank" className={Styles.menLink} Styles={{ textDecoration: "none", cursor: "pointer" }}>
                            <Card className={Styles.donorBody}>

                                <CardBody className={Styles.donorCard} style={{ padding: "0px", border: "none" }} >
                                    <img src="./data/images/posters/harsh.jpg" alt="img" />


                                </CardBody>

                                <CardFooter className={Styles.donorFooter} style={{ border: "none" }} >
                                    <center> Harshveer Jain<br />IIT Bombay, IIM C
                                        {/* <Link to="/">
                                                <button className={Styles.proBtn} >Book a Slot</button>
                                            </Link> */}
                                    </center>
                                </CardFooter>
                            </Card>
                        </a>
                    </div>


                    <div> <a href="https://www.linkedin.com/in/anantmehrotra/" target="blank" className={Styles.menLink} Styles={{ textDecoration: "none", cursor: "pointer" }}>
                        <Card className={Styles.donorBody}>

                            <CardBody className={Styles.donorCard} style={{ padding: "0px", border: "none" }} >
                                <img src="./data/images/posters/anant.jpg" alt="img" />


                            </CardBody>

                            <CardFooter className={Styles.donorFooter} style={{ border: "none" }} >
                                <center> Anant Mehrotra<br />Google, MIT(Executive Education)
                                    {/* <Link to="/">
                                                <button className={Styles.proBtn} >Book a Slot</button>
                                            </Link> */}
                                </center>
                            </CardFooter>
                        </Card>
                    </a>
                    </div>


                    <div>
                        <a href="https://www.linkedin.com/in/rahulkhanna02/?originalSubdomain=in" target="blank" className={Styles.menLink} Styles={{ textDecoration: "none", cursor: "pointer" }}>
                            <Card className={Styles.donorBody}>




                                <CardBody className={Styles.donorCard} style={{ padding: "0px", border: "none" }} >
                                    <img src="./data/images/posters/rahul.jpg" alt="img" />
                                </CardBody>


                                <CardFooter className={Styles.donorFooter} style={{ border: "none", textDecoration: "none" }} >
                                    <center> Rahul Khanna<br />Founder Thunderpod, YC Backed
                                        {/* <Link to="/">
                                                <button className={Styles.proBtn} >Book a Slot</button>
                                            </Link> */}
                                    </center>
                                </CardFooter>
                            </Card>
                        </a>
                    </div>


                    <div>
                        <Card className={Styles.donorBody}>
                            <a href="https://www.linkedin.com/in/ayush-agrawal-5a6aa766/?originalSubdomain=in" target="blank" className={Styles.menLink} Styles={{ textDecoration: "none", cursor: "pointer" }}>
                                <CardBody className={Styles.donorCard} style={{ padding: "0px", border: "none" }} >
                                    <img src="./data/images/posters/ayush.jpg" alt="img" />


                                </CardBody>
                            </a>
                            <CardFooter className={Styles.donorFooter} style={{ border: "none" }} >
                                <center> Ayush Agrawal<br />IIT Kharagpur, Flipkart
                                    {/* <Link to="/">
                                                <button className={Styles.proBtn} >Book a Slot</button>
                                            </Link> */}
                                </center>
                            </CardFooter>
                        </Card>
                    </div>


                    <div>
                        <Card className={Styles.donorBody}>
                            <a href="https://www.linkedin.com/in/shomby-goswami-20669ba5/" className={Styles.menLink} target="blank" Styles={{ textDecoration: "none", cursor: "pointer" }}>
                                <CardBody className={Styles.donorCard} style={{ padding: "0px", border: "none" }} >
                                    <img src="./data/images/posters/shomby.jpg" alt="img" />


                                </CardBody>
                            </a>
                            <CardFooter className={Styles.donorFooter} style={{ border: "none" }} >
                                <center> Shomby Goswami<br />NIFT topper, President Gold Medalist
                                    {/* <Link to="/">
                                                <button className={Styles.proBtn} >Book a Slot</button>
                                            </Link> */}
                                </center>
                            </CardFooter>
                        </Card>
                    </div>

                    <div>
                        <Card className={Styles.donorBody}>
                            <a href="https://www.linkedin.com/in/mitali-malav-174011222/" className={Styles.menLink} target="blank" Styles={{ textDecoration: "none", cursor: "pointer" }}>
                                <CardBody className={Styles.donorCard} style={{ padding: "0px", border: "none" }} >
                                    <img src="./data/images/posters/mitali.png" alt="img" />


                                </CardBody>
                            </a>
                            <CardFooter className={Styles.donorFooter} style={{ border: "none" }} >
                                <center> Mitali Malav<br />MBBS Student, AIIMS Jodhpur
                                    {/* <Link to="/">
                                                <button className={Styles.proBtn} >Book a Slot</button>
                                            </Link> */}
                                </center>
                            </CardFooter>
                        </Card>
                    </div>








                </Carousel>
            </div>

            <br />
            <div className={Styles.heading1} >
                <b>In the News!</b>
            </div>
            <br />
            <br />

            <div>
                <Carousel responsive={responsiveNews} className={Styles.news} >
                    <img src="./data/images/posters/news01.jpg" alt="news" />

                    <img src="./data/images/posters/news02.png" alt="news" />
                </Carousel>
            </div>
            <br />
            <br />
            <br />

        </Layout >
    );
}