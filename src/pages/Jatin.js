import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/jatin-mark.jpg";

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


function Jatin() {

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
                <p className={Styles.para1} id="jatin1" >Jatin Arora</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                            <div className="iframeContainer">
                                <iframe className={Styles.yt} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="https://www.youtube.com/embed/LQF24B69dTs?playlist=LQF24B69dTs&loop=1" title="YouTube video player" rel="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Jatin Arora</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 15</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Karnal</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >Guru Harikrishan Public School</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} >  96% in 8th class, Class Topper</span>
                            </p>
                            <p className={Styles.para4}>Certificates:
                                <span className={Styles.credt} onClick={openModal} className={Styles.modalcerti} > Click to Open</span></p>
                            <p className={Styles.amount}>Amount:
                                <span className={Styles.amt} > Rs.20,000/ per year</span>
                            </p>
                        </div>
                    </div>

                    <div className={Styles.col1}>
                        <center>
                            <div className={Styles.about}>
                                <p className={Styles.para2}>About the fundraiser</p>
                                <br />
                                My name is Jatin Arora. I am a student of class 9th. I am very bright in studies and very much interested in studies. My mother is a single parent.
                                <br />
                                <br />
                                I hereby bring to your notice that there is a legal dispute going on between my parents which affects my studies emotionally as well as financially. My mother takes care of me and my sister. This is a tough time for us, as my mother cannot work due to her health issues.
                                <br />
                                <br />
                                Financial condition of my family is not good as there is no source of income because of this it is difficult for me to complete my education and achieve my goals. I have no resources for my studies. I need guidance and financial support to complete my studies. I assure you to work very hard for my goals. I am grateful to one who will help me to reach my goals. Kindly sponsor me, I will be forever grateful to you.
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

export default Jatin;
