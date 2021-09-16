import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEmployeeData } from "./redux/action/action";
import { Table } from "react-bootstrap";
import "./Styles/style.scss";
import Modalpop from "./Modalpop";

function Signin() {
  const [show, setShow] = useState(false);
  const [avatarpath, setAvatarPath] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.employees.Posts);
  useEffect(() => {
    dispatch(setEmployeeData());
  }, []);
  const handlepopup = (path) => {
    setAvatarPath(path);
    handleShow();
  };
  return items.loading?(
    <h2>Loading</h2>
  ):items.error?(
    <h2>{items.error}</h2>    
  ):(
    <>
      <div className=" signINTable">
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Profile</th>
            </tr>
          </thead>
          <tbody>
          {items.map((item) => {
            return (
                <tr key={item.id}>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td
                    onClick={() => handlepopup(item.avatar)}
                    className="onshow"
                  >
                    ClickMe
                  </td>
                </tr>             
            );
          })}
          </tbody>
        </Table>
      </div>
      <Modalpop avatarpath={avatarpath} show={show} handleClose={handleClose} />
    </>
  );
}

export default Signin;
