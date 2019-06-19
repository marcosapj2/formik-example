import React from 'react'
import PropTypes from 'prop-types'
import { StyledImage } from './styled'

const Image = ({ src, alt, size, ...props }) => (
  <StyledImage {...props} src={src} alt={alt} size={size} />
)

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string
}
export default Image
