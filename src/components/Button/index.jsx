import React from 'react'
import PropType from 'prop-types'
import { StyledButton } from './styled'

const Button = ({ children, type, ...props }) => (
  <StyledButton {...props} type={type}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  children: PropType.node,
  type: PropType.string
}

export default Button
