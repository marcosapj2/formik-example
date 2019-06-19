import React from "react"
import { Field } from "formik"
import FieldGroup from "../FieldGroup"
import { get } from "lodash"

const withFormik = Component => {
  const WrappedComponent = ({ field, form: { touched, errors }, label, dist }) => {
    const error = get(touched, field.name) && get(errors, field.name)

    return (
      <FieldGroup error={error} label={label} dist={dist}>
        <Component {...field} />
      </FieldGroup>
    )
  }

  return props => <Field {...props} component={WrappedComponent} />
}

export default withFormik
