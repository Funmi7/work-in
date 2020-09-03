import React from "react";
import styled from "styled-components";

const ImageStyled = styled.div`
  width: 25%;
  height: 25%;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const Image = ({ id }) => {
  return (
    <ImageStyled>
      <img src={`http://localhost:3000/images/${id}`} alt="Photo" />
    </ImageStyled>
  );
};

export default Image;
