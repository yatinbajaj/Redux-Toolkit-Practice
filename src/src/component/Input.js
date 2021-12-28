import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
flex-direction:column;
max-width:60rem;
margin:auto;
color:white;
`;

const GenericField = styled.input.attrs(props => ({
    type: props.type || "text",
    size: props.size || "1em"
}))`

  color: palevioletred;
  font-size:  ${props => props.fontSize ? props.fontSize:`1em`};
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};

`;


function Input() {
    return (
        <Container>
            <h1>Experiment Showing Different Input Fields Using Styled Component</h1>
            
            <p>Text Input Field Having font-size 1rem and size 1rem</p>
            <GenericField placeholder='A small text input' />

            <p>Password Input Field Having font-size 1rem and size 2rem</p>
            <GenericField placeholder='A small password input' type="password" size="2rem" />

            <p>Text Input Field Having font-size 2rem and size 2rem</p>
            <GenericField placeholder='A Large text input' size="2rem" fontSize="2rem"/>
        </Container>
    )
}

export default Input
