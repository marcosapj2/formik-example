import { createGlobalStyle } from 'styled-components'

const MAX_GUTTER = 100
const spacer = 5
const sides = ['top', 'right', 'bottom', 'left']

let gutterSpace = ''

for (let gutter = 0; gutter <= MAX_GUTTER; gutter += spacer) {
  gutterSpace += `
    .pd-${gutter}{
      padding: ${gutter}px;
    }

    .pd-horizontal-${gutter}{
      padding-top: ${gutter}px;
      padding-bottom: ${gutter}px;
    }

    .pd-vertical-${gutter}{
      padding-left: ${gutter}px;
      padding-right: ${gutter}px;
    }

    .mg-${gutter}{
      margin: ${gutter}px;
    }

    .mg-horizontal-${gutter}{
      margin-top: ${gutter}px;
      margin-bottom: ${gutter}px;
    }

    .mg-vertical-${gutter}{
      margin-left: ${gutter}px;
      margin-right: ${gutter}px;
    }
  `
  sides.forEach((item) => {
    gutterSpace += `
      .pd-${item}-${gutter}{
        padding-${item}: ${gutter}px;
      }

      .mg-${item}-${gutter}{
      margin-${item}: ${gutter}px;
      }
    `
  })
}

const GlobalStyle = createGlobalStyle`
   html, body {
    margin: 0;
    padding: 0;
    font-family: Verdana,Geneva,sans-serif; 
    color: #3465a4;
    background: #3465a4;
  }

  html {
    ::-webkit-scrollbar { width: 0 !important }
    overflow: -moz-scrollbars-none; 
    -ms-overflow-style: none; 
  }
  

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
   @media (max-width: 800px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 14px;
    }
    @media (max-width: 375px) {
      font-size: 12px;
    }
  ${gutterSpace}
`
export default GlobalStyle
