import React from "react"
import { Input, Select } from "components/Form"
import { Card } from "components/Card"

const Address = () => (
  <Card title="Endereço">
    <Select name="address.city" label="Cidade" />
    <Select name="address.state" label="Estado" />
    <Input name="address.street" label="Rua" />
    <Input name="address.cell" label="Número" />
    <Input name="address.neighborhood" label="Bairro" />
    <Input name="address.complement" label="Complemento" />
  </Card>
)

export default Address
