export const behindContent = ` 
  position: relative;
  &::after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 2px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      -webkit-transition: all .4s;
      transition: all .4s;
      background-color: #3465a4
    }
}`
export const buttonExpand = ` 
  ${behindContent}
    &:active {
      transform: translateY(0) scale(1.2);
      box-shadow: 0 1rem 2rem rgba($color-black,.2);
      &::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
      }
    }
}`
