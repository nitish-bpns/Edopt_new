import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/ranjith-mark.jpg";


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



function Ranjith() {
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
                <p className={Styles.para1} id="ranjith" >Ranjith AV</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                        <div className="iframeContainer">
                                <img className={Styles.pic2} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="./data/images/posters/ranjith.png"></img>
                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Ranjith AV</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 20</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Bangalore</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >B. M. S. College of Engineering</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} >95.68% </span>
                            </p>
                            <p className={Styles.para4}>Certificates:
                                <span className={Styles.credt} onClick={openModal} className={Styles.modalcerti} > Click to Open</span>
                            </p>
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
                                I am Ranjith. I am a student of Aerospace Engineering. I am excellent in my studies and want to become a scientist in future. My mother is a daily wage worker.
                                <br />
                                <br />
                                I hereby want to bring your notice that My father is a drunkard and my mother works as a daily wage worker due to which our family income is not stable. My father does not contribute to our finances. This pandemic hits hard on us and we are affected financially
                                <br />
                                <br />
                                I want to study hard and fulfil my goal to become a scientist. But due to a lack of resources, I am not able to afford my studies. I assure you to work very hard and leave no stones unturned to achieve my goal. I request you to provide  sponsarship for my education to help me in my studies.
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

export default Ranjith;
