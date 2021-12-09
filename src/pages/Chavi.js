import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/chavi-mark.jpg";

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


// Modal.setAppElement('#yourAppElement');



function Chavi() {
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
        <Layout className={Styles.main1}>


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



            <div className={Styles.main2}>
                <p className={Styles.para1} id="anshu1" >Chavi</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                            <div className="iframeContainer">
                                <img className={Styles.pic2} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="./data/images/posters/chavi.png"></img>

                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Chavi</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 11</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Sonipat</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >Saraswati Vidya Mandir</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} >95.7% (Class 6th)</span>
                            </p>
                            <p className={Styles.para4}>Certificates:
                                <span className={Styles.credt} onClick={openModal} className={Styles.modalcerti} > Click to Open</span>
                            </p>
                            <p className={Styles.amount}>Amount:
                                <span className={Styles.amt} > Rs.19,200/ per year</span>
                            </p>



                        </div>


                    </div>

                    <div className={Styles.col1}>
                        <center>
                            <div className={Styles.about}>
                                <p className={Styles.para2}>About the Student</p>
                                <br />
                                I am Chavi. I am a student of class 6th. I am a very bright student of my class and very much interested in quality education. I want to become an IPS officer.
                                <br />
                                <br />
                                I hereby bring to your notice that my father is a helper in a small shop. The income of my father is already low but this corona phase worsen our financial conditions. We are three sisters, managing studies of all of us is difficult for my father.
                                <br />
                                <br />
                                I want to become IPS officer in future. As i don't have enough resources to achieve my goals, I need your support and help. I will be very thankful to you for helping me achieve my goals.
                                <br />
                                <br />

                                <br />
                                <br />

                            </div>
                        </center>


                    </div>
                </div>
                <Link to="/donor">

                    <button className={Styles.proBtn} >Donate Now</button>
                </Link>



            </div>





        </Layout >

    )
}

export default Chavi;
