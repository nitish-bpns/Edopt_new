import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/fundraisers.module.css';
import { Link } from 'react-router-dom';
import { Card } from "react-simple-card";

function fundraisers() {
    document.title = 'Fundraiser | eDOPT';
    return (
        <Layout className={Styles.main}>

            <p className={Styles.para1}>Browse Fundraisers</p>



            <div className={Styles.allCards}>

                <div className={Styles.card2}>
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

                <div className={Styles.card2}>
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
                </div>

                <div className={Styles.card2}>
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
                </div>



                <div className={Styles.card2}>
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
                </div>

                <div className={Styles.card2}>
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
                </div>

                <div className={Styles.card2}>
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
                </div>

                <div className={Styles.card2}>

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

                </div>

                <div className={Styles.card2}>

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

                </div>

                <div className={Styles.card2}>

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

                </div>



            </div>













        </Layout>
    )
}

export default fundraisers;
