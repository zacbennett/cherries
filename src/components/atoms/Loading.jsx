import React from 'react'
import Spinner from 'react-spinkit'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height || '0vh'};
  .sk-spinner {
    color: white;
  }
  .sk-spinner:hover {
    color: #e20031;
    transition: 0.3s ease;
  }
`

const Loading = props => {
  return (
    <Container height={props.height}>
      <Spinner name="three-bounce" />
    </Container>
  )
}

export default Loading
