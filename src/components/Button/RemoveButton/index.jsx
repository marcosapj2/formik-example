import React from 'react'
import { Image } from 'components'
import TrashIcon from 'assets/images/trash.svg'
import { Button } from './styled'

const RemoveButton = props => (
  <Button type="button">
    <Image {...props} size="20px" src={TrashIcon} alt="trash" />
  </Button>
)

export default RemoveButton
