import{f as e,s as n,J as r,j as t,a as i}from"./index-86b8137c.js";const o=e.button`
  display: flex;
  align-items: center;
  gap: 8px;
`,l=e.span`
  color: #e6533c;
  font-family: Roboto;
  line-height: 1.29;
  transition: all ${n.animation};
  @media screen and (min-width: 768px) {
    ${o}:hover & {
      color: ${n.whiteColor};
      transform: scale(1.25);
    }
  }
`,d=r`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(10px);
  }
`,c=e.svg`
width: 16px;
  height: 16px;
  stroke: ${n.orangeColor};
  @media screen and (min-width: 768px) {
    ${o}:hover & {
      animation: ${d} 1000ms linear infinite;
    stroke: ${n.whiteColor};
             }
  }
`,p=({children:s,onClick:a})=>t.jsxs(o,{type:"button",onClick:a,children:[t.jsx(l,{className:"add-btn-span",children:s}),t.jsx(c,{children:t.jsx("use",{href:i+"#locationarrow"})})]});export{p as A};
