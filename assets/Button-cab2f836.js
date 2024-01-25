import{f as c,s as r,j as u}from"./index-86b8137c.js";const{animation:t,orangeColor:n,orange2Color:e}=r,b=c.button`
  padding: 12px 40px;
  width: ${o=>o.$width};

  color: ${r.whiteColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  border-radius: 12px;

  border: ${o=>o.$transparent?"1px solid rgba(239, 237, 232, 0.3);":`1px solid ${n}`};

  background-color: ${o=>o.$transparent?"transparent":n};

  transition: ${o=>o.$transparent?`border-color ${t}`:`color ${t}`};

  &:is(:hover, :focus) {
    ${o=>o.$transparent?`border-color: ${e}`:`background-color: ${e}`};
    outline: none;
  }

  &:disabled {
    color: #efede899;
    background-color: ${r.orange2Color};
  }
`,x=({disabled:o,onClick:a,children:s,transparent:i,width:d,as:l,type:$,to:p})=>u.jsx(b,{type:$,as:l,to:p,$width:d,$transparent:i,onClick:a,disabled:o,children:s});export{x as B};
