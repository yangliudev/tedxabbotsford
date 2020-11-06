import React, { Component, useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import ScheduleSelector from 'react-schedule-selector';
import Axios from "axios";
import "./MusicianRegister.css";
import "mdbreact/dist/css/mdb.css";
import { Satellite } from "@material-ui/icons";


function MusicianRegister() {


  const [state, setSchedule] = useState({});
  const [mon, setMon] = useState("");
  const [tue, setTue] = useState("");
  const [wed, setWed] = useState("");
  const [thu, setThu] = useState("");
  const [fri, setFri] = useState("");
  const [sat, setSat] = useState("");
  const [sun, setSun] = useState("");

  const handleChange = newSchedule => {
    setSchedule({ schedule: newSchedule });

  }

  const seperate = () => {

    let monx = [];
    let tuex = [];
    let wedx = [];
    let thux = [];
    let frix = [];
    let satx = [];
    let sunx = [];

    for (let index = 0; index < state.schedule.length; index++) {
      if (state.schedule[index].getDate() == 2) {
        monx.push(state.schedule[index]);

      } if (state.schedule[index].getDate() == 3) {
        tuex.push(state.schedule[index]);

      } if (state.schedule[index].getDate() == 4) {
        wedx.push(state.schedule[index]);


      } if (state.schedule[index].getDate() == 5) {
        thux.push(state.schedule[index]);

      } if (state.schedule[index].getDate() == 6) {
        frix.push(state.schedule[index]);

      } if (state.schedule[index].getDate() == 7) {
        satx.push(state.schedule[index]);

      } if (state.schedule[index].getDate() == 8) {
        sunx.push(state.schedule[index]);
      }
    }
    setMon(JSON.stringify(monx));
    setTue(JSON.stringify(tuex));
    setWed(JSON.stringify(wedx));
    setThu(JSON.stringify(thux));
    setFri(JSON.stringify(frix));
    setSat(JSON.stringify(satx));
    setSun(JSON.stringify(sunx));

    // // var d = new Date("2020-11-02T20:00:00.000Z");
    // console.log(mon); 
    if (state.schedule.length == 0) {
      alert("nothing has been selected")
    }
  }

  function ShowTextArea() {
    var textArea = document.getElementById("myDIV");
    textArea.style.display = "block";
  }

  function HideTextArea() {
    var textArea = document.getElementById("myDIV");
    textArea.style.display = "none";
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [phone, setPhone] = useState("");
  const [iban, setIban] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [training, setTraining] = useState("");
  const [othertraining, setOtherTraining] = useState("");
  const [instrument, setInstrument] = useState("");
  const [style, setStyle] = useState("");
  const [group, setGroup] = useState("");
  const [site, setSite] = useState("");
  const [media, setMedia] = useState("");

  const submitMusician = () => {
    const instrumentList = JSON.stringify(instrument);
    const styleList = JSON.stringify(style);
    Axios.post("http://localhost:5000/musician/insert", {
      musicianFirstName: firstName,
      musicianLastName: lastName,
      musicianAddress: address,
      musicianPostalCode: postalCode,
      musicianCity: city,
      musicianProvince: province,
      musicianPhone: phone,
      musicianIban: iban,
      musicianEmail: email,
      musicianPassword: password,
      musicianConfirmPassword: confirmpassword,
      musicianTraining: training,
      musicianOtherTraining: othertraining,
      musicianInstrument: instrumentList,
      musicianStyle: styleList,
      musicianGroup: group,
      musicianSite: site,
      musicianMedia: media,
      monday: mon,
      tuesday: tue,
      wednesday: wed,
      thursday: thu,
      friday: fri,
      saturday: sat,
      sunday: sun

    }).then(() => {
      alert("sucessful insert");
    });
  };



  return (
    <ReactBootStrap.Container className="top-space">
      <div className="bg-display-reg">
        <ReactBootStrap.Row className="justify-content-md-center">
          <ReactBootStrap.Col>
            <h1 class="info">Register to Become a Musician!</h1>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>

        <ReactBootStrap.Form>
          <ReactBootStrap.Container>
            <ReactBootStrap.Row>
              <ReactBootStrap.Col md={{ span: 8, offset: 2 }}>
                <ReactBootStrap.Form.Group controlId="formGridfname">
                  <ReactBootStrap.Form.Label id="font">
                    Personal Information
                  </ReactBootStrap.Form.Label>

                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="last Name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Address"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 4 }}>
                    <ReactBootStrap.Form.Group controlId="formGridlname">
                      <ReactBootStrap.Form.Control
                        type="text"
                        placeholder="Postal Code"
                        onChange={(e) => {
                          setPostalCode(e.target.value);
                        }}
                      />
                    </ReactBootStrap.Form.Group>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col>
                    <ReactBootStrap.Form.Group controlId="formGridlname">
                      <ReactBootStrap.Form.Control
                        type="text"
                        placeholder="Locality/City"
                        onChange={(e) => {
                          setCity(e.target.value);
                        }}
                      />
                    </ReactBootStrap.Form.Group>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Province"
                    onChange={(e) => {
                      setProvince(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="Phone: 012-345-6789"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label id="font">
                    Banking Information
                  </ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="IBAN"
                    onChange={(e) => {
                      setIban(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label id="font">
                    Account Information
                  </ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="E-mail"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Control
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formGridlname">
                  <ReactBootStrap.Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                {/* ############TRAINING###########    */}
                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label id="font">
                    Musical Training(s)
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 4 }}>
                    <div >

                      <label for='master'>
                        <input type="radio" id='master' name="groupOfDefaultRadios" onClick={
                          (HideTextArea,
                            (e) => {
                              setTraining("Bachelor");; HideTextArea()
                            })
                        } />
                        <span>Master</span>
                      </label>

                    </div>

                    <div >

                      <label for='inschool'>
                        <input type="radio" id='inschool' name="groupOfDefaultRadios" onClick={
                          (HideTextArea,
                            (e) => {
                              setTraining("Bachelor");; HideTextArea()
                            })
                        } />
                        <span>Currently in School</span>
                      </label>

                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 6 }}>
                    <div>
                      <label for='bachelor'>
                        <input type="radio" id='bachelor' name="groupOfDefaultRadios" onClick={
                          (HideTextArea,
                            (e) => {
                              setTraining("Bachelor");; HideTextArea()
                            })
                        } />
                        <span>Bachelor</span>
                      </label>
                    </div>
                    <div >

                      <label for='Other'>
                        <input type="radio" id='Other' name="groupOfDefaultRadios" onClick={ShowTextArea} />
                        <span>Other</span>
                      </label>
                    </div>
                    <div
                      class="form-group shadow-textarea"
                      id="myDIV"
                      onLoad={HideTextArea}
                    >
                      <label for="exampleFormControlTextarea6"></label>
                      <textarea
                        class="form-control z-depth-1"
                        id="exampleFormControlTextarea6"
                        rows="5"
                        placeholder="Other Qualifications..."
                        onChange={(e) => {
                          setOtherTraining(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>


                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label id="font">
                    Professional Information
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group
                  style={{ marginBottom: "1px" }}
                >

                  {/* ############INSTRUMENTS###########    */}

                  <ReactBootStrap.Form.Label>
                    <i>Instruments</i>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("voice")) { instrument.splice(instrument.indexOf("voice"), 1) } else { setInstrument([...instrument, "voice"]); } }}
                        />
                        <span>Voice</span>
                      </label>
                    </div>

                    <div >
                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("piano")) { instrument.splice(instrument.indexOf("piano"), 1) } else { setInstrument([...instrument, "piano"]); } }}
                        />
                        <span>Piano</span>
                      </label>

                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("harp")) { instrument.splice(instrument.indexOf("harp"), 1) } else { setInstrument([...instrument, "harp"]); } }}
                        />
                        <span>Harp</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("trumbone")) { instrument.splice(instrument.indexOf("trumbone"), 1) } else { setInstrument([...instrument, "trumbone"]); } }}
                        />
                        <span>Trumbone</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("trumpet")) { instrument.splice(instrument.indexOf("trumpet"), 1) } else { setInstrument([...instrument, "trumpet"]); } }}
                        />
                        <span>Trumpet</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("bass")) { instrument.splice(instrument.indexOf("bass"), 1) } else { setInstrument([...instrument, "bass"]); } }}
                        />
                        <span>Bass</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <div>

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("singing")) { instrument.splice(instrument.indexOf("singing"), 1) } else { setInstrument([...instrument, "singing"]); } }}
                        />
                        <span>Singing</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("saxophone")) { instrument.splice(instrument.indexOf("saxophone"), 1) } else { setInstrument([...instrument, "saxophone"]); } }}
                        />
                        <span>Saxophone</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("viola-copper")) { instrument.splice(instrument.indexOf("viola-copper"), 1) } else { setInstrument([...instrument, "viola-copper"]); } }}
                        />
                        <span>Viola-Copper</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("bassoon")) { instrument.splice(instrument.indexOf("bassoon"), 1) } else { setInstrument([...instrument, "bassoon"]); } }}
                        />
                        <span>Bassoon</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("flute")) { instrument.splice(instrument.indexOf("flute"), 1) } else { setInstrument([...instrument, "flute"]); } }}
                        />
                        <span>Flute</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("horn")) { instrument.splice(instrument.indexOf("horn"), 1) } else { setInstrument([...instrument, "horn"]); } }}
                        />
                        <span>Horn</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <div>

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("guitar")) { instrument.splice(instrument.indexOf("guitar"), 1) } else { setInstrument([...instrument, "guitar"]); } }}
                        />
                        <span>Guitar</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("accordion")) { instrument.splice(instrument.indexOf("accordion"), 1) } else { setInstrument([...instrument, "accordion"]); } }}
                        />
                        <span>Accordion</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("clarinet")) { instrument.splice(instrument.indexOf("clarinet"), 1) } else { setInstrument([...instrument, "clarinet"]); } }}
                        />
                        <span>Clarinet</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("cello")) { instrument.splice(instrument.indexOf("cello"), 1) } else { setInstrument([...instrument, "cello"]); } }}
                        />
                        <span>Cello</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("percussion")) { instrument.splice(instrument.indexOf("percussion"), 1) } else { setInstrument([...instrument, "percussion"]); } }}
                        />
                        <span>Percussion</span>
                      </label>
                    </div>
                    <div >

                      <label>
                        <input type="checkbox"
                          onChange={() => { if (instrument.includes("alphorn")) { instrument.splice(instrument.indexOf("alphorn"), 1) } else { setInstrument([...instrument, "alphorn"]); } }}
                        />
                        <span>Alphorn</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group

                  style={{ marginBottom: "40px", marginTop: "15px" }}>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Other Instrument"
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group

                  style={{ marginBottom: "1px" }}
                >

                                  {/* ############STYLE###########    */}

                  <ReactBootStrap.Form.Label>
                    <i>Music Styles</i>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>
                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <ReactBootStrap.Form.Group >
                      <ReactBootStrap.Form.Label>
                        Classical Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>
                    <div >

                      <label>
                        <input type="checkbox"                           
                        onChange={() => { if (style.includes("baroque")) { style.splice(style.indexOf("baroque"), 1) } else { setStyle([...style, "baroque"]); } }}
 />
                        <span>Baroque</span>
                      </label>
                    </div>

                    <div>

                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("classic")) { style.splice(style.indexOf("classic"), 1) } else { setStyle([...style, "classic"]); } }}
 />
                        <span>Classic</span>
                      </label>
                    </div>
                    <div>

                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("contemporary")) { style.splice(style.indexOf("contemporary"), 1) } else { setStyle([...style, "contemporary"]); } }}
