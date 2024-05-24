import React from "react";

const ReactContact = () => {
  return (
    <>
      <center className="contact">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Your Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter your Name"
            aria-describedby="emailHelp"
            autoComplete="off"
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Email Adress
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your Email password"
            autoComplete="off"
          />
        </div>
        We'll never share your email with anyone else.
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Contact number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your phone number"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Adress
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your adress"
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Message
          </label>
          <textarea
            type="text"
            rows="5"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="off"
          />
        </div>
        <div className="mb-3 form-check"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </center>
    </>
  );
};

export default ReactContact;
