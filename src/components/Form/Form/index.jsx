import React from "react"
import { Formik, Form } from "formik"

const FormGroup = props => {
  const { children, render } = props
  return (
    <Formik
      {...props}
      render={formikProps => (
        <Form>
          {children}
          {render(formikProps)}
        </Form>
      )}
    />
  )
}

export default FormGroup
