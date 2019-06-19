import React, { useState } from "react"
import yup from "utils/yup"
import { Form, Debug } from "components/Form"
import { Card } from "components/Card"
import { Button } from "components"
import PersonalData from "./PersonalData"
import Address from "./Address"
import Reference from "./Reference"
import { Container } from "./styled"
import { initialValues } from "./initialValues"

const Home = () => {
  const [height, setHeight] = useState(640)

  const updateHeight = () => {
    const mainColumn = document.querySelector("#main-column")
    if (mainColumn && height !== mainColumn.clientHeight)
      setHeight(mainColumn.clientHeight)
  }

  const showValues = values => alert(JSON.stringify(values, null, 2))

  return (
    <Form
      initialValues={initialValues}
      validationSchema={yup.object().example()}
      onSubmit={showValues}
      render={({ values }) => (
        <Container>
          <Card title="Formik Example" id="main-column">
            <PersonalData />
            <Address />
            <Reference callback={updateHeight} values={values.references} />
            <Button type="submit">Enviar</Button>
          </Card>
          <Card dist="40%" title="Formik Props" height={height}>
            <Debug />
          </Card>
        </Container>
      )}
    />
  )
}

export default Home
