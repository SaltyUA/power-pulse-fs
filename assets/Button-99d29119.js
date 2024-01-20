import{b as l,s as e,j as p}from"./index-9afd0cea.js";const{animation:r,orangeColor:t,orange2Color:n}=e,c=l.button`
  padding: 12px 40px;
  width: ${o=>o.$width};

  color: ${e.whiteColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  border-radius: 12px;

  border: ${o=>o.$transparent?"1px solid rgba(239, 237, 232, 0.3);":`1px solid ${t}`};

  background-color: ${o=>o.$transparent?"transparent":t};

  transition: ${o=>o.$transparent?`border-color ${r}`:`color ${r}`};

  &:is(:hover, :focus) {
    ${o=>o.$transparent?`border-color: ${n}`:`background-color: ${n}`};
    outline: none;
  }

  &:disabled {
    color: #efede899;
  }
`,b=({children:o,transparent:a,width:s,as:i,type:d,to:$})=>p.jsx(c,{type:d,as:i,to:$,$width:s,$transparent:a,children:o});export{b as B};
