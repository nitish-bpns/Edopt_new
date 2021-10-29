import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/chetanay-mark.jpg";

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



function Chetanay() {
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
                <p className={Styles.para1} >Chetanay</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                            <div className="iframeContainer">
                            <img className={Styles.pic2} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="./data/images/posters/chetanay.jpg"></img>
                            
                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Chetanay</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 7</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Sonipat</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >Droan Vidya Peeth</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} >80.25%</span>
                            </p>
                            <p className={Styles.para4}>Certificates:
                                <span className={Styles.credt} onClick={openModal} className={Styles.modalcerti} > Click to Open</span>
                            </p>
                            <p className={Styles.amount}>Amount:
                                <span className={Styles.amt} > Rs.14,400/ per year</span>
                            </p>
                        </div>


                    </div>

                    <div className={Styles.col1}>
                        <center>
                            <div className={Styles.about}>
                                <p className={Styles.para2}>About the fundraiser</p>
                                <br />
                                My name is Chetanay. I am a student of class 3rd. My father is a daily-wage worker and this COVID-19 period make our life miserable, it affects our lives so bad especially my studies. My parents can't afford my educational expenses due to financial crises in our family and he is the only earning member in our family.
                                <br />
                                <br />
                                I hereby bring to your notice that Earlier he was a vegetable vendor and later switch to auto driving but It also don't help in improving our financial condition. Later this COVID-19 crises hits us hard and it directly affects my studies. 
                                <br />
                                <br />
                                I want to become a Police office in future. To fulfil my dream, i need support and financial assistance to continue my studies and go a step closer to my dreams. I am very grateful to one who help me in this difficult phase.
                                <br />
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

export default Chetanay;
