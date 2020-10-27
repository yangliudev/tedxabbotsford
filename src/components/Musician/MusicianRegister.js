import React, { Component } from 'react';
import * as ReactBootStrap from "react-bootstrap";
import "./MusicianRegister.css"
import "mdbreact/dist/css/mdb.css";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

class MusicianRegister extends Component {
    

    render() {
   
        function ShowTextArea() {
            var textArea = document.getElementById("myDIV");
          
              textArea.style.display = "block";
         
          }
    
          function HideTextArea() {
            var textArea = document.getElementById("myDIV");
            
              textArea.style.display = "none";
          
          }
        
        return (
            <ReactBootStrap.Container className="top-space">
                <div className="bg-display" >

                    <ReactBootStrap.Row className="justify-content-md-center" >
                        <ReactBootStrap.Col><h1 class="info">Register to Become a Musician!</h1>
                        </ReactBootStrap.Col>
                    </ReactBootStrap.Row>

                    <ReactBootStrap.Form>
                        <ReactBootStrap.Container >
                            <ReactBootStrap.Row  >
                                <ReactBootStrap.Col md={{ span: 8, offset: 2 }} >

                                    <ReactBootStrap.Form.Group controlId="formGridfname" >
                                        <ReactBootStrap.Form.Label id='font'>Personal Information</ReactBootStrap.Form.Label>
                                        <ReactBootStrap.Form.Control type="text" placeholder="First Name" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="text" placeholder="last Name" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="text" placeholder="Address" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Row>
                                        <ReactBootStrap.Col md={{ span: 4 }}>
                                            <ReactBootStrap.Form.Group controlId="formGridlname">
                                                <ReactBootStrap.Form.Control type="text" placeholder="Postal Code" />
                                            </ReactBootStrap.Form.Group>
                                        </ReactBootStrap.Col>

                                        <ReactBootStrap.Col >
                                            <ReactBootStrap.Form.Group controlId="formGridlname">
                                                <ReactBootStrap.Form.Control type="text" placeholder="Locality/City" />
                                            </ReactBootStrap.Form.Group>
                                        </ReactBootStrap.Col>
                                    </ReactBootStrap.Row>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="text" placeholder="Province" />
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Phone: 012-345-6789" />
                                    </ReactBootStrap.Form.Group>


                                    <ReactBootStrap.Form.Group controlId="formGridfname">
                                        <ReactBootStrap.Form.Label id='font'>Banking Information</ReactBootStrap.Form.Label>
                                        <ReactBootStrap.Form.Control type="text" placeholder="IBAN" />
                                    </ReactBootStrap.Form.Group>


                                    <ReactBootStrap.Form.Group controlId="formGridfname">
                                        <ReactBootStrap.Form.Label id='font'>Account Information</ReactBootStrap.Form.Label>
                                        <MDBInput className='white-text' label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                            success="right" />
                                        <MDBInput className='white-text' label="Type your password" icon="lock" group type="password" validate />
                                   
                                    </ReactBootStrap.Form.Group>

                                    
                                   

                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Control type="text" placeholder="Confirm Password" />
                                    </ReactBootStrap.Form.Group>


                                    <ReactBootStrap.Form.Group controlId="formGridlname">
                                        <ReactBootStrap.Form.Label id='font'>Musical Training(s)</ReactBootStrap.Form.Label>
                                    </ReactBootStrap.Form.Group>

                                    <ReactBootStrap.Row >

                                        <ReactBootStrap.Col md={{ span:4}}>
                                            <div class="custom-control custom-radio">
                                                <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" onClick={HideTextArea}/>
                                                    <label class="custom-control-label" for="defaultGroupExample1">Master</label>
                                                    </div>

                                                <div class="custom-control custom-radio">
                                                    <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" onClick={HideTextArea} />
                                                        <label class="custom-control-label" for="defaultGroupExample2">Currently in School</label>
                                                        </div>

                                                   
                                        </ReactBootStrap.Col>

                                                    <ReactBootStrap.Col md={{ span:6}} >
                                                    <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" id="defaultGroupExample3" name="groupOfDefaultRadios" onClick={HideTextArea} />
                                                            <label class="custom-control-label" for="defaultGroupExample3">Bachelor</label>
                                                        </div>
                                                        <div class="custom-control custom-radio">
                                                        <input type="radio" class="custom-control-input" id="defaultGroupExample4" name="groupOfDefaultRadios" onClick={ShowTextArea} />
                                                            <label class="custom-control-label" for="defaultGroupExample4">Other</label>
                                                        </div>
                                                        <div class="form-group shadow-textarea" id="myDIV" onLoad={HideTextArea}>
                                                        <label for="exampleFormControlTextarea6"></label>
                                                        <textarea class="form-control z-depth-1" id="exampleFormControlTextarea6" rows="5" placeholder="Other Qualifications..."></textarea>
                                                        </div>
                                           
                                                        
                                                    </ReactBootStrap.Col>

                                    </ReactBootStrap.Row>

                                                <ReactBootStrap.Form.Group controlId="formGridlname">
                                                    <ReactBootStrap.Form.Label id='font'>Professional Information</ReactBootStrap.Form.Label>
                                                </ReactBootStrap.Form.Group>

                                                <ReactBootStrap.Form.Group controlId="formGridlname" style={{marginBottom:'1px'}}>
                                                    <ReactBootStrap.Form.Label><i>Instruments</i></ReactBootStrap.Form.Label>
                                                </ReactBootStrap.Form.Group>

                                                <ReactBootStrap.Row >
                                                    <ReactBootStrap.Col md={{ span:3}} >
                                                    <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="instruments0"/>
                                                        <label class="custom-control-label" for="instruments0">Voice</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="instruments1"/>
                                                        <label class="custom-control-label" for="instruments1">Piano</label>
                                                        </div>
                                                        <div class="custom-control custom-checkbox">
                                                        <input type="checkbox" class="custom-control-input" id="instruments2"/>
                                                        <label class="custom-control-label" for="instruments2">Guitar</label>
                                                        </div>
                                                    </ReactBootStrap.Col>

                                                    <ReactBootStrap.Col md={{ span:3}}>
                                                        <ReactBootStrap.Form.Group controlId="formGridRadio">

                                                            <ReactBootStrap.Form.Check type="checkbox" label='Singing' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Saxophone' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Viola-Copper' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Bassoon' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Flute' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Horn' />
                                                        </ReactBootStrap.Form.Group>
                                                    </ReactBootStrap.Col>

                                                    <ReactBootStrap.Col md={{ span:3}}>

                                                        <ReactBootStrap.Form.Group controlId="formGridRadio">

                                                            <ReactBootStrap.Form.Check type="checkbox" label='Guitar' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Accordian' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Clarinet' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Cello' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Percussion' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Alphorn' />
                                                        </ReactBootStrap.Form.Group>
                                                    </ReactBootStrap.Col>
                                                    
                                                    

                                                </ReactBootStrap.Row>
                                               
                                                    <ReactBootStrap.Form.Group controlId="formGridlname" style={{marginBottom:'40px'}}>
                                                    <ReactBootStrap.Form.Control type="text" placeholder="Other Instrument" />
                                                </ReactBootStrap.Form.Group>
                                   

                                               

                                                <ReactBootStrap.Form.Group controlId="formGridlname" style={{marginBottom:'1px'}}>
                                                    <ReactBootStrap.Form.Label><i>Music Styles</i></ReactBootStrap.Form.Label>
                                                </ReactBootStrap.Form.Group>

                                                <ReactBootStrap.Row>
                                                    <ReactBootStrap.Col  >
                                                        <ReactBootStrap.Form.Group controlId="formGridlname">
                                                            <ReactBootStrap.Form.Label>Classical Styles</ReactBootStrap.Form.Label>
                                                        </ReactBootStrap.Form.Group>
                                                        <ReactBootStrap.Form.Group controlId="formGridlname">
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Baroque' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Classic' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Contemporary' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Lied' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Opera' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Romantic' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Sacred' />
                                                        </ReactBootStrap.Form.Group>
                                                    </ReactBootStrap.Col>

                                                    <ReactBootStrap.Col >
                                                        <ReactBootStrap.Form.Group controlId="formGridlname">
                                                            <ReactBootStrap.Form.Label>Popular Styles</ReactBootStrap.Form.Label>
                                                        </ReactBootStrap.Form.Group>
                                                        <ReactBootStrap.Form.Group controlId="formGridRadio">
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Songwriter' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Blues' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Brass band' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Musical comedy' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Country' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Fado' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Fanfare' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Flamenco' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Folk' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Swiss Folk' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='French' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Irish' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Italian' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Klezmer' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Mariachi' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Popular' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Rock' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Salsa' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Tango' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='World Music' />
                                                        </ReactBootStrap.Form.Group>
                                                    </ReactBootStrap.Col>

                                                    <ReactBootStrap.Col >
                                                        <ReactBootStrap.Form.Group controlId="formGridlname">
                                                            <ReactBootStrap.Form.Label>Jazz Styles</ReactBootStrap.Form.Label>
                                                        </ReactBootStrap.Form.Group>

                                                        <ReactBootStrap.Form.Group controlId="formGridRadio">

                                                            <ReactBootStrap.Form.Check type="checkbox" label='Afro Jazz' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Songwriter' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Be-bop' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Bossanove' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Contemporary' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Free Jazz' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Funk' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Gospel' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Jazz' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Latin Jazz' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Manouche' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='New Orleans' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='R n B' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Salsa' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Drunk' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Swing' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Traditional' />

                                                        </ReactBootStrap.Form.Group>
                                                    </ReactBootStrap.Col>
                                                </ReactBootStrap.Row>

                                                <ReactBootStrap.Row>

                                                    <ReactBootStrap.Col >
                                                        <ReactBootStrap.Form.Group controlId="formGridlname" style={{marginBottom:'1px'}}>
                                                            <ReactBootStrap.Form.Label><i>You Play In?</i></ReactBootStrap.Form.Label>
                                                        </ReactBootStrap.Form.Group>
                                                        <ReactBootStrap.Form.Group controlId="formGridlname">
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Solo' />
                                                            <ReactBootStrap.Form.Check type="checkbox" label='Duet' />
                                                        </ReactBootStrap.Form.Group>
                                                    </ReactBootStrap.Col>
                                                </ReactBootStrap.Row>

                                                <ReactBootStrap.Form.Group controlId="formGridlname">
                                                    <ReactBootStrap.Form.Label><i>Media</i></ReactBootStrap.Form.Label>
                                                    <ReactBootStrap.Form.Control type="text" placeholder="Website" />
                                                </ReactBootStrap.Form.Group>
                                                <ReactBootStrap.Form.Group controlId="formGridlname">
                                                    <ReactBootStrap.Form.Control type="text" placeholder="YouTube/Drive/Dropbox Link" />
                                                </ReactBootStrap.Form.Group>

                                                <ReactBootStrap.Form.Group controlId="formGridlname">
                                                    <ReactBootStrap.Form.Label id='font'>Availability</ReactBootStrap.Form.Label>
                                                </ReactBootStrap.Form.Group>

                                                <ReactBootStrap.Button variant="primary" size="md" type='submite'>
                                                    Register
                            </ReactBootStrap.Button>{''}

                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>

                                        <ReactBootStrap.Row>
                                            <ReactBootStrap.Col>



                                                {/* <div class="form-check">
                                        <input type="radio" class="form-check-input" id="materialUnchecked" name="materialExampleRadi" />
                                        <label class="form-check-label" for="materialUnchecked">Material unchecked</label>
                                    </div>


                                    <div class="form-check">
                                        <input type="radio" class="form-check-input" id="materialChecked" name="materialExampleRadi" />
                                        <label class="form-check-label" for="materialChecked">Material checked</label>
                                    </div> */}

                                            </ReactBootStrap.Col>
                                        </ReactBootStrap.Row>


                        </ReactBootStrap.Container>
                    </ReactBootStrap.Form>

                </div>
                        </ReactBootStrap.Container>

        )
    };
};

export default MusicianRegister