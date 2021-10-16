import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/divyanshu-mark.png";

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


function Divyanshu() {
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
                <p className={Styles.para1} id="divyanshu1" >Divyanshu</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                            <div className="iframeContainer">
                                <iframe className={Styles.yt} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="https://www.youtube.com/embed/1O4irXohM0g?playlist=1O4irXohM0g&loop=1" title="YouTube video player" rel="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Divyanshu Pandey</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 11</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Delhi</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >Rajdhani Publlic School</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} > 77.4% in 5th class</span>
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
                                <p className={Styles.para2}>About the fundraiser</p>
                                <br />
                                I am Divyanshu. I am students of clasth. I am very bright in studies. I want to become Police officer. My father works as a labourer in a factory.
                                <br />
                                <br />
                                I hereby bring to your notice that my father works as a labourer in a factory and my mother is a housewife. The income of my father was already low and our financial condition was not good but this COVID-19 phase worsen our condition. Our family income is very less. We are two sibling, so it is difficult for my family to bear our educational expenses.
                                <br />
                                <br />
                                I want to become a Police officer but due to lack of resources, I am facing problems in my studies. I request you to provide me scholarship and give me a chance to fulfill my goals and live my dream. I assure you to work very hard on my studies. I will be very grateful if you provide me financial assistance and virtual guidance.
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

export default Divyanshu;
