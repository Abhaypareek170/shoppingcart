import React, { useRef, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [isSending, setIsSending] = useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const cnfPasswordInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredCnfPassword = cnfPasswordInputRef.current.value;
    if(enteredCnfPassword===enteredPassword){
      setIsSending(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvCqS-e_A8eRdiwz3rsPhKy2v7CmvIJD0",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
         "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      setIsSending(false);
      if (res.ok) {
       alert("User has successfully signed up!");
        return res.json();
      } else {
        return res.json().then(() => {
          let errorMessage = "Failed!";
          alert(errorMessage);
          throw new Error(errorMessage);
        });
      }
    });
    }
    else{
      alert('The passwords you entered do not match.')
    }
    
  };
  return (
    <>
      
      <Container className="mt-5" style={{ marginLeft: "30%" }}>
        <Row>
          <Col xs={4}>
            <Card className="shadow-lg">
              <Card.Header className="p-3">
                <h4 className="text-center">SignUp</h4>
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
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      ref={passwordInputRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      ref={cnfPasswordInputRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Button variant="primary" type="submit">
                      SignUp
                    </Button>
                  </Form.Group>
                </Form>
                {isSending ? (
                  <p className="centered">Sending Request...</p>
                ) : (
                  ""
                )}
              </Card.Body>
            </Card>
            <Card className="shadow-lg mt-3 p-2">
              <p className="text-center">
                Have an account? <Link to="/">Login</Link>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignUp;
