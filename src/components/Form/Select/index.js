import styled from 'styled-components'
import withFormik from '../withFormik'

export const Select = styled.select`
  outline: none;
  box-shadow: none;
  height: 26px;
  border-radius: 2px;
  border: 1px solid #d1d1d1;
  padding: 2px 2px 2px 6px;
  width: 100%;
`

export default withFormik(Select)
