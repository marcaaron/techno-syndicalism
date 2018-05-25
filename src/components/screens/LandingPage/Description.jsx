import React from "react";
import styled from "styled-components";

const Description = () => (
  <StyledContainer>
    <p>
      Wobbly is a workers chat app designed for new or expanding workplace
      organising groups. We want to provide the tools for groups to grow,
      communicate with each other, and federate into bigger, more powerful
      movements.
    </p>
    <p>
      Wobbly uses a democratic organising model, where the decisions of the
      larger body are made by the groups comprising them.
    </p>
    <p>
      We're looking for developers to contribute to the project. Our development
      style is democratic and pro-social, we ask each other questions and aren't
      afraid to talk about the big picture, or areas we aren't experts in (yet).
    </p>
    <p>
      Currently we're looking for a back-end developer to start work on our
      database and logic structure. Because you'd be the first person to work on
      the backend, we can be very flexible to suit you, with the language and
      frameworks you enjoy working in. Send an email to john@onethreethree.net
      if you'd like to find out more.
    </p>
  </StyledContainer>
);

const StyledContainer = styled.p`
  /* box */
  padding: 10px 30px;
  width: 90%;

  /* color */
  background-color: ${({ theme }) => theme.colors.white};

  /* text */
  font-size: 0.9em;
`;

export default Description;
