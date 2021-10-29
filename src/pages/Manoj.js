import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/manoj-mark.png";

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



function Manoj() {
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
                <p className={Styles.para1} >Manoj Kumar Lodha</p>

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
                                <span className={Styles.credt} > Manoj Kumar Lodha</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 10</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Kota</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >Shiv Jyoti School</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} >96% (Class 4th)</span>
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
                                <p className={Styles.para2}>About the fundraiser</p>
                                <br />
                                I am Manoj. I am a student of class 5th. I am a meritorious student in my class and brilliant in my studies. I want to work hard and learn more. I father works as a watchman.
                                <br />
                                <br />
                                I hereby want to bring to your attention that my father works as a watchman in Allen, Kota.The income of my father from his occupation is low and he is not able to afford my education. I am bright in my studies and my father wants to provide me with the best education but our financial conditions are causing hindrance in my studies.
                                <br />
                                <br />
                                I want to work very hard on goals but due to a lack of resources, I am not able to do so. I request you to please provide me with sponsorship for my studies. I will be grateful to the one who supports me in my studies incessantly.
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

export default Manoj;