/>
                        <span>Contemporary</span>
                      </label>
                    </div>
                    <div>

                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("lied")) { style.splice(style.indexOf("lied"), 1) } else { setStyle([...style, "lied"]); } }}
 />
                        <span>Lied</span>
                      </label>

                    </div>
                  
                    <div >
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("romantic")) { style.splice(style.indexOf("romantic"), 1) } else { setStyle([...style, "romantic"]); } }}
 />
                        <span>Romantic</span>
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("Sacred")) { style.splice(style.indexOf("Sacred"), 1) } else { setStyle([...style, "Sacred"]); } }}
 />
                        <span>Sacred</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <ReactBootStrap.Form.Group >
                      <ReactBootStrap.Form.Label>
                        Popular Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("songwriter")) { style.splice(style.indexOf("songwriter"), 1) } else { setStyle([...style, "songwriter"]); } }}
 />
                        <span>Songwriter</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("blues")) { style.splice(style.indexOf("blues"), 1) } else { setStyle([...style, "blues"]); } }}
 />
                        <span>Blues</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                        
                        onChange={() => { if (style.includes("brass-band")) { style.splice(style.indexOf("brass-band"), 1) } else { setStyle([...style, "brass-band"]); } }}
 />
                        <span>Brass Band</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("musical-comedy")) { style.splice(style.indexOf("musical-comedy"), 1) } else { setStyle([...style, "musical-comedy"]); } }}
 />
                        <span>Musical Comedy</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("country")) { style.splice(style.indexOf("country"), 1) } else { setStyle([...style, "country"]); } }}
 />
                        <span>Country</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("fado")) { style.splice(style.indexOf("fado"), 1) } else { setStyle([...style, "fado"]); } }}
 />
                        <span>Fado</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("fanfare")) { style.splice(style.indexOf("fanfare"), 1) } else { setStyle([...style, "fanfare"]); } }}
 />
                        <span>Fanfare</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("flamenco")) { style.splice(style.indexOf("flamenco"), 1) } else { setStyle([...style, "flamenco"]); } }}
 />
                        <span>Flamenco</span>
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="checkbox"                        
                        onChange={() => { if (style.includes("folk")) { style.splice(style.indexOf("folk"), 1) } else { setStyle([...style, "folk"]); } }}
 />
                        <span>Folk</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                        
                        onChange={() => { if (style.includes("swiss-folk")) { style.splice(style.indexOf("swiss-folk"), 1) } else { setStyle([...style, "swiss-folk"]); } }}
