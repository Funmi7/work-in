import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addImage } from "../../state/actions/imagesActions";

const UploadImage = ({ errors, dispatch }) => {
  const [image, setImage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    setErrorMessage(errors);
  }, [errors]);

  useEffect(() => {
    setErrorMessage("");
  }, []);
  const handleChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (image) {
      setErrorMessage("");
      dispatch(addImage(image));
      setIsSubmitted(true);
    }
  };

  return (
    <>
      {errorMessage && errorMessage.upload_error ? (
        <p>{errorMessage.upload_error}</p>
      ) : (
        isSubmitted && <p>Image uploaded successfully</p>
      )}
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
  images: state.images || [],
  errors: state.errors || {},
});

export default withRouter(connect(mapStateToProps)(UploadImage));
