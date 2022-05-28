import styled from "styled-components";

const Container = styled.div`
  width: 28%;
  height: 60%;
  background-color: #faf9fb;
  border-radius: 10px;
  padding: 20px;
`;

const Card = (props) => {
  return <Container>{props.children}</Container>;
};

export default Card;