/>
                        <span>Swiss Folk</span>
                      </label>
                    </div>


                  </ReactBootStrap.Col>
                  <ReactBootStrap.Col >
                    <ReactBootStrap.Form.Group >
                      <ReactBootStrap.Form.Label>
                        Popular Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>

                    <div>
                      <label>
                        <input type="checkbox"                        
                         onChange={() => { if (style.includes("french")) { style.splice(style.indexOf("french"), 1) } else { setStyle([...style, "french"]); } }}
 />
                        <span>French</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("irish")) { style.splice(style.indexOf("irish"), 1) } else { setStyle([...style, "irish"]); } }}
 />
                        <span>Irish</span>
                      </label>
                    </div>

                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("italian")) { style.splice(style.indexOf("italian"), 1) } else { setStyle([...style, "italian"]); } }}
/>
                        <span>Italian</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("klezmer")) { style.splice(style.indexOf("klezmer"), 1) } else { setStyle([...style, "klezmer"]); } }}
 />
                        <span>Klezmer</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                        
                         onChange={() => { if (style.includes("mariachi")) { style.splice(style.indexOf("mariachi"), 1) } else { setStyle([...style, "mariachi"]); } }}
 />
                        <span>Mariachi</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("popular")) { style.splice(style.indexOf("popular"), 1) } else { setStyle([...style, "popular"]); } }}
 />
                        <span>Popular</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("rock")) { style.splice(style.indexOf("rock"), 1) } else { setStyle([...style, "rock"]); } }}
/>
                        <span>Rock</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("salsa")) { style.splice(style.indexOf("salsa"), 1) } else { setStyle([...style, "salsa"]); } }}
 />
                        <span>Salsa</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("tango")) { style.splice(style.indexOf("tango"), 1) } else { setStyle([...style, "tango"]); } }}
 />
                        <span>Tango</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("world-music")) { style.splice(style.indexOf("world-music"), 1) } else { setStyle([...style, "world-music"]); } }}
 />
                        <span>World Music</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>

                  <ReactBootStrap.Col md={{ span: 3 }}>
                    <ReactBootStrap.Form.Group >
                      <ReactBootStrap.Form.Label>
                        Jazz Styles
                      </ReactBootStrap.Form.Label>
                    </ReactBootStrap.Form.Group>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("affro-jazz")) { style.splice(style.indexOf("affro-jazz"), 1) } else { setStyle([...style, "affro-jazz"]); } }}
 />
                        <span>Afro Jazz</span>
                      </label>
                    </div>
                   
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("be-bop")) { style.splice(style.indexOf("be-bop"), 1) } else { setStyle([...style, "be-bop"]); } }}
 />
                        <span>Be-Bop</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("bossanova")) { style.splice(style.indexOf("bossanova"), 1) } else { setStyle([...style, "bossanova"]); } }}
 />
                        <span>Bossanova</span>
                      </label>
                    </div>
           
                    <div>
                      <label>
                        <input type="checkbox"                        
                         onChange={() => { if (style.includes("free-jazz")) { style.splice(style.indexOf("free-jazz"), 1) } else { setStyle([...style, "free-jazz"]); } }}
