import styled, { css } from 'styled-components'

export const FieldGroupStyled = styled.div`
  margin: 0 10px 15px;
`
export const Distribution = styled.div`
  width: ${({ dist }) => dist};
`
Distribution.defaultProps = {
  dist: '25%'
}
