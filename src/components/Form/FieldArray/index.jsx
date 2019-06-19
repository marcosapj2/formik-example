import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FieldArray } from 'formik'

const customFieldArray = (props) => {
  const { children, render } = props
  return (
    <FieldArray
      {...props}
      render={arrayProps => (
        <Fragment>
          {children}
          {render(arrayProps)}
        </Fragment>
      )}
    />
  )
}

customFieldArray.propTypes = {
  children: PropTypes.node,
  render: PropTypes.func
}

export default customFieldArray
