import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/sakshi-mark.jpg";

var reactModal = require("react-modal");

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};



function Sakshi() {
  
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        
        <Layout className={Styles.main1} >

            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                    <button style={{ float: "right" }} onClick={closeModal}>close</button>

                    <div id="img-popup" className={Styles.certiImg} >
                        <img
                            src={photo}
                            alt="certi"


                        />

                    </div>

                </Modal>
            </div>


            <div className={Styles.main2}  id="sakshi2" >
                <p className={Styles.para1}id="sakshi1" >Sakshi</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                            <div className="iframeContainer">
                                <iframe className={Styles.yt} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="https://www.youtube.com/embed/b8oiN36cA4o?playlist=b8oiN36cA4o&loop=1" title="YouTube video player" rel="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Sakshi Sharma</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 6</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} >Delhi</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >Rav Meher Chand Saraswati Vidya Mandir </span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} > 98.6% in first class, Class Topper</span>
                            </p>
                            <p className={Styles.para4}>Certificates:
                                <span className={Styles.credt} onClick={openModal} className={Styles.modalcerti} > Click to Open</span>
                            </p>
                            <p className={Styles.amount}>Amount:
                                <span className={Styles.amt} > Rs.13,000/ per year</span>
                            </p>



                        </div>


                    </div>

                    <div className={Styles.col1}>
                        <center>
                            <div className={Styles.about}>
                                <p className={Styles.para2}>About the fundraiser</p>
                                <br />
                                I am Sakshi Sharma. I am a student of class 1st. My father lost his job due to COVID and I have to hold back my studies. Now he is working as a salesman in the Sadar market of Delhi and earns only INR 7000.
                                <br />
                                <br />
                                I hereby bring your notice that from the previous job of my father, he earns a decent amount but due this COVID he lost his job and has to work at a diminutive amount to make ends meet.
                                <br />
                                <br />
                                Unfortunately, this costs my education. I wish to be a teacher in future and prove myself and This not possible without the proper guidance and financial assistance. I will be very thankful to the one who will help me in my tough times to continue my studies and achieve my goal. I will be forever grateful to them. Kindly sponsor me.
                                <br />


                                <br />
                                <br />

                            </div>
                        </center>

                    </div>
                </div>

                <Link to="/donor">

                    <button className={Styles.proBtn} >eDOPT NOW</button>
                </Link>


            </div>





        </Layout >

    )
}

export default Sakshi;
