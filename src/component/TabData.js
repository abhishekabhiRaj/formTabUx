import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


const plusIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
</svg>);

const checkIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
</svg>);


const TabData = ({datakey,data}) => {
    console.log(data[datakey]);
  const [active, setActive] = useState([])
  const buttons = [
    "Covid-19 astraZeneca",
    "Covid-19 pfizer",
    "Herpes Zoster(Shingles)",
    "Japanese Encephalitis",
    "Bacille Calmatte-Guéri...",
    "Flue Shot",
    "Haemophilus influenzae...",
    "Hepatitis A",
    "Meningococcal disease",
    "Pneumococcal disease",
    "Varicella",
    "Hepatitis B",
    "Yellow Fever"
  ]

  return (
   
    <>
      <Container>
        <Row>
          <Col className="vaccine-tab">
            {
              buttons.map(key => {
                const isActive = active.includes(key)
                return (
                  <button
                    key={key}
                    onClick={() => setActive(isActive
                      ? active.filter(current => current !== key)
                      : [...active, key]
                    )}
                    className={isActive ? "btn-active" : "btn"}
                  >
                    <span className="m-1">
                      {
                        isActive ? checkIcon : plusIcon
                      }
                    </span>
                    <span className="m-1">{key}</span>
                  </button>

                )
              })
            }
          </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <Form>
                <Form.Group className="bg-light p-2 rounded font-sm" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" variant="danger" label="I don't know which one I need!" className="pt-1" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <hr/>
          <Row className="mt-3">
            <Col className="d-flex justify-content-between">
              <div/>
              <Button className="btn-active" style={{width:'max-content'}}> Continue </Button>
            </Col>
          </Row>
      </Container>
    </>
  )
}



export default TabData;