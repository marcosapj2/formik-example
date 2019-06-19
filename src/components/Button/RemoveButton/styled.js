import styled from 'styled-components'
import { behindContent } from 'assets/style/utils'

export const Button = styled.button`
  margin-bottom: 13px;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  img {
    ${behindContent}
  }
  &:active {
    img {
      transform: translateY(0);
      box-shadow: 0 1rem 2rem rgba($color-black, 0.2);
      &::after {
        transform: scaleX(1.4) scaleY(1.6);
        opacity: 0;
      }
    }
  }
`
