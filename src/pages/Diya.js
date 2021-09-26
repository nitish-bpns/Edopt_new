import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/diya-mark.jpg";

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

function Diya() {

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
                <p className={Styles.para1}>Diya Gosain</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                            <div className="iframeContainer">
                                <iframe className={Styles.yt} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="https://www.youtube.com/embed/sw7AfIjJ0lU?playlist=sw7AfIjJ0lU&loop=1" title="YouTube video player" rel="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Diya Gosain</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 15</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Sonipat</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >Holy Child Senior Secondary School</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} > 93% in informatic Tech</span>
                            </p>
                            <p className={Styles.para4}>Certificates:
                                <span className={Styles.credt} onClick={openModal} className={Styles.modalcerti} > Click to Open</span>
                            </p>
                            <p className={Styles.amount}>Amount:
                                <span className={Styles.amt} > Rs.1,00,000/ per year</span>
                            </p>



                        </div>


                    </div>

                    <div className={Styles.col1}>
                        <center>
                            <div className={Styles.about}>
                                <p className={Styles.para2}>About the fundraiser</p>
                                <br />
                                I am Diya Gosain. I am a student of class 11th. My father runs a small business. COVID-19 makes our life miserable as one of our family members got infected to COVID and later to black fungus.
                                <br />
                                <br />
                                Our family suffered a lot in this phase. This phase makes us financially weak and we aren't able to pay our educational expenses.
                                <br />
                                <br />
                                This is a tough time for us, so I request you to please support us financially in this phase. I want to do engineering and achieve my goals. I will be grateful to the one who supports me incessantly. Kindly sponsor me.
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

export default Diya;
