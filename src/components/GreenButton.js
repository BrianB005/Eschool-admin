import React from "react";
import styled from "styled-components";
const GreenButton = ({ title, disabled, onClick }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {title}
    </Button>
  );
};
const Button = styled.button`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 32px;

  font-family: "Dm Sans";
  background: #0e563f;
  border-radius: 10px;
  padding: 14px 20px;
  flex: 0 0 auto;
  display: flex;
  color: #ffffff;
`;
export default GreenButton;
