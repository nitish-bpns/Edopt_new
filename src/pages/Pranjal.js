import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/pranjal-mark.jpg";

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



function Pranjal() {
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
                <p className={Styles.para1} id="anshu1" >Pranjal Jain</p>
                <div className={Styles.scols}>
                    <div className={Styles.col1}>
                        <center>
                            <div className="iframeContainer">
                                <img className={Styles.pic2} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="./data/images/posters/pranjal.jpg"></img>

                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Pranjal Jain</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 13</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Kota</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >Shiv Jyoti School</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} >83% (Class 8th)</span>
                            </p>
                            <p className={Styles.para4}>Certificates:
                                <span className={Styles.credt} onClick={openModal} className={Styles.modalcerti} > Click to Open</span>
                            </p>
                            <p className={Styles.amount}>Amount:
                                <span className={Styles.amt} > Rs.40,000/ per year</span>
                            </p>



                        </div>


                    </div>

                    <div className={Styles.col1}>
                        <center>
                            <div className={Styles.about}>
                                <p className={Styles.para2}>About the Student</p>
                                <br />
                                I am Pranjal. I am a student of class 8th. I want to become an Engineer in future. I am very bright in studies and very much interested in studies. My mother is a single parent.
                                <br />
                                <br />
                                I hereby bring to your notice that My mother take care of me because of a  legal dispute going on in between my parents which is now which is called off by court. This dispute affects my studies emotionally as well as financially. This is a tough time for us, as my mother is less educated and works as a tailor in home.
                                <br />
                                <br />
                                Financial condition of my family is not good as there is dimunitive income of our family, because of this it is difficult for me to complete my education and achieve my goal of being an Engineer. I have no resources for my studies. I need guidance and financial support to complete my studies. I assure you to work very hard  for my goals. I am grateful to one who help me to reach my goals.
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

export default Pranjal;
