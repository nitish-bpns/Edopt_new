import React from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/profile.module.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import photo from "./../certi/ritesh-mark.jpg";

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



function Ritesh() {
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
                <p className={Styles.para1} id="ritesh1" >Ritesh Darda</p>

                <div className={Styles.scols}>

                    <div className={Styles.col1}>


                        <center>
                            <div className="iframeContainer">
                            <img className={Styles.pic2} style={{ marginTop: "-4%", borderRadius: "8px", marginBottom: "-3%" }} src="./data/images/posters/ritesh.jpg"></img>
                            </div>
                        </center>

                        <div className={Styles.about2}>
                            <p className={Styles.para3}>Credentials</p>
                            <hr />
                            <p className={Styles.para4}>Name:
                                <span className={Styles.credt} > Ritesh Darda</span>
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
                                <span className={Styles.credt} >93% (Class 6th) </span>
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
                                I am Ritesh Darda. I am a student of class 6th. I am brilliant in studies and want to get a quality education but I lost my father during the pandemic.
                                <br />
                                <br />
                                COVID-19 makes our life miserable, I lost my father in this pandemic. He is the only earning member of my family. Due to this we are struggling a lot and facing lots of financial issues. 
                                <br />
                                <br />
                                I want to study hard to help my mother in future but these financial constraints are causing lots of hindrances in my studies. I request you to please provide me with a scholarship for my education. I will be grateful forever.
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

export default Ritesh;
