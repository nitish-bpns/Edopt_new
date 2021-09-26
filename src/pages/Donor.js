import React, { useState } from 'react'
import Layout from '../components/Layout';
import Styles from '../styles/donor.module.css';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

var reactModal = require("react-modal");

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'sans-serif',
    },
};



function Donor() {

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

    document.title = 'Contact | eDOPT';


    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");

    const handleInput = (e) => {
        const copyFormData = { ...formData };
        copyFormData[e.target.name] = e.target.value;
        setFormData(copyFormData);
    };


    const sendData = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const response = await fetch(
                "https://v1.nocodeapi.com/nitish_kgp/google_sheets/GLurBgqGoyCiGhWA?tabId=contact",
                {
                    method: "post",
                    body: JSON.stringify([
                        [
                            formData.name,
                            formData.Age,
                            formData.Phone,
                            formData.Location,
                            formData.intro,
                        ],
                    ]),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            setMessage("Success");

        } catch (error) {
            console.error("Error:", error);
            setMessage("Error");
        }
    };

    return (
        <Layout className={Styles.main}>



            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}></h2>
                    <button style={{ float: "right" }} onClick={closeModal}> X </button>
                    <br />
                    <p>Your response is submitted! Our team will contact you soon.</p>
                    <br />
                    <Link to="/fundraisers">Browse more students.</Link>
                    <br />
                </Modal>
            </div>



            <p className={Styles.para1}>Contact Us</p>

            <div className={Styles.scols}>

                <div className={Styles.col1}>




                    <form onSubmit={sendData} id="blur">

                        <input
                            id="newsletter"
                            type="name"
                            hasIcon="right"
                            placeholder="Name"
                            name="name"
                            onChange={handleInput}
                            className={Styles.iname}
                        ></input>

                        <input
                            id="newsletter"
                            type="email"
                            hasIcon="right"
                            placeholder="Email"
                            name="Age"
                            onChange={handleInput}
                            className={Styles.iname}
                        ></input>


                        <input
                            id="newsletter"
                            type="number"
                            hasIcon="right"
                            placeholder="Phone no."
                            name="Phone"
                            onChange={handleInput}
                            className={Styles.iname}
                        ></input>
                        <input
                            id="newsletter"
                            type="text"
                            hasIcon="right"
                            placeholder="Location"
                            onChange={handleInput}
                            name="Location"
                            className={Styles.iname}
                        ></input>
                        <br />
                        <br />
                        <input
                            id="newsletter"
                            type="name"
                            hasIcon="right"
                            onChange={handleInput}
                            placeholder="Message"
                            name="intro"
                            className={Styles.istory}
                        ></input>
                        <center>
                            <input
                                name="submit"
                                className="btn button button-primary button-wide-mobile button-sm"
                                placeholder="Contact Us"
                                className={Styles.subBtn}
                                type="submit"
                                value="Submit"
                                onClick={openModal}
                            />
                        </center>
                    </form>


                </div>

                <div className={Styles.col2}>

                    <img src="./data/images/general/eDOPT.png" alt="img" />

                </div>

            </div>

        </Layout >
    )
}

export default Donor;
