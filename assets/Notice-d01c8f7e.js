import{i as h,j as r,a as l}from"./index-a13c0027.js";import{n as o}from"./emotion-styled.browser.esm-d55868b6.js";var p={exports:{}},y="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",d=y,f=d;function s(){}function a(){}a.resetWarningCache=s;var m=function(){function e(P,R,b,j,S,c){if(c!==f){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}e.isRequired=e;function t(){return e}var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:s};return i.PropTypes=i,i};p.exports=m();var u=p.exports;const x=h(u),g=o.div`
  display: flex;
  gap: 8px;
  width: 100%;
`,T=o.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: #efa082;
  display: flex;
  justify-content: center;
  align-items: center;
`;o.svg({width:"16px",height:"16px"});const v=o.div`
  width: 100%;
  height: auto;
  color: rgba(239, 237, 232, 0.3);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,w=({notice:e})=>r.jsxs(g,{children:[r.jsx(T,{children:r.jsx("svg",{width:"18",height:"18",fill:"#efede8",children:r.jsx("use",{href:`${l}#icon-warning`})})}),r.jsx(v,{children:e})]});w.propTypes={notice:x.string.isRequired};export{w as N,x as P};
