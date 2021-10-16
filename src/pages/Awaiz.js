import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/awas-mark.jpg";

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

function Awaiz() {

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
                <p className={Styles.para1} id="awaiz1" >Awaiz Pasha</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                            <div className="iframeContainer">
                                <iframe className={Styles.yt} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="https://www.youtube.com/embed/i_co3__WXo0?playlist=i_co3__WXo0&loop=1" title="YouTube video player" rel="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Awaiz Pasha</span>
                            </p>
                            <p className={Styles.para4}>Age:
                                <span className={Styles.credt} > 10</span>
                            </p>
                            <p className={Styles.para4}>Location:
                                <span className={Styles.credt} > Banglore</span>
                            </p>
                            <p className={Styles.para4}>School:
                                <span className={Styles.credt} >Amity Banglore School</span>
                            </p>
                            <p className={Styles.para4}>Achievement:
                                <span className={Styles.credt} > 74% in Standard 5th </span>
                            </p>
                            <p className={Styles.para4}>Certificates:
                                <span className={Styles.credt} onClick={openModal} className={Styles.modalcerti} > Click to Open</span>
                            </p>
                            <p className={Styles.amount}>Amount:
                                <span className={Styles.amt} >Rs.16,000 </span>
                            </p>



                        </div>


                    </div>

                    <div className={Styles.col1}>
                        <center>
                            <div className={Styles.about}>
                                <p className={Styles.para2}>About the fundraiser</p>
                                <br />
                                Awaiz Pasha, resident of Bangalore is a bright student from Amity Bangalore School. His mother is a school teacher and working tirelessly to make Awaiz’s future bright. He wants to be a doctor but his mother doesn't earn enough to give him a proper education. After his father’s death, the family is not able to support itself.

                                <br />
                                <br />
                                Only you can help Awaiz to get a proper education and his mother an emotional support.

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

export default Awaiz;
