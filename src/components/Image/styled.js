import styled from 'styled-components'

export const StyledImage = styled.img`
  ${({ size }) =>
    size &&
    ` 
  width: ${size};
  height: ${size};
  `};
`
