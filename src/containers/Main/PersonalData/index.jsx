import React from "react"
import { Input } from "components/Form"
import { Card } from "components/Card"

const PersonalData = () => (
  <Card title="Dados Pessoais">
    <Input name="personalData.name" label="Nome completo" />
    <Input name="personalData.email" label="Email" />
    <Input name="personalData.cpf" label="CPF" />
    <Input name="personalData.rg" label="RG" />
    <Input name="personalData.cellPhone" label="Celular" />
    <Input name="personalData.birthday" label="Data de nascimento" />
  </Card>
)

export default PersonalData
