import React from "react";
import Button from "../elements/Button";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";

function sortLocation() {
  var input, filter, cards, loc, i, txtValue;

  input = document.getElementById("sort-location");
  filter = input.value.toUpperCase();

  cards = document.getElementsByClassName("myCard");
  for (i = 0; i < cards.length; i++) {
    loc = cards[i].getElementsByClassName("stud-location")[0];
    txtValue = loc.textContent || loc.innerText;
    if (filter == "") {
      cards[i].style.display = "";
    } else if (txtValue.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

function sortName() {
  var input, filter, cards, myname, i, txtValue;

  input = document.getElementById("sort-name");
  filter = input.value.toUpperCase();
  cards = document.getElementsByClassName("myCard");
  for (i = 0; i < cards.length; i++) {
    myname = cards[i].getElementsByClassName("stud-name")[0];

    txtValue = myname.textContent || myname.innerText;

    if (filter == "") {
      cards[i].style.display = "";
    } else if (txtValue.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

export default function myfeeds() {
  return (
    <div
      style={{
        marginTop: "85px",
      }}
      className="bodyColor"
    >
      <h3 style={{ textAlign: "center", paddingTop: "2%" }}>Student Feeds</h3>

      {/* <div className="sorting">
        <p style={{ display: "inline-block", margin: "0 47px" }}>Sort By </p>
        <input
          type="text"
          id="sort-location"
          onKeyUp={sortLocation}
          placeholder="Location"
          title="Type in a Location"
        />
        <input
          type="text"
          id="sort-name"
          onKeyUp={sortName}
          placeholder="Name"
          title="Type in a Name"
        />
      </div>
      <hr /> */}
      <br />
      <div className="feed-content">


        <div className="stdCard">
          <center>
            <Card style={{
              padding: "4px",
              borderRadius: "15px",
              border: "none",
              margin: "10px",
              boxShadow: "0px 0px 20px #617264",


            }}>
              <CardHeader style={{
                padding: "20px 20px 20px", marginTop: "0%"
              }}>
                <img
                  className="feature-img"
                  src="divyanshu-img.png"
                  alt=""
                />
              </CardHeader>
              <CardBody
                style={{
                  textAlign: "left",
                  fontSize: "15px",

                  margin: "0%",
                  height: "195px",
                  color: "rgba(0, 0, 0, 0.7)",
                  paddingLeft: "40px",
                }}
              >
                <b style={{ fontSize: "18px" }}>Divyanshu Pandey 11yrs</b>
                <br />
                Location: Delhi<br />

                <br className="remove-in-mobile" />
                <br className="remove-in-mobile" />
                <center>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="/divyanshu"
                    style={{ backgroundColor: "#4b5c6b", marginTop: "18px", borderRadius: "5px" }}
                  >
                    Profile of Divyanshu
                  </Button>
                </center>
              </CardBody>
            </Card>
          </center>
        </div>



        <div className="stdCard">
          <center>
            <Card style={{
              padding: "4px",
              borderRadius: "15px",
              border: "none",
              margin: "10px",
              boxShadow: "0px 0px 20px #617264",

            }}  >
              <CardHeader style={{
                padding: "20px 20px 20px", marginTop: "0%"
              }}>
                <img
                  className="feature-img"
                  src="priyanshu-img.png"
                  alt=""
                />
              </CardHeader>
              <CardBody
                style={{
                  textAlign: "left",
                  fontSize: "15px",

                  margin: "0%",
                  height: "195px",
                  color: "rgba(0, 0, 0, 0.7)",
                  paddingLeft: "40px",
                }}
              >
                <b style={{ fontSize: "18px" }}>Priyanshu Pandey  16yrs</b>
                <br />
                Location: Delhi<br />
                A single mother child seeking help.
                <br className="remove-in-mobile" />
                <br className="remove-in-mobile" />
                <center>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="/priyanshu"
                    style={{ backgroundColor: "#4b5c6b", marginTop: "18px", borderRadius: "5px" }}
                  >
                    Profile of Priyanshu
                  </Button>
                </center>
              </CardBody>
            </Card>
          </center>
        </div>

        <div className="stdCard">
          <center>
            <Card style={{
              padding: "4px",
              borderRadius: "15px",
              border: "5px",
              margin: "10px",
              borderTopRightRadius: "15px",
              boxShadow: "0px 0px 20px #617264",

            }}>
              <CardHeader style={{
                padding: "20px 20px 20px", margin: "0%"
              }}>
                <img
                  className="feature-img"
                  src="sakshi.jpg"
                  alt=""
                />
              </CardHeader>
              <CardBody
                style={{
                  textAlign: "left",
                  fontSize: "15px",

                  margin: "0%",
                  height: "195px",
                  color: "rgba(0, 0, 0, 0.7)",
                  paddingLeft: "40px",
                }}
              >
                <b style={{ fontSize: "18px" }}>Sakshi 6yrs</b>
                <br />
                Location: Delhi<br />

                <br className="remove-in-mobile" />
                <br className="remove-in-mobile" />
                <center>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="/sakshi"
                    style={{ backgroundColor: "#4b5c6b", marginTop: "18px", borderRadius: "5px" }}
                  >
                    Profile of Sakshi
                  </Button>
                </center>
              </CardBody>
            </Card>
          </center>
        </div>


        <div className="stdCard">
          <center>
            <Card style={{
              padding: "4px",
              borderRadius: "15px",
              border: "none",
              margin: "10px",
              boxShadow: "0px 0px 20px #617264",

            }}>
              <CardHeader style={{
                padding: "20px 20px 20px", marginTop: "0%"
              }}>
                <img
                  className="feature-img"
                  src="jatin.jpg"
                  alt=""
                />
              </CardHeader>
              <CardBody
                style={{
                  textAlign: "left",
                  fontSize: "15px",

                  margin: "0%",
                  height: "195px",
                  color: "rgba(0, 0, 0, 0.7)",
                  paddingLeft: "40px",
                }}
              >
                <b style={{ fontSize: "18px" }}>Jatin Arora 15yrs</b>
                <br />
                Location: Karnal<br />

                <br className="remove-in-mobile" />
                <br className="remove-in-mobile" />
                <center>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="/jatin"
                    style={{ backgroundColor: "#4b5c6b", marginTop: "18px", borderRadius: "5px" }}
                  >
                    Profile of Jatin
                  </Button>
                </center>
              </CardBody>
            </Card>
          </center>
        </div>


        <div className="stdCard">
          <center>
            <Card style={{
              padding: "4px",
              borderRadius: "15px",
              border: "5px",
              margin: "10px",
              borderTopRightRadius: "15px",
              boxShadow: "0px 0px 20px #617264",

            }}>
              <CardHeader style={{
                padding: "20px 20px 20px", margin: "0%"
              }}>
                <img
                  className="feature-img"
                  src="diya.jpg"
                  alt=""
                />
              </CardHeader>
              <CardBody
                style={{
                  textAlign: "left",
                  fontSize: "15px",

                  margin: "0%",
                  height: "195px",

                  paddingLeft: "40px",
                  color: "rgba(0, 0, 0, 0.7)"
                }}
              >
                <b style={{ fontSize: "18px" }}>Diya Gosain 15yrs</b>
                <br />
                Location: Sonipat<br />

                <br className="remove-in-mobile" />
                <br className="remove-in-mobile" />
                <center>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="/diya"
                    style={{ backgroundColor: "#4b5c6b", marginTop: "18px", borderRadius: "5px" }}
                  >
                    Profile of Diya
                  </Button>
                </center>
              </CardBody>
            </Card>
          </center>
        </div>



        <div className="stdCard">
          <center>
            <Card style={{
              padding: "4px",
              borderRadius: "15px",
              border: "none",
              margin: "10px",
              boxShadow: "0px 0px 20px #617264",

            }}>
              <CardHeader style={{
                padding: "20px 20px 20px", marginTop: "0%"
              }}>
                <img
                  className="feature-img"
                  src="anshu.jpg"
                  alt=""
                />
              </CardHeader>
              <CardBody
                style={{
                  textAlign: "left",
                  fontSize: "15px",

                  margin: "0%",
                  height: "195px",
                  color: "rgba(0, 0, 0, 0.7)",
                  paddingLeft: "40px",
                }}
              >
                <b style={{ fontSize: "18px" }}>Anshu 14yrs </b>
                <br />
                Location: Sonipat<br />

                <br className="remove-in-mobile" />
                <br className="remove-in-mobile" />
                <center>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="/anshu"
                    style={{ backgroundColor: "#4b5c6b", marginTop: "18px", borderRadius: "5px" }}
                  >
                    Profile of Anshu
                  </Button>
                </center>
              </CardBody>
            </Card>
          </center>
        </div>

        {/* 
        <div className="myCard mycard2">
          <div className="student-img st2" style={{ height: "90%" }}>
            <img
              src={require("./../../assets/images/jatin-img.jpg")}
              alt=""
              style={{ height: "100%", width: "100%" }}
              className="photo ph2"
        
            />
          </div>
          <div className="card-name">
            <p className="card-name2">Jatin</p>
          </div>
          <div className="student-details sd">
            <p className="stud-name">Jatin Arora</p>
            <p className="stud-age">Age: 15</p>
            <p className="stud-location">Karnal</p>
            <p className="stud-goal">Gyan Ganga Montessori & Model School</p>
            <br />
            <p className="stud-brief">
              I am Jatin. I am a student of class 9th. I want to pursue
              Non-medical. I love dancing. I am very bright in studies and very
              much interested in studies. My mother is a single parent.
            </p>
          </div>
          <center>
            <a
      
              href="/jatin"
              className="edoptbtn"
              style={{
                backgroundColor: "white",
                borderRadius: "0 0 10px 10px",
                color: "black",
                padding: "6px 108px",
              }}
            >
              eDOPT
            </a>
          </center>
        </div> */}
        {/* <div className="myCard mycard2">
          <div className="student-img st2" style={{ height: "90%" }}>
            <img
              src={require("./../../assets/images/diya-img.jpg")}
              alt=""
              style={{ height: "100%", width: "100%" }}
              className="photo ph2"

            />
          </div>
          <div className="card-name">
            <p className="card-name2">Diya</p>
          </div>
          <div className="student-details sd">
            <p className="stud-name">Diya Gosain</p>
            <p className="stud-age">Age: 15</p>
            <p className="stud-location">Sonipat</p>
            <p className="stud-goal">Holy Child Senior Secondary School</p>
            <br />
            <p className="stud-brief">
              I am Diya. I am a student of class 11th. I want to pursue
              Non-medical. I love dancing. I am very bright in studies and very
              much interested in studies. My father runs a small business.
            </p>
          </div>
          <center>
            <a
         
              href="/diya"
              className="edoptbtn"
              style={{
                backgroundColor: "white",
                borderRadius: "0 0 10px 10px",
                color: "black",
                padding: "6px 108px",
              }}
            >
              eDOPT
            </a>
          </center>
        </div> */}
        {/* 
        <div className="myCard mycard2">
          <div className="student-img st2" style={{ height: "90%" }}>
            <img
              src={require("./../../assets/images/anshu-img.jpg")}
              alt=""
              style={{ height: "100%", width: "100%" }}
              className="photo ph2"
         
            />
          </div>
          <div className="card-name">
            <p className="card-name2">Anshu</p>
          </div>
          <div className="student-details sd">
            <p className="stud-name">Anshu</p>
            <p className="stud-age">Age: 15</p>
            <p className="stud-location">Karnal</p>
            <p className="stud-goal">Gyan Ganga Montessori & Model School</p>
            <br />
            <p className="stud-brief">
              I am Anshu. I am a student of class 10th. I am a topper of my school. I want to become a doctor so one day I can save millions of lifes and treat my father.
            </p>
          </div>
          <center>
            <a
      
              href="/anshu"
              className="edoptbtn"
              style={{
                backgroundColor: "white",
                borderRadius: "0 0 10px 10px",
                color: "black",
                padding: "6px 108px",
              }}
            >
              eDOPT
            </a>
          </center>
        </div> */}



      </div>
      <br />
    </div >
  );
}
