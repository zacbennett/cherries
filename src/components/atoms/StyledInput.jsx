import styled from 'styled-components'

const StyledInput = styled.input`
  width: ${({ width }) => width || '17rem'};
  height: ${({ height }) => height || '2.5rem'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '.5rem'};
  margin-left: ${({ marginLeft }) => marginLeft || '.5rem'};
  margin-right: ${({ marginRight }) => marginRight || '.5rem'};
  margin-top: ${({ marginTop }) => marginTop || '.5rem'};
  border-style: solid;
  border-color: #f0f0f0;
  border-width: 1px;
  outline: none;
  border-radius: ${({ borderRadius }) => borderRadius || '0px'};
  padding-left: 1rem;
  font-family: ${({ fontFamily }) => fontFamily || 'Montserrat'};
`
export default StyledInput
