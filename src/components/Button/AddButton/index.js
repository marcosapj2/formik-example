import Button from "components/Button"
import styled from "styled-components"
import {buttonExpand} from "assets/style/utils"

export const AddButton = styled(Button)`
  cursor: pointer;
  padding: 0;
  width: 14px;
  height: 14px;
  margin-left: 0;
  transition: all 0.2s;
  ::before {
    content: '+';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  ${buttonExpand}
  }
`

export default AddButton
