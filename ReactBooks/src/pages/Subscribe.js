import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
 
function Subscribe() {
  const [books, setbooks] = useState([]);
 
  useEffect(() => {
    axios.get("https://localhost:44350/api/Books").then((response) => {
      setbooks((data) => {
        return response.data;
      });
    });
  }, []);
 
  return (
    <>
      <Row md={3} className="g-4 mt-1">
        {books.map((ba) => {
          return (
            <Col key={ba.id}>
              <Card style={{width:'13rem'}}>
                <Card.Img variant="top" src={ba.logo} />
                <Card.Body>
                  <Card.Title>{ba.title}</Card.Title>
                  <Card.Text>
                    <b>Category:</b> {ba.category}
                  </Card.Text>
                  <Card.Text>
                    <b>Price: </b> {ba.price}
                  </Card.Text>
                  <Card.Text>
                    <b>Author: </b>{ba.author}
                  </Card.Text>
                  <Card.Text>
                    <b>Publisher: </b>{ba.publisher}
                  </Card.Text>
                  <Card.Text>
                    <b>Published Date: </b>{ba.publishedDate}
                  </Card.Text>
                  <Card.Text>
                    <b>Chapters: </b>{ba.chapters}
                  </Card.Text>
                  
                </Card.Body>
                <button type="button" class="btn btn-info">Subscribe</button>
                
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
 
export default Subscribe;