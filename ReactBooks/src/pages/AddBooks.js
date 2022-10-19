import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBooks() {
  const logo = useRef("");
  const title = useRef("");
  const cat = useRef("");
  const price = useRef("");
  const auth = useRef("");
  const pub = useRef("");
  const pubda = useRef("");
  const chap = useRef("");
  
 
  const navigate = useNavigate();
 
  function addBooksHandler() {
    var payload = {
      logo: logo.current.value,
      title: title.current.value,
      category: cat.current.value,
      price: price.current.value,
      author: auth.current.value,
      publisher: pub.current.value,
      publishedDate: pubda.current.value,
      chapters: chap.current.value,
    };
 
    axios
      .post("https://localhost:44350/api/Books", payload)
      .then((response) => {
        navigate("/viewbooks");
      });
  }
 
  return (
    <>
      <legend align="center">Add Books</legend>
      <form>
        <Form.Group className="mb-3" controlId="formLogo">
          <Form.Label>Logo URL</Form.Label>
          <Form.Control type="text" ref={logo} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" ref={title} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" ref={cat} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" ref={price} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" ref={auth} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPublisher">
          <Form.Label>Publisher</Form.Label>
          <Form.Control type="text" ref={pub} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPublishedDate">
          <Form.Label>Published Date</Form.Label>
          <Form.Control type="date" ref={pubda} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formChapters">
          <Form.Label>Chapters</Form.Label>
          <Form.Control as="textarea" rows={3}  ref={chap} />
        </Form.Group>
      </form>
      <Button variant="primary" type="button" onClick={addBooksHandler}>
        Submit
      </Button>
    </>
  );
}
export default AddBooks;