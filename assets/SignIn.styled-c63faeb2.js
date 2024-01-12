import{j as i}from"./index-d9288bde.js";import{s as p,a as o}from"./Button-e70af259.js";import{n as r}from"./emotion-styled.browser.esm-24365eca.js";const l=p.input`
  padding: 14px;

  color: ${o.whiteColor};

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);

  background-color: transparent;

  &:is(:hover, :focus) {
    border-color: ${o.orangeColor};
    outline: none;
  }

  &.success {
    border-color: ${o.successColor};
  }

  &.error {
    border-color: ${o.errorColor};
  }
`,x=({placeholder:t,name:e,type:n,autofocus:s,pattern:a})=>i.jsx(l,{placeholder:t,name:e,type:n,autoFocus:s,pattern:a}),u="/^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/",g=r.h2`
  font-size: 24px;
  line-height: 1.17;
  margin-bottom: 14px;
  color: ${o.whiteColor};
`,b=r.div`
  padding: 90px 20px 0px;
`,f=r.form`
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  & button {
    margin-top: 28px;
    margin-bottom: 12px;
  }

  & a {
    color: ${o.whiteColor};
    text-decoration: underline;
  }

  & p {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(239, 237, 232, 0r6);
  }
`;export{b as F,g as a,f as b,x as c,u as e};
