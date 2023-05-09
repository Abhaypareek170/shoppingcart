import React, { useState, useRef } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";

const Login = () => {
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    setIsSending(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvCqS-e_A8eRdiwz3rsPhKy2v7CmvIJD0",
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
      .then((data) => {
       alert("User has successfully LogIn!");
        const token = data.idToken;
        localStorage.setItem("token",token);
        localStorage.setItem("email", enteredEmail);
        dispatch(authActions.login(token));
        navigate("/home");
      });
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
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      ref={passwordInputRef}
                      required
                    />
                  </Form.Group>
                  <Link to="/forgot-password">
                    <p>Forgot Password</p>
                  </Link>
                  <Form.Group className="mb-3">
                    <Button variant="primary" type="submit">
                      Login
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
                Don't have an account? <Link to="/signUp">SignUp</Link>
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
