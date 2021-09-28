import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/owiz-mark.jpg";

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

function Owiz() {

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
                <p className={Styles.para1}>Owiz Ahmed</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                            <div className="iframeContainer">
                                <iframe className={Styles.yt} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="https://www.youtube.com/embed/p1C-6k0eOtI?playlist=p1C-6k0eOtI&loop=1" title="YouTube video player" rel="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Owiz Ahmed</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 14</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Banglore</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >Amity Banglore School</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} >  98% in Standard 8th </span>
                            </p>
                            <p className={Styles.para4}>Certificates:
                                <span className={Styles.credt} onClick={openModal} className={Styles.modalcerti} > Click to Open</span>
                            </p>
                            <p className={Styles.amount}>Amount:
                                <span className={Styles.amt} >___ </span>
                            </p>

                        </div>

                    </div>

                    <div className={Styles.col1}>
                        <center>
                            <div className={Styles.about}>
                                <p className={Styles.para2}>About the fundraiser</p>
                                <br />
                                Owiz Ahmed, resident of bangalore is a bright student who lost his father 5 years back. From that time his only aim is to become an IAS officer because his father wishes the same. He scored brilliant in his subjects and also got achievements and medals in competitions.
                                His mother is a primary school teacher and does not earn enough to provide owiz high quality education he deserves. Owiz’s mother cannot fulfil his dream alone.

                                <br />
                                <br />
                                He needs your support from like minded people like you who can help this nation by giving it an IAS officer.

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

export default Owiz;
