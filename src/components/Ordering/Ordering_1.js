import React, { Component, useEffect, useState } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import Axios from 'axios';

import "./Ordering.css"
import pic1 from "./ordering-assets/GRANDMERE2.png"
import pic2 from "./ordering-assets/02-picto-artiste.png"
import pic3 from "./ordering-assets/institutionnew - Copy.png"
import pic4 from "./ordering-assets/03-picto-don.png"

import pic5 from "./ordering-assets/violonsiteblanc.png"
import pic6 from "./ordering-assets/accordeonisteblanc.png"
import pic7 from "./ordering-assets/saxoblanc.png"
import pic8 from "./ordering-assets/tresorblanc.png"

import pic9 from "./ordering-assets/musiciennesolo.png"
import pic10 from "./ordering-assets/duomusiciens.png"


import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'


function Ordering_1() {
  function hide1() {
    var x = document.getElementById("order1")
    x.style.display = "none";
    document.getElementById("order2").style.display = "block"
  }
  function hide2() {
    var x = document.getElementById("order2")
    x.style.display = "none";
    document.getElementById("order3").style.display = "block"
  }
  function hide3() {
    var x = document.getElementById("order3")
    x.style.display = "none";
    document.getElementById("order4").style.display = "block"
  }
  function hide4() {
    var x = document.getElementById("order4")
    x.style.display = "none";
    document.getElementById("order5").style.display = "block"
  }
  function hide5() {
    var x = document.getElementById("order5")
    x.style.display = "none";
    document.getElementById("order6").style.display = "block"
  }
  function hide6() {
    var x = document.getElementById("order6")
    x.style.display = "none";
    document.getElementById("orderConfirm").style.display = "block"
  }



  const [musicianName, setMusicianName] = useState("");
  const [musicianType, setMusicianType] = useState("");
  const [musicanList, setMusicanList] = useState([]);


  const [gift, setGift] = useState("");
  const [occasion, setOccasion] = useState("");
  const [type, setType] = useState("");
  const [numberMusicians, setNumberMusicians] = useState("");
  const [suprise, setSuprise] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateService, setDateService] = useState("");
  const [timeService, setTimeService] = useState("");
  const [offered, setOffered] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [comments, setComments] = useState("");

  const submitOrder = () => {
    Axios.post("http://localhost:5000/order/insert", {
      orderGift: gift,
      orderOccasion: occasion,
      orderType: type,
      orderNumberMusicians: numberMusicians,
      orderSuprise: suprise,
      orderFirstName: firstName,
      orderLastName: lastName,
      orderDateService: dateService,
      orderTimeService: timeService,
      orderOffered: offered,
      orderNumber: number,
      orderEmail: email,
      orderAddress: address,
      orderAddress2: address2,
      orderCity: city,
      orderState: state,
      orderZip: zip,
      orderComments: comments
    }).then(() => {
      alert("sucessful insert");
    })
  };



  useEffect(() => {
    Axios.get("http://localhost:5000/api/get").then((response) => {
      // console.log(response.data)
      setMusicanList(response.data)
    })
  })

  const submitMusician = () => {
    Axios.post("http://localhost:5000/api/insert", {
      musicianName: musicianName,
      musicianType: musicianType
    }).then(() => {
      alert("sucessful insert");
    })
  };

  return (

    <ReactBootStrap.Container className="top-space">
      <div className="bg-display" id="order1">
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>1. Who do you wish to give this gift to?</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row>
          {/* <input type="text" name="musicianName" onChange={(e) => {setMusicianName(e.target.value);}}></input>
              {/* <input type="text" name="musicianType" onChange={(e) => {setMusicianType(e.target.value);}}></input> */}
          {/* <Form.Control placeholder="yourname@gmail.com" onChange={(e) => {setMusicianType(e.target.value);}}/> */}
          {/* <button onClick={submitMusician}>Submit</button> */}


          {/* {musicanList.map((val) => {
                return <h5>{val.name}<br /></h5>
              })} */}


          <div className="bg-display-test">
            <ReactBootStrap.Col>
              <a onClick={(e) => { setGift("one person"); hide1(); }}><img src={pic1} className="pic" /><p>One Person In Particular</p></a>
            </ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setGift("small committee"); hide1(); }}><img src={pic2} className="pic" /><p>A Small Committee</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setGift("institution"); hide1(); }}><img src={pic3} className="pic" /><p>An <br />Institution</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setGift("donate"); hide1(); }}><img src={pic4} className="pic" /><p>Donate To The Platform</p></a></ReactBootStrap.Col>
          </div>
        </ReactBootStrap.Row>
      </div>



      <div className="bg-display" id="order2">
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>2. For Which Occasion?</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginLeft: '10px', marginBottom: '10px' }}>
          <ReactBootStrap.Col><h4>Explain to us in a few words for which event you are offering music! (birthday, friends, etc.)</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{ marginLeft: '20px', marginRight: '20px' }}>
            <div class="md-form">
              <input style={{ color: 'white' }} type="text" id="form1" class="form-control" onChange={(e) => { setOccasion(e.target.value); }} />
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row>
          <ReactBootStrap.Col style={{ marginLeft: '20px', marginTop: '20px' }}>
            <ReactBootStrap.Button variant="danger" className='button' onClick={hide2}><a>Submit</a></ReactBootStrap.Button>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </div>




      <div className="bg-display" id="order3">
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>3. What Type of Musican in you Garden?</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginLeft: '2px' }}>
          <ReactBootStrap.Col><h4>Choose the style of music, we take care of finding the ideal musician, available near you.</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("classic"); hide3(); }}><img src={pic5} className="pic" /><p>Classic</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("popular"); hide3(); }}><img src={pic6} className="pic" /><p style={{ fontSize: '19px' }}>Popular Music</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("jazzy/pop"); hide3(); }}><img src={pic7} className="pic" /><p>Jazzy - Pop</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setType("suprise"); hide3(); }}><img src={pic8} className="pic" /><p>Suprise!</p></a></ReactBootStrap.Col>
          </div>
        </ReactBootStrap.Row>
      </div>




      <div className="bg-display" id="order4">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>4. Number of Musicians</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row className="justify-content-md-center" style={{ marginLeft: '2px' }}>
          <ReactBootStrap.Col><h4>A soloist or a duo for 20 minutes</h4></ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row sm={1} md={3}>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setNumberMusicians("solo"); hide4(); }}><img src={pic9} className="pic2" /><p>Soloist</p></a></ReactBootStrap.Col>
          </div>
          <div className="bg-display-test">
            <ReactBootStrap.Col><a onClick={(e) => { setNumberMusicians("duo"); hide4(); }}><img src={pic10} className="pic2" /><p>Duo</p></a></ReactBootStrap.Col>
          </div>
        </ReactBootStrap.Row>
      </div>




      <div className="bg-display" id="order5">

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col><h3>5. Is it a suprise?</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row sm={1} md={6}>
          <a onClick={(e) => { setSuprise("yes"); hide5(); }}><div className="bg-display-button">
            <ReactBootStrap.Col><p>Yes</p></ReactBootStrap.Col>
          </div>
          </a>
        </ReactBootStrap.Row>
        <ReactBootStrap.Row sm={1} md={6}>
          <a onClick={(e) => { setSuprise("no"); hide5(); }}>
            <div style={{ marginTop: '8px', paddingRight: "5px" }} className="bg-display-button">
              <ReactBootStrap.Col><p>No</p></ReactBootStrap.Col>
            </div>
          </a>
        </ReactBootStrap.Row>
      </div>




      <div className="bg-display" id="order6">



        <Form style={{ marginLeft: '20px', marginRight: "20px", paddingTop: '10px', marginBottom: "-20px" }}>

          <Form.Row className="justify-content-md-center">
            <Form.Group as={Col} xs={7} controlId="formGridFirstName">
              <Form.Label className="a">Beneficiary First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" onChange={(e) => { setFirstName(e.target.value); }} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" onChange={(e) => { setLastName(e.target.value); }} />
            </Form.Group>
          </Form.Row>

          <div className="w-50 d-inline-block">
            <Form.Group controlId="formGridDate">
              <Form.Label>Date of Service</Form.Label>
              <h6><i>The order must be placed at least 72 hours in advance to be considered.</i></h6>
              <Form.Control type="date" placeholder="1234 Main St" onChange={(e) => { setDateService("2020-01-01 10:10:10"); }} />
            </Form.Group>

            <Form.Group controlId="formGridTime">
              <Form.Label>Time of Service</Form.Label>
              <h6><i>Enter the time between 08:00 and 21:00 maximum</i></h6>
              <Form.Control type="time" placeholder="1234 Main St" onChange={(e) => { setTimeService(e.target.value); }} />
            </Form.Group>

            <Form.Group controlId="formGridHost">
              <Form.Label>Offered by</Form.Label>
              <Form.Control type="text" placeholder="Answer here" onChange={(e) => { setOffered(e.target.value); }} />
            </Form.Group>

            <Form.Group controlId="formGridPhone">
              <Form.Label>Contact Number</Form.Label>
              <h6><i>Please enter a canadian number</i> </h6>
              <Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="012-345-6789" onChange={(e) => { setNumber(e.target.value); }} />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control placeholder="yourname@gmail.com" onChange={(e) => { setEmail(e.target.value); }} />
            </Form.Group>


            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address 1</Form.Label>
              <Form.Control placeholder="1234 Main St" onChange={(e) => { setAddress(e.target.value); }} />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" onChange={(e) => { setAddress2(e.target.value); }} />
            </Form.Group>
          </div>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control onChange={(e) => { setCity(e.target.value); }} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose..." onChange={(e) => { setState("British Columbia"); }}>
                <option>British Columbia</option>
                <option>Alberta</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={(e) => { setZip(e.target.value); }} />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridComment">
            <Form.Label>Additional Comments</Form.Label>
            <h6><i>Leave us a little comment that will help us better target the event and the artist.</i></h6>
            <Form.Control as="textarea" rows={3} placeholder="Anything you'd like us to know" onChange={(e) => { setComments(e.target.value); }} />
          </Form.Group>
          <ReactBootStrap.Button variant="danger" className='button' onClick={hide6}>Submit</ReactBootStrap.Button>
        </Form>
      </div>





      <div className="bg-display" id="orderConfirm">
        <div style={{marginLeft:"30px"}}>
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><h3>Confirm Order</h3></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Gifted to:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{gift}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Occasion:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{occasion}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Type:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{type}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Number of Musicians:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{numberMusicians}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Suprise:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto" ><p>{suprise}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">First Name:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{firstName}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Last Name:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{lastName}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Date of Service:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{dateService}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Time of Service:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{timeService}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Offered:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{offered}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Phone Number:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{number}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Email:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{email}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Address:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{address}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Address 2:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{address2}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">City:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{city}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">State:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{state}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Zip:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{zip}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col md="auto"><p className="intro">Comments:</p></ReactBootStrap.Col>
          <ReactBootStrap.Col md="auto"><p>{comments}</p></ReactBootStrap.Col>
        </ReactBootStrap.Row>


        <ReactBootStrap.Row className="justify-content-md-center"> 
          <a href={process.env.PUBLIC_URL + '/#/'}><ReactBootStrap.Button md="auto" variant="danger" className='button' onClick={submitOrder}>Submit</ReactBootStrap.Button></a>
        </ReactBootStrap.Row>

        </div>

      </div>

















    </ReactBootStrap.Container>















  )
};

export default Ordering_1