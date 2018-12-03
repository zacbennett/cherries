import Styled from 'styled-components'

const StyledButton = Styled.button`
    margin: ${({ margin }) => margin || '1rem'};
    padding: 0;
    height: ${({ height }) => height || '3rem'};
    width: ${({ width }) => width || '7rem'};
    font-size: ${({ fontSize }) => fontSize || '.9rem'};
    font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
    letter-spacing: .1rem;
    color: ${({ color }) => color || 'white'};
    background-color: ${({ backgroundColor }) => backgroundColor || '#E20031'};
    border-color: ${({ borderColor }) => borderColor || '#E20031'};
    outline: none;
    border-radius: ${({ borderRadius }) => borderRadius || '2px'};
    border-width: ${({ borderWidth }) => borderWidth || '2px'};
    transition: 0.3s ease;
    cursor: pointer;
    

  :hover{
    background-color: ${({ hovercolor }) => hovercolor || 'white'};
    color: ${({ hoverTextColor }) => hoverTextColor || '#E20031'};
  }
  @media (max-width: 420px) {
  }
`

export default StyledButton
