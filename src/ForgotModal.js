import React from "react";
import { Modal, Button,Form } from "react-bootstrap";

function ForgotModal(props) {
    const handlesumbit=()=>{
        props.handleClose();
    }
   
  return (
    <>
      <Modal
        size="sm"
        show={props.smShow}
        onHide={props.handleClose}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Forgot Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handlesumbit}>           
              <Form.Label>Enter Phone No.</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Phone no."               
                required min="1"
              />        
            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ForgotModal;
