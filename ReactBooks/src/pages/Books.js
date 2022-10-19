import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";



function Books() {
  const navigate = useNavigate();
 
  return (
    <>
      <Row className="mt-2">
        <Col md={{ span: 4, offset: 4 }}>
          <Button
            variant="primary"
            type="button"
            onClick={() => navigate("/createbooks")}
          >
            Add Books
          </Button>
        </Col>
      </Row>
      
        
      
    </>
  );
}
export default Books;