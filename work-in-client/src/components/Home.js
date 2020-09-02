import React, { useState } from "react";
import withAuth from "../utils/axiosWithAuth";
import { withRouter } from "react-router-dom";
import { Form, Button, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { addImage } from "../state/actions/imagesActions";
import axios from "axios";

// const imagesAPI = "http://localhost:3000/images/";
const HomePage = ({dispatch}) => {
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (image) {
      dispatch(addImage(image));
    }
  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   addImage(picture);

    // const data = new FormData();
    // data.append("image", image);
    // axios
    //   .post(imagesAPI, data, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error.res);
    //   });
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

const mapStateToProps = (state) => ({
  image: state.imageReducer || [],
});

export default connect(mapStateToProps)(HomePage);