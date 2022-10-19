import { Badge, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import DeleteBooks from "./DeleteBooks";


function ViewBooks() {
  const [books, setbooks] = useState([]);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState(0);
  
 
  useEffect(() => {
    axios.get("https://localhost:44350/api/Books").then((response) => {
      setbooks((data) => {
        return response.data;
      });
    });
  }, []);

  function confirmDeleteHandler() {
    axios
      .delete(`https://localhost:44350/api/Books${itemToDeleteId}`)
      .then((response) => {
        setShowModal(false);
        setbooks((existingData) => {
          return existingData.filter((_) => _.id !== itemToDeleteId);
        });
        setItemToDeleteId(0);
      });
  }
 
  function showConfirmDeleteHandler(id) {
    setShowModal(true);
    setItemToDeleteId(id);
  }
 
  function hideConfirmDeleteHandler() {
    setShowModal(false);
 
    setItemToDeleteId(0);
  }
 
 
  return (
    <>
    <DeleteBooks
        showModal={showModal}
        title="Delete Confirmation"
        body="Are you want delete this book?"
        confirmDeleteHandler={confirmDeleteHandler}
        hideConfirmDeleteHandler={hideConfirmDeleteHandler}
      ></DeleteBooks>
    
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
                  <Button
                    variant="primary"
                    onClick={() => navigate(`/updatebooks/${ba.id}`)}>
                    Edit
                  </Button>
                  <Button
                    type="button"
                    variant="danger"
                    onClick={() => showConfirmDeleteHandler(ba.id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
 
export default ViewBooks;
