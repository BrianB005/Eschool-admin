import React from "react";
import styled from "styled-components";
import DeleteButton from "./DeleteButton";
import GreenButton from "./GreenButton";

const InfoModal2 = ({
  logo,
  motto,
  email,
  _id,
  school_name,
  type,
  phone,
  address,
}) => {
  return (
    <Card>
      <Image src={logo?.url} />
      <HorizontalWrapper>
        <Title>Name</Title>
        <Content>{school_name}</Content>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <Title>Level</Title>
        <Content>{type}</Content>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <Title>School ID</Title>
        <Content>{`SID${_id}`}</Content>
      </HorizontalWrapper>

      <HorizontalWrapper>
        <Title>Email Address</Title>
        <Content>{email}</Content>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <Title>School Address</Title>
        <Content>{address}</Content>
      </HorizontalWrapper>
      <HorizontalWrapper>
        <Title>Phone</Title>
        <Content>{phone}</Content>
      </HorizontalWrapper>
      <Buttons>
        <GreenButton title="Feature School" />
        <DeleteButton title="Delete School" />
      </Buttons>
    </Card>
  );
};

const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 45px 39px 32px;
  display: flex;
  z-index: 1000;
  width: fit-content;
  flex-direction: column;
`;
const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  align-items: center;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 34px;
`;
const Title = styled.h2`
  font-family: "Moderat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;

  color: #4a4a4a;
`;
const Content = styled.h1`
  font-family: "Dm Sans";
  font-style: bold;
  font-weight: 500;
  font-size: 14px;
  line-height: 28px;

  color: #000000;
`;
const Image = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e5e5e5;
  align-self: center;
`;
export default InfoModal2;
