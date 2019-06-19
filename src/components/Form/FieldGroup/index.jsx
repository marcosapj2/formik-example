import React from "react"
import PropType from "prop-types"
import { FieldGroupStyled, Distribution } from "./styled"
import Label from "./Label"
import FieldError from "./FieldError"

const FieldGroup = ({ name, label, error, children, dist }) => (
  <Distribution dist={dist}>
    <FieldGroupStyled>
      <Label htmlFor={name}>{label}</Label>
      <div>{children}</div>
      <FieldError>{error}</FieldError>
    </FieldGroupStyled>
  </Distribution>
)

FieldGroup.propTypes = {
  name: PropType.string,
  label: PropType.string,
  error: PropType.string,
  dist: PropType.string,
  children: PropType.node
}
export default FieldGroup
