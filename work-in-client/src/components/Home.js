import React, { useState } from "react";
import withAuth from "../utils/axiosWithAuth";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const imagesAPI = "http://localhost:3000/images/";
const HomePage = () => {
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append("image", image);
    axios
      .post(imagesAPI, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <>
      <Form
        onSubmit={handleFormSubmit}
        method="post"
        encType="multipart/form-data"
        className="upload-form"
      >
        <Form.Group>
          <Form.Label>Upload an image</Form.Label>
          <Form.Control type="file" name="image" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    </>
  );
};

export default HomePage;
