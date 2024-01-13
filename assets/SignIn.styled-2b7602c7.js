import{j as c}from"./index-81c5ff80.js";import{s as d}from"./styled-components.browser.esm-0d4085ff.js";import{s as r}from"./styleGuide-7c616dce.js";import{n as s}from"./emotion-styled.browser.esm-fc487c9e.js";const{animation:i,orangeColor:p,orange2Color:l}=r,$=d.button`
  padding: 12px 40px;
  width: ${o=>o.$width};

  color: ${r.whiteColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.13;

  border-radius: 12px;

  border: ${o=>o.$transparent?"1px solid rgba(239, 237, 232, 0.3);":`1px solid ${p}`};

  background-color: ${o=>o.$transparent?"transparent":p};

  transition: ${o=>o.$transparent?`border-color ${i}`:`color ${i}`};

  &:is(:hover, :focus) {
    ${o=>o.$transparent?`border-color: ${l}`:`background-color: ${l}`};
    outline: none;
  }

  &.disabled {
    color: #efede899;
  }
`,w=({children:o,transparent:t,width:n,onSubmit:e,as:a,type:x,to:u})=>c.jsx($,{type:x,as:a,to:u,onSubmit:e,$width:n,$transparent:t,children:o}),m=d.input`
  padding: 14px;

  color: ${r.whiteColor};

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  background-color: transparent;

  &:is(:hover, :focus) {
    border-color: ${r.orangeColor};
    outline: none;
  }

  &.success {
    border-color: ${r.successColor};
  }

  &.error {
    border-color: ${r.errorColor};
  }
`,C=({placeholder:o,name:t,type:n,autofocus:e,pattern:a})=>c.jsx(m,{placeholder:o,name:t,type:n,autoFocus:e,pattern:a}),F="/^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/",y=s.h2`
  font-size: 24px;
  line-height: 1.17;
  margin-bottom: 14px;
  color: ${r.whiteColor};
`,z=s.div`
  padding: 90px 20px 0px;
`,j=s.form`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  & button {
    margin-top: 28px;
    margin-bottom: 12px;
  }

  & a {
    color: ${r.whiteColor};
    text-decoration: underline;
  }

  & p {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(239, 237, 232, 0r6);
  }
`;export{w as B,z as F,y as a,j as b,C as c,F as e};
