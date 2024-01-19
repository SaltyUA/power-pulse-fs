import{L as o,s as e,u as d,j as i,r as a}from"./index-71e91b31.js";import{n as t}from"./emotion-styled.browser.esm-cac331d4.js";import{t as p,a as r,b as x}from"./side-view-people-training-gym-3x-98657c57.js";const h=t.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  margin: 0 auto;
`,s=t.div`
  width: 200px;
  background: #e6533c;
  display: flex;
  flex-direction: column;
  z-index: 2;
  padding: 213px 10px 250px 10px;

  @media (min-width: 375px) {
    padding: 213px 20px 250px 20px;
    width: 240px;
  }

  @media (min-width: 768px) {
    padding: 260px 32px 309px 32px;
    width: 420px;
  }

  @media (min-width: 1440px) {
    padding: 172px 96px 221px 96px;
    width: 669px;
  }
`,m=t.h1`
  font-size: 66px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 160px;
    font-weight: 500;
    line-height: 0.93;
    margin-bottom: 28px;
  }
`,c=t.p`
  width: 180px;
  color: #efede8;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  margin-bottom: 28px;

  @media (min-width: 375px) {
    width: 200px;
  }

  @media (min-width: 768px) {
    width: 356px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }

  @media (min-width: 1440px) {
    width: 477px;
  }
`,g=t(o)`
  display: inline-block;
  color: ${e.whiteColor};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.12;
  padding: 12px 40px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.3);
  background-color: transparent;
  width: 147px;
  transition: color ${e.animation};
  text-align: center;
  white-space: nowrap;

  &:is(:hover, :focus) {
    background-color: #ef8964;
  }

  @media (min-width: 768px) {
    padding: 16px 60px;
    font-size: 20px;
    line-height: 1.2;
    width: 204px;
  }
`,l=t.div`
  background-image: url(${p});
  background-position: bottom right;
  width: 200px;
  background-repeat: no-repeat;

  @media (min-width: 375px) {
    width: 446px;
  }

  @media (min-width: 767px) {
    background-image: url(${r});
    width: 446px;
  }

  @media (min-width: 1440px) {
    background-image: url(${x});
    width: 771px;
  }
`,b=()=>{const n=d();return i.jsxs(h,{children:[i.jsxs(s,{children:[i.jsx(m,{children:"404"}),i.jsx(c,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),i.jsx(g,{to:"/",onClick:()=>n(a()),children:"Go Home"})]}),i.jsx(l,{})]})};export{b as default};