/>
                        <span>Free Jazz</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("funk")) { style.splice(style.indexOf("funk"), 1) } else { setStyle([...style, "funk"]); } }}
 />
                        <span>Funk</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("gospel")) { style.splice(style.indexOf("gospel"), 1) } else { setStyle([...style, "gospel"]); } }}
 />
                        <span>Gospel</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("jazz")) { style.splice(style.indexOf("jazz"), 1) } else { setStyle([...style, "jazz"]); } }}
/>
                        <span>Jazz</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("latin-jazz")) { style.splice(style.indexOf("latin-jazz"), 1) } else { setStyle([...style, "latin-jazz"]); } }}
 />
                        <span>Latin Jazz</span>
                      </label>
                    </div>


                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("manouche")) { style.splice(style.indexOf("manouche"), 1) } else { setStyle([...style, "manouche"]); } }}
 />
                        <span>Manouche</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("new-orleans")) { style.splice(style.indexOf("new-orleans"), 1) } else { setStyle([...style, "new-orleans"]); } }}
 />
                        <span>New Orleans</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                        
                        onChange={() => { if (style.includes("r-n-b")) { style.splice(style.indexOf("r-n-b"), 1) } else { setStyle([...style, "r-n-b"]); } }}
 />
                        <span>R'n'B</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("salsa")) { style.splice(style.indexOf("salsa"), 1) } else { setStyle([...style, "salsa"]); } }}
 />
                        <span>Salsa</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("drunk")) { style.splice(style.indexOf("drunk"), 1) } else { setStyle([...style, "drunk"]); } }}
 />
                        <span>Drunk</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("swing")) { style.splice(style.indexOf("swing"), 1) } else { setStyle([...style, "swing"]); } }}
 />
                        <span>Swing</span>
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="checkbox"                         
                        onChange={() => { if (style.includes("traditional")) { style.splice(style.indexOf("traditional"), 1) } else { setStyle([...style, "traditional"]); } }}
 />
                        <span>Traditional</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group
                  style={{ marginBottom: "1px", marginTop: "15px" }}>
                  <ReactBootStrap.Form.Label>
                    <i>You Play In?</i>
                  </ReactBootStrap.Form.Label>
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Row>

                  <ReactBootStrap.Col md={{ span: 1 }}>
                    <div>
                      <label>
                        <input type="checkbox" onChange={(e) => {
                          setGroup("solo");
                        }} />
                        <span>Solo</span>
                      </label>
                    </div>
                  </ReactBootStrap.Col>
                  <ReactBootStrap.Col>
                    <div>
                      <label>
                        <input type="checkbox" onChange={(e) => {
                          setGroup("duet");
                        }} />
                        <span>Duet</span>
                      </label>
                    </div>

                  </ReactBootStrap.Col>
                </ReactBootStrap.Row>

                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Label>
                    <i>Media</i>
                  </ReactBootStrap.Form.Label>
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="Website"
                    onChange={(e) => {
                      setSite(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group >
                  <ReactBootStrap.Form.Control
                    type="text"
                    placeholder="YouTube/Drive/Dropbox Link"
                    onChange={(e) => {
                      setMedia(e.target.value);
                    }}
                  />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Button
                  variant="primary"
                  size="md"
                  href="/#/faq"
                  onClick={submitMusician}
                >
                  Register
                </ReactBootStrap.Button>

                <ReactBootStrap.Button
                  variant="primary"
                  size="md"
                  href="/#/calender"
                >
                  Calender
                </ReactBootStrap.Button>

              </ReactBootStrap.Col>
            </ReactBootStrap.Row>


            <ReactBootStrap.Row>
              <ReactBootStrap.Col>
                <div className='topspace' >

                  <ScheduleSelector
                    selection={state.schedule}
                    numDays={7}
                    minTime={9}
                    maxTime={22}
                    hourlyChunks={1}
                    startDate={new Date('Monday Nov 02 2020 00:00:00')}
                    dateFormat="dddd"
                    onChange={handleChange}
                  /><div style={{ marginLeft: '50px', marginTop: '50px' }}>
                    <ReactBootStrap.Button
                      variant="primary"
                      size="md"
                      onClick={seperate}>
                      Submit
          </ReactBootStrap.Button>

                  </div></div>


              </ReactBootStrap.Col>
            </ReactBootStrap.Row>
          </ReactBootStrap.Container>
        </ReactBootStrap.Form>
      </div>



    </ReactBootStrap.Container>
  );
}

export default MusicianRegister;
