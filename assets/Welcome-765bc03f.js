import{L as r,j as i}from"./index-1bd9c0e2.js";import{n as e}from"./emotion-styled.browser.esm-da3af4be.js";import{s as o}from"./styleGuide-7c616dce.js";import{s as n}from"./sprite-1a74ee94.js";const s=e.div`
  width: 320px;
  height: 812px;
  padding: 0px 20px;
  margin: 0 auto;
`,l=e.h1`
  color: ${o.whiteColor};
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.05;
  margin-bottom: 40px;
  margin-top: 90px;
  position: relative;
  z-index: 2;
`,a=e.svg`
  stroke: ${o.orangeColor};
  position: absolute;
  top: 45px; /* або інше значення в залежності від вашого дизайну */
  left: 45%; /* або інше значення в залежності від вашого дизайну */
  transform: translateX(-50%);
  z-index: -1;
`,d=e.svg`
  fill: ${o.whiteColor};
  align-items: center;
  margin-left: 2px;
`,c=e.svg`
  fill: ${o.whiteColor};
  margin-right: 1px;
`,x=e.div`
  display: flex;
  gap: 0px 14px;
  margin-bottom: 230px;
`,p=e(r)`
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  justify-content: center;
  color: ${o.whiteColor};
  background-color: ${o.orangeColor};
  border-radius: 12px;
  transition: color ${o.animation};

  &:is(:hover, .base-btn:focus) {
    background-color: ${o.orange2Color};
    outline: none;
  }

  &.disabled {
    color: #efede899;
  }
`,h=e(r)`
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  justify-content: center;
  color: ${o.whiteColor};
  background-color: transparent;
  border: 1px solid rgba(239, 237, 232, 0.3);
  transition: color ${o.animation};
  border-radius: 12px;
  &:is(:hover, .base-btn:focus) {
    border-color: ${o.orangeColor};
    outline: none;
  }

  &.disabled {
    color: #efede899;
  }
`,g=e.div`
  width: 146px;
  height: 66px;
  border-radius: 12px;
  background: #303030;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  padding: 18px;
  margin-left: 80px;
`,f=e.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  justify-content: flex-end;
  width: 119px;
  height: 76px;
  border-radius: 12px;
  background: #ef8964;
  padding: 14px 18px;
  margin-left: 145px;
`,u=e.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`,m=e.div`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  text-transform: uppercase;
`,j=e.div`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-right: 8px;
`,b=e.div`
  margin-left: 8px;
`,w=e.div`
  color: #efede8;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 4px;
`,v=e.div`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
`,t=e.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${o.orangeColor};
`,C=e.div`
  position: relative;
`,S=()=>i.jsx(i.Fragment,{children:i.jsxs(s,{children:[i.jsxs(C,{children:[i.jsx(l,{children:"Transforming your body shape with Power Pulse"}),i.jsx(a,{width:98,height:35,children:i.jsx("use",{href:n+"#icon-Line"})})]}),i.jsxs(x,{children:[i.jsx(p,{to:"/signin",children:" Sign ip "}),i.jsx(h,{to:"/signup",children:" Sign up "})]}),i.jsxs(g,{children:[i.jsx(t,{children:i.jsx(d,{width:12,height:12,children:i.jsx("use",{href:n+"#icon-play"})})}),i.jsxs(b,{children:[i.jsx(w,{children:"350+"}),i.jsx(v,{children:"Video tutorial"})]})]}),i.jsxs(f,{children:[i.jsx(t,{children:i.jsx(c,{width:12,height:12,children:i.jsx("use",{href:n+"#icon-running"})})}),i.jsxs(u,{children:[i.jsx(j,{children:"500"}),i.jsx(m,{children:"cal"})]})]})]})});export{S as default};
