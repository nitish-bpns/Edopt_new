import React from "react";
import Button from "../elements/Button";

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
    >
      <h3 style={{ textAlign: "center" }}>Student Feeds</h3>
      <hr />
      <div className="sorting">
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
      <hr />
      <br />
      <div className="feed-content">
        <div className="myCard mycard2">
          <div className="student-img st2" style={{ height: "90%" }}>
            <img
              src={require("./../../assets/images/sakshi-img.jpg")}
              alt=""
              style={{ height: "100%", width: "100%" }}
              className="photo ph2"
            /* style={{ height: "140px" }} */
            />
          </div>
          <div className="card-name">
            <p className="card-name2">Sakshi</p>
          </div>
          <div className="student-details sd">
            <p className="stud-name">Sakshi</p>
            <p className="stud-age">Age: 6</p>
            <p className="stud-location">Delhi</p>
            <p className="stud-goal">Vidyadeep Public School </p>
            <br />
            <p className="stud-brief">
              I am Sakshi. I am a student of class 1st. I want to become a
              teacher. My father lost his work due to COVID
              and I have to hold my studies. Now he is working as a salesman in
              the Sadar market of Delhi and earns only INR 7000.
            </p>
          </div>
          <center>
            <a
              /* tag="a"
              color="primary" */
              href="/sakshi"
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
        </div>
        <div className="myCard mycard2">
          <div className="student-img st2" style={{ height: "90%" }}>
            <img
              src={require("./../../assets/images/jatin-img.jpg")}
              alt=""
              style={{ height: "100%", width: "100%" }}
              className="photo ph2"
            /* style={{ height: "140px" }} */
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
              /* tag="a"
              color="primary" */
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
        </div>
        <div className="myCard mycard2">
          <div className="student-img st2" style={{ height: "90%" }}>
            <img
              src={require("./../../assets/images/diya-img.jpg")}
              alt=""
              style={{ height: "100%", width: "100%" }}
              className="photo ph2"
            /* style={{ height: "140px" }} */
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
              /* tag="a"
              color="primary" */
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
        </div>

        <div className="myCard mycard2">
          <div className="student-img st2" style={{ height: "90%" }}>
            <img
              src={require("./../../assets/images/anshu-img.jpg")}
              alt=""
              style={{ height: "100%", width: "100%" }}
              className="photo ph2"
            /* style={{ height: "140px" }} */
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
              /* tag="a"
              color="primary" */
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
        </div>

        <div className="myCard mycard2">
          <div className="student-img st2" style={{ height: "90%" }}>
            <img
              src={require("./../../assets/images/priyanshu-img.png")}
              alt=""
              style={{ height: "100%", width: "100%" }}
              className="photo ph2"
            /* style={{ height: "140px" }} */
            />
          </div>
          <div className="card-name">
            <p className="card-name2">Priyanshu</p>
          </div>
          <div className="student-details sd">
            <p className="stud-name">Priyanshu Pandey</p>
            <p className="stud-age">Age: 16</p>
            <p className="stud-location">Delhi</p>
            <p className="stud-goal">Rajdhani Public School</p>
            <br />
            <p className="stud-brief">
              I am Priyanshu. I am students of class 12th. I am very bright in my studies and topper of my class. I want to become Software developer. My father is a newspaper seller.
            </p>
          </div>
          <center>
            <a
              /* tag="a"
              color="primary" */
              href="/priyanshu"
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
        </div>

        <div className="myCard mycard2">
          <div className="student-img st2" style={{ height: "90%" }}>
            <img
              src={require("./../../assets/images/divyanshu-img.png")}
              alt=""
              style={{ height: "100%", width: "100%" }}
              className="photo ph2"
            /* style={{ height: "140px" }} */
            />
          </div>
          <div className="card-name">
            <p className="card-name2">Divyanshu</p>
          </div>
          <div className="student-details sd">
            <p className="stud-name">Divyanshu Pandey</p>
            <p className="stud-age">Age: 11</p>
            <p className="stud-location">Delhi</p>
            <p className="stud-goal">Rajdhani Public School</p>
            <br />
            <p className="stud-brief">
              I am Divyanshu. I am students of class 6th. I am very bright in studies. I want to become Police officer. My father works as a labourer in a factory.
            </p>
          </div>
          <center>
            <a

              href="/divyanshu"
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
        </div>


      </div>
      <br />
    </div>
  );
}
