import * as Yup from "yup"
import yup from ".."

export function example() {
  return yup.object().shape({
    references: yup
      .array()
      .of(yup.object().uniqueProperty("name", "O nome tem que ser único"))
  })
}

Yup.addMethod(Yup.object, "example", example)
