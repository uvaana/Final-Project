import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';



export default function Home() {
  return (
    <><h2 class="text-center">Welcome to our  Digital Library!</h2>
    <div style={{
      display: 'block',
      width: 500,
      padding: 40,
    }}
      class="container border">
      <h4 class="text-center">Search your favourite Books Below!!!</h4>
      <Form class="form-center">
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text"
            placeholder="Enter title " />
        </Form.Group>
        <Form.Group>
          <Form.Label>Author:</Form.Label>
          <Form.Control type="text"
            placeholder="Enter author name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Publisher:</Form.Label>
          <Form.Control type="text" placeholder="Enter publisher name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Published Date:</Form.Label>
          <Form.Control type="date" placeholder="Enter published date" />
        </Form.Group>
        <br/>
        <Form.Group>
        <button type="button" class="btn btn-info">Search</button>
        </Form.Group>
      </Form>
    </div></>
  );
}