import * as Yup from "yup"

export function uniqueProperty(propertyName, message) {
  return this.test("unique", message, function testProperty(value) {
    const currentIndex = this.parent.indexOf(value)
    const slicedParent = this.parent.slice(0, currentIndex)

    if (
      slicedParent.some(option => option[propertyName] === value[propertyName])
    ) {
      const path = `${this.path}.${propertyName}`
      throw this.createError({
        path,
        message
      })
    }
    return true
  })
}

Yup.addMethod(Yup.object, "uniqueProperty", uniqueProperty)
