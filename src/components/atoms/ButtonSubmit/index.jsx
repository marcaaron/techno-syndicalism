import React from "react";
import { StyledButtonSubmit } from "styles";

const ButtonSubmit = ({ text }) => (
  <StyledButtonSubmit type="submit" value={text}>
    {text}
  </StyledButtonSubmit>
);

export default ButtonSubmit;
