import React from "react";
import { Container } from "react-bootstrap";

const CenteredComponent = ({ children }) => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <div style={{ width: "100%", maxWidth: "400px" }}>{children}</div>
    </Container>
  );
};

export default CenteredComponent;
