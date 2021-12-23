import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/fundraisers.module.css';
import { Link } from 'react-router-dom';
import { Card } from "react-simple-card";


function fundraisers() {

    document.title = 'Fundraiser | eDOPT';

    return (
        <Layout className={Styles.main}>

            <p className={Styles.para1} id="feed1" >Browse Fundraisers</p>
            <div className={Styles.allCards}>

                <div className={Styles.card2}>
                    <Card className={Styles.stdCard} >
                        <img src="./data/images/posters/awadh.png" alt="student" />
                        <p className={Styles.stdDetail1} >Awadh Khandelwal </p>
                        <p className={Styles.stdDetail3} >11 yrs</p>
                        <p className={Styles.stdDetail2} ><b> Result: 98.8% (Class 6th)</b><br /></p>
                        <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                        <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.32,820<br />

                        </p>
                        <center>
                            <Link to="/awadh"
                            >
                                <button className={Styles.proBtn} >Profile</button>
                            </Link>
                        </center>
                    </Card>
                </div>

                {/* <div className={Styles.card2}>
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
                </div> */}

                <div className={Styles.card2}>
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


                <div className={Styles.card2}>
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


                {/* <div className={Styles.card2}>
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


                <div className={Styles.card2}>
                    <Card className={Styles.stdCard} >
                        <img src="./data/images/posters/chavi.png" alt="student" />
                        <p className={Styles.stdDetail1} >Chavi</p>
                        <p className={Styles.stdDetail3} >11 yrs</p>
                        <p className={Styles.stdDetail2} ><b> Result: 95.7% (Class 6th)</b><br /></p>
                        <p className={Styles.stdDetail2} ><b>Location:</b> Sonipat<br /></p>
                        <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.19,200<br />

                        </p>
                        <center>
                            <Link to="/chavi"
                            >
                                <button className={Styles.proBtn} >Profile</button>
                            </Link>
                        </center>
                    </Card>
                </div>

                {/* <div className={Styles.card2}>

                    <Card className={Styles.stdCard} >
                        <img src="./data/images/posters/ranjith.png" alt="student" />
                        <p className={Styles.stdDetail1} >Ranjith AV</p>
                        <p className={Styles.stdDetail3} >20 yrs</p>
                        <p className={Styles.stdDetail2} ><b> 95.68% (1st year, College)</b><br /></p>
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
                </div> */}


                <div className={Styles.card2}>
                    <Card className={Styles.stdCard} >
                        <img src="./data/images/posters/ritesh.jpg" alt="student" />
                        <p className={Styles.stdDetail1} >Ritesh Darda</p>
                        <p className={Styles.stdDetail3} >12 yrs</p>
                        <p className={Styles.stdDetail2} ><b> Result: 93%(Class 6th)</b><br /></p>
                        <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                        <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.32,820<br />

                        </p>
                        <center>
                            <Link to="/ritesh"
                            >
                                <button className={Styles.proBtn} >Profile</button>
                            </Link>
                        </center>
                    </Card>
                </div>

                <div className={Styles.card2}>
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

                <div className={Styles.card2}>
                    <Card className={Styles.stdCard} >
                        <img src="./data/images/posters/yachi.jpg" alt="student" />
                        <p className={Styles.stdDetail1} >Yachi Ashwani</p>
                        <p className={Styles.stdDetail3} >9 yrs</p>
                        <p className={Styles.stdDetail2} ><b> Result: 89% (Class 2nd)</b><br /></p>
                        <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                        <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.31,020<br />

                        </p>
                        <center>
                            <Link to="/yachi"
                            >
                                <button className={Styles.proBtn} >Profile</button>
                            </Link>
                        </center>
                    </Card>
                </div>


                <div className={Styles.card2}>
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


                <div className={Styles.card2}>
                    <Card className={Styles.stdCard} >
                        <img src="./data/images/posters/naksh.png" alt="student" />
                        <p className={Styles.stdDetail1} >Naksh Shringi</p>
                        <p className={Styles.stdDetail3} >11 yrs</p>
                        <p className={Styles.stdDetail2} ><b> Result: 88% (Class 6th)</b><br /></p>
                        <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                        <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.32,820<br />

                        </p>
                        <center>
                            <Link to="/naksh"
                            >
                                <button className={Styles.proBtn} >Profile</button>
                            </Link>
                        </center>
                    </Card>
                </div>


                <div className={Styles.card2}>
                    <Card className={Styles.stdCard} >
                        <img src="./data/images/posters/priyanshu.png" alt="student" />
                        <p className={Styles.stdDetail1} >Priyanshu Pandey</p>
                        <p className={Styles.stdDetail3} >16 yrs</p>
                        <p className={Styles.stdDetail2} ><b> Result: 85% (Class 10th )</b><br /></p>
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


                <div className={Styles.card2}>
                    <Card className={Styles.stdCard} >
                        <img src="./data/images/posters/bhavya.jpg" alt="student" />
                        <p className={Styles.stdDetail1} >Bhavya Jain</p>
                        <p className={Styles.stdDetail3} >11 yrs</p>
                        <p className={Styles.stdDetail2} ><b>Result: 84.5% (Class 6th)</b><br /></p>
                        <p className={Styles.stdDetail2} ><b>Location:</b> Kota<br /></p>
                        <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.32,820<br />

                        </p>
                        <center>
                            <Link to="/bhavya"
                            >
                                <button className={Styles.proBtn} >Profile</button>
                            </Link>
                        </center>
                    </Card>
                </div>


                <div className={Styles.card2}>
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


                <div className={Styles.card2}>
                    <Card className={Styles.stdCard} >
                        <img src="./data/images/posters/syed.png" alt="student" />
                        <p className={Styles.stdDetail1} >Syed Ameen</p>
                        <p className={Styles.stdDetail3} >10 yrs</p>
                        <p className={Styles.stdDetail2} ><b> 82% (Class 5th )</b><br /></p>
                        <p className={Styles.stdDetail2} ><b>Location:</b> Bangalore<br /></p>
                        <p className={Styles.stdDetail2}> <b>Amount: </b> Rs.16,000<br />

                        </p>
                        <center>
                            <Link to="/syed"
                            >
                                <button className={Styles.proBtn} >Profile</button>
                            </Link>
                        </center>
                    </Card>
                </div>


                <div className={Styles.card2}>
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


                <div className={Styles.card2}>

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

                <div className={Styles.card2}>

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

                <div className={Styles.card2}>

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

                {/*            <div className={Styles.card2}>

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

               <div className={Styles.card2}>    
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

                                    <div className={Styles.card2}>    
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

            </div>

        </Layout>
    )
}

export default fundraisers;
