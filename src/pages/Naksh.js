import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/naksh-mark.png";

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



function Naksh() {
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
                <p className={Styles.para1} id="anshu1" >Naksh Shringi</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                            <div className="iframeContainer">
                                <img className={Styles.pic2} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="./data/images/posters/naksh.png"></img>

                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Naksh Shringi</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 12</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Kota</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >D.A.V. Public School</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} >88% (Class 5th)</span>
                            </p>
                            <p className={Styles.para4}>Certificates:
                                <span className={Styles.credt} onClick={openModal} className={Styles.modalcerti} > Click to Open</span>
                            </p>
                            <p className={Styles.amount}>Amount:
                                <span className={Styles.amt} > Rs.32,820/ per year</span>
                            </p>



                        </div>


                    </div>

                    <div className={Styles.col1}>
                        <center>
                            <div className={Styles.about}>
                                <p className={Styles.para2}>About the Student</p>
                                <br />
                                I am Naksh shringi. I am a student of class 6th. I am very brilliant in studies and scored good percentage in my previous class. I want to study hard and fulfill my dreams My father runs a small grocery shop.
                                <br />
                                <br />
                                I hereby want to bring to your notice that My father  has a small rented grocery shop in our lane and he is the only working member in our family, due to this pandemic we are facing problems to met our daily needs. I want to study hard and fulfill my goals but due to this condition of my family, I am not able to complete my studies.
                                <br />
                                <br />
                                I assure you to work very hard and leaves no stones unturned. So I request you to give me sponsorship for my studies and I will be grateful to the one who help me in completing my studies in this difficult phase.
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

export default Naksh;
