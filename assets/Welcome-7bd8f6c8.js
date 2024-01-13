import{L as r,j as e}from"./index-d9b75141.js";import{n as i}from"./emotion-styled.browser.esm-86a14bd6.js";import{s as o}from"./styleGuide-7c616dce.js";const s=i.div`
  width: 320px;
  height: 812px;
  padding: 0px 20px;
  margin: 0 auto;
`,l=i.h1`
  color: ${o.whiteColor};
  font-size: 38px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.05;
  margin-bottom: 40px;
  margin-top: 90px;
  position: relative;
  z-index: 2;
`,a=i.svg`
  stroke: ${o.orangeColor};
  position: absolute;
  top: 45px; /* або інше значення в залежності від вашого дизайну */
  left: 45%; /* або інше значення в залежності від вашого дизайну */
  transform: translateX(-50%);
  z-index: -1;
`,d=i.svg`
  fill: ${o.whiteColor};
  align-items: center;
  margin-left: 2px;
`,c=i.svg`
  fill: ${o.whiteColor};
  margin-right: 1px;
`,x=i.div`
  display: flex;
  gap: 0px 14px;
  margin-bottom: 230px;
`,p=i(r)`
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
`,h=i(r)`
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
`,g=i.div`
  width: 146px;
  height: 66px;
  border-radius: 12px;
  background: #303030;
  margin-bottom: 70px;
  display: flex;
  flex-direction: row;
  padding: 18px;
  margin-left: 80px;
`,f=i.div`
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
`,u=i.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`,m=i.div`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.33;
  text-transform: uppercase;
`,b=i.div`
  color: #efede8;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  margin-right: 8px;
`,j=i.div`
  margin-left: 8px;
`,w=i.div`
  color: #efede8;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.12;
  margin-bottom: 4px;
`,v=i.div`
  color: rgba(239, 237, 232, 0.65);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
`,t=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${o.orangeColor};
`,C=i.div`
  position: relative;
`,n="/power-pulse-fs/assets/sprite-5feb51c2.svg",k=()=>e.jsx(e.Fragment,{children:e.jsxs(s,{children:[e.jsxs(C,{children:[e.jsx(l,{children:"Transforming your body shape with Power Pulse"}),e.jsx(a,{width:98,height:35,children:e.jsx("use",{href:n+"#icon-Line"})})]}),e.jsxs(x,{children:[e.jsx(p,{to:"/signin",children:" Sign ip "}),e.jsx(h,{to:"/signup",children:" Sign up "})]}),e.jsxs(g,{children:[e.jsx(t,{children:e.jsx(d,{width:12,height:12,children:e.jsx("use",{href:n+"#icon-play"})})}),e.jsxs(j,{children:[e.jsx(w,{children:"350+"}),e.jsx(v,{children:"Video tutorial"})]})]}),e.jsxs(f,{children:[e.jsx(t,{children:e.jsx(c,{width:12,height:12,children:e.jsx("use",{href:n+"#icon-running"})})}),e.jsxs(u,{children:[e.jsx(b,{children:"500"}),e.jsx(m,{children:"cal"})]})]})]})});export{k as default};
