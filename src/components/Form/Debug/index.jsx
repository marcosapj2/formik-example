import React from 'react'
import { FormikConsumer } from 'formik'
import { Text } from './styled'

const Debug = () => (
  <FormikConsumer>
    {({ validationSchema, validate, onSubmit, ...props }) => (
      <Text>
        {JSON.stringify(props, null, 2)}
      </Text>
    )}
  </FormikConsumer>
)

export default Debug
