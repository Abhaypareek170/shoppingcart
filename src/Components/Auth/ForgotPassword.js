import React, { useState, useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [isSending, setIsSending] = useState(false);
  const emailInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    setIsSending(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAvCqS-e_A8eRdiwz3rsPhKy2v7CmvIJD0",
      {
        method: "POST",
        body: JSON.stringify({
          requestType:"PASSWORD_RESET",
          email: enteredEmail,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsSending(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(() => {
            let errorMessage = "Failed!";
            alert(errorMessage);
            throw new Error(errorMessage);
          });
        }
      })
  };
  return (
    <>
      <Container style={{ marginLeft: "33%", marginTop: "10%" }}>
        <Row>
          <Col xs={4}>
            <Card className="shadow-lg">
              <Card.Header className="p-3">
                <h4 className="text-center">Login</h4>
              </Card.Header>
              <Card.Body>
                <Form className="text-center" onSubmit={submitHandler}>
                  <Form.Group className="mb-3 ">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      ref={emailInputRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button variant="primary" type="submit">
                      Send
                    </Button>
                    <Link to='/'>Back to Login</Link>
                  </Form.Group>
                </Form>
                {isSending ? (
                  <p className="centered">Sending Request...</p>
                ) : (
                  ""
                )}
              </Card.Body>
            </Card>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ForgotPassword;
