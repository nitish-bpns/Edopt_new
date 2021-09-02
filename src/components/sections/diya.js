import React, { useState } from "react";
//import "./styles.css";
var FontAwesome = require("react-fontawesome");

function openForm() {
  document.getElementById("popupForm").style.display = "block";
  document.getElementById("blur").style.filter = "blur(4px)";
  /* document.getElementById("fix-btn").style.display = "none"; */
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
  document.getElementById("blur").style.filter = "blur(0px)";
  /* document.getElementById("fix-btn").style.display = "block"; */
}

function openImage() {
  document.getElementsByClassName("prsnl-photo-popup")[0].style.display =
    "block";
  document.getElementById("img-popup").style.display = "block";
  document.getElementById("blur").style.filter = "blur(4px)";
  // document.getElementById("fix-btn").style.display = "none";
}
function closeImage() {
  document.getElementsByClassName("prsnl-photo-popup")[0].style.display =
    "none";
  document.getElementById("img-popup").style.display = "none";
  document.getElementById("blur").style.filter = "blur(0px)";
  //document.getElementById("fix-btn").style.display = "block";
}

export default function Contact() {
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
        "https://v1.nocodeapi.com/eedopt/google_sheets/EJbzyRDJOnoGsbzb?tabId=eDOPT",
        {
          method: "post",
          body: JSON.stringify([
            [formData.name, formData.email, formData.phone, formData.location],
          ]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      setMessage("Success");
      alert("Form Submitted Successfully");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error");
    }
  };

  return (
    <div className="bodyColorstd"
      style={{
        marginTop: "100px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div id="blur">

        <center>
          <div className="iframeContainer">
            <iframe style={{ marginTop: "3%", borderRadius: "20px", marginBottom: "-3%" }} width="560" height="315" src="https://www.youtube.com/embed/sw7AfIjJ0lU?playlist=sw7AfIjJ0lU&loop=1" title="YouTube video player" rel="0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </center>


        {/* <div className="stud-video">
          <video
            id="stu-video"
            style={{ margin: "auto" }}
            poster={require("./../../assets/images/diya-img.jpg")}
            width="45%"
            autoPlay
            controls
            preload="none"
          >
            <source
              src={require("./../../assets/images/diya-vid.mp4")}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <br />
        <br />

        <div className="stdtcard" style={{
          backgroundColor: "white",
          width: "80%",
          paddingLeft: "15px",
          paddingRight: "15px",
          borderRadius: "20px",

          paddingTop: "5px",
          paddingLeft: "25px",
          paddingRight: "25px",
          boxShadow: "0px 0px 20px",

        }} >

          <div className="brief" style={{ width: "100%", margin: "auto" }}>
            <h3>Brief</h3>
            <p
              style={{
                color: "#484444",
                fontWeight: "500",
              }}
            >
              I am Diya Gosain. I am a student of class 11th. My father runs a small business. COVID-19 makes our life miserable as one of our family members got infected to COVID and later to black fungus.
            </p>
            <p
              style={{
                color: "#484444",
                fontWeight: "500",
              }}
            >
              Our family suffered a lot in this phase. This phase makes us financially weak and we aren't able to pay our educational expenses. This is a tough time for us, so I request you to please support us financially in this phase. I want to do engineering and achieve my goals. I will be grateful to the one who supports me incessantly. Kindly sponsor me.
            </p>
          </div>
          <div className="detail" style={{ width: "100%", margin: "auto" }}>
            <h3>Details</h3>
            <p
              style={{
                color: "#484444",
                fontWeight: "500",
              }}
            >
              <ul>
                <li>Name: Diya Gosain</li>
                <li>Location: Sonipat</li>

                <li>Age: 15</li>
                <li>School: Holy Child Senior Secondary School</li>
              </ul>
            </p>
          </div>
          <div className="achievement" style={{ width: "100%", margin: "auto" }}>
            <h3>Achievements</h3>
            <p
              style={{
                color: "#484444",
                fontWeight: "500",
              }}
            >
              <ul>
                <li>93% in informatic Tech</li>
              </ul>
            </p>
          </div>
          <div className="certificate" style={{ width: "100%", margin: "auto" }}>
            <h3>Certificates</h3>
            <img
              src={require("./../../assets/images/diya-mark.jpg")}
              alt=""
              onClick={openImage}
              className="prsnl-photo"
            />
          </div>

          <div className="amount" style={{ width: "100%", margin: "auto" }}>
            <h3>Amount</h3>

            <p
              style={{
                color: "#484444",
                fontWeight: "500",
              }}
            >
              ₹50,000/Year
            </p>


          </div>

          <br />
          <br />

        </div>
        <div id="fix-btn" onClick={openForm}>
          Contact Now
        </div>
      </div>
      <div>
        {/* image popup */}
        <div id="img-popup">
          <img
            src={require("./../../assets/images/diya-mark.jpg")}
            alt=""
            onClick={closeImage}
            className="prsnl-photo-popup"
          />
        </div>
        {/* image popup */}

        {/* form */}
        <div class="contactPopup">
          <div class="formPopup" id="popupForm">
            <h3 className="form-head">Contact Us</h3>
            <FontAwesome
              className="form-icon cancel"
              name="times"
              onClick={closeForm}
            />
            <hr className="line" />
            <form className="formContainer input-form" onSubmit={sendData}>
              <div>
                <input
                  type="text"
                  className="form-field"
                  id="name"
                  placeholder="Name"
                  name="name"
                  required
                  onChange={handleInput}
                />
                <FontAwesome className="form-icon" name="user" />
              </div>
              <div>
                <input
                  type="email"
                  className="form-field"
                  id="email"
                  placeholder="Email"
                  name="email"
                  required
                  onChange={handleInput}
                />
                <FontAwesome className="form-icon" name="envelope" />
              </div>
              <div>
                <input
                  type="tel"
                  className="form-field"
                  id="phone"
                  placeholder="Phone"
                  name="phone"
                  pattern="[0-9]{10}"
                  required
                  onChange={handleInput}
                />
                <FontAwesome className="form-icon" name="phone" />
              </div>
              <div>
                <input
                  type="text"
                  className="form-field"
                  id="location"
                  placeholder="Location"
                  name="location"
                  required
                  onChange={handleInput}
                />
                <FontAwesome className="form-icon" name="map-marker" />
              </div>
              <input name="submit" className="btn" type="submit" value="Send" />
              <div>{message}</div>
            </form>
          </div>


        </div>
        {/* form */}

      </div>
    </div >
  );
}
