import React from 'react'
import styled from 'styled-components'


function Resume() {
    return (
      <Container>
          <Title>
              Resume
          </Title>
      </Container>
    )
  }
  
  export default Resume


const Container = styled.div `
    justify-content: "center";
`;

const Title = styled.h1 `
    text-align:center;
    color: white;
    justify-content: "center";
`;