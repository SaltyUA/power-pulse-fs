import{s as i,u as A,c as R,i as S,e as j,j as e,a as f,k as L,m as U,n as D,b as o,o as B}from"./index-ec9fdf17.js";import{N as E,T as I}from"./TitlePage.styled-13ce34d2.js";import{n as a}from"./emotion-styled.browser.esm-46f93cb9.js";import{F as N,a as P}from"./formik.esm-cbe7e4e5.js";import{P as O}from"./PageAnimatedWrapper-b38db8d0.js";import"./hoist-non-react-statics.cjs-3f8ebaa8.js";const M=a.div`
  min-width: 281px;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  justify-content: center;
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    padding-top: 64px;
  }

  @media screen and (min-width: 1440px) {
    min-width: 439px;
    padding-top: 0;
    justify-content: flex-start;

    padding-left: 49px;
    padding-bottom: 32px;

    border-left: 1px solid ${i.navLinkColor};
  }
`,V=a.div`
  position: relative;
  width: 90px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: solid 1px #e6533c;
  border-radius: 50%;

  & > img {
    border-radius: 50%;
    width: 90px;
    height: 90px;

    @media screen and (min-width: 768px) {
      width: 150px;
      height: 150px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`,q=a.button`
  padding: 0px;
  position: absolute;
  bottom: -12px;
  right: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
  border-radius: 50%;

  & svg {
    fill: ${i.orangeColor};
    transition: fill 250ms linear;
  }
  & svg {
    &:hover,
    &:focus {
      fill: ${i.orange2Color};
    }
  }

  @media screen and (min-width: 768px) {
    bottom: -16px;
    right: 59px;
  }

  & svg {
    width: 24px;
    height: 24px;

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }
`,G=a.p`
  margin-top: 30px;
  color: #efede8;
  font-size: 18px;
  line-height: calc(20 / 18);

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    font-size: 24px;
    line-height: calc(28 / 24);
  }
`,H=a.p`
  margin-top: 4px;
  color: rgba(239, 237, 232, 0.5);
  font-size: 14px;
  line-height: calc(18 / 14);

  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`,X=a.div`
  display: flex;
  justify-content: center;
  gap: 14px;

  margin-top: 40px;
  width: 100%;

  @media screen and (min-width: 768px) {
    gap: 16px;
    margin-top: 32px;
  }
`,v=a.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  flex-basis: calc(100% / 2);

  height: 96px;

  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);

  background: #e6533c;

  padding: 14px;

  @media screen and (min-width: 768px) {
    padding-inline: 18px;
    max-width: 214px;
    height: 108px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 210px;
  }
`,C=a.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #efede8;
  font-style: normal;
  opacity: 0.8;

  @media screen and (min-width: 768px) {
    line-height: calc(18 / 12);
  }
`,k=a.span`
  color: #efede8;
  font-size: 18px;
  font-weight: 700;
  line-height: calc(20 / 18);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: calc(32 / 24);
    bottom: 14px;
    left: 18px;
  }
`,Y=a.div`
  margin-top: 40px;
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 439px;
  }
`,J=a.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-top: 40px;
  & svg {
    stroke: ${i.orangeColor};
    transition: fill 250ms linear;
  }
  & svg {
    &:hover,
    &:focus {
      stroke: ${i.orange2Color};
    }
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    width: 439px;
    margin-left: 0;
  }
`,K=()=>{const m=A(),r=R(S),[g,b]=j.useState(r.avatarURL),x=j.useRef(null),n=s=>{s.preventDefault(),console.log(),x.current&&x.current.click()},t=async s=>{const l=s.currentTarget.files[0];l&&b(URL.createObjectURL(l));try{await m(U(l))}catch(w){console.log("Error updating avatar:",w)}},c=()=>m(D());return e.jsxs(M,{children:[e.jsxs(V,{children:[g?e.jsx("img",{src:g,alt:"User Avatar"}):e.jsx("svg",{width:"61",height:"62",fill:"#efede8",children:e.jsx("use",{href:`${f}#user`})}),e.jsxs("form",{children:[e.jsx("input",{hidden:!0,type:"file",name:"avatarURL",accept:"image/*",ref:x,onChange:t}),e.jsx(q,{onClick:n,children:e.jsx("svg",{children:e.jsx("use",{href:`${f}#add`})})})]})]}),e.jsx(G,{children:r.name}),e.jsx(H,{children:"User"}),e.jsxs(X,{children:[e.jsxs(v,{children:[e.jsxs(C,{children:[e.jsx("svg",{width:"20",height:"20",fill:"#efede8",children:e.jsx("use",{href:`${f}#food`})}),"Daily calorie intake"]}),e.jsx(k,{children:r.dailyCalories})]}),e.jsxs(v,{children:[e.jsxs(C,{children:[e.jsx("svg",{width:"20",height:"20",fill:"#efede8",children:e.jsx("use",{href:`${f}#dumbbell`})}),"Daily physical activity"]}),e.jsxs(k,{children:[r.dailySportTime," min"]})]})]}),e.jsx(Y,{children:e.jsx(E,{notice:`We understand that each individual is unique, so the entire approach
          to diet is relative and tailored to your unique body and goals.`})}),e.jsx(J,{onClick:c,children:e.jsx(L,{})})]})},Q=o(N)`
  margin-top: 19px;
  margin-bottom: 44px;

  width: 100%;

  @media (min-width: 375px) {
    width: 335px;
  }

  @media (min-width: 768px) {
    margin-top: 38px;
    margin-bottom: 54px;

    width: 704px;
  }

  @media (min-width: 1440px) {
    margin: 0 64px 0 0;
  }
`,Z=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  margin-bottom: 14px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,_=o.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 100%;

  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,$=o.div`
  display: flex;
  gap: 14px;
`,ee=o.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`,ie=o.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 38px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 48px;
  }
`,te=o.div`
  display: flex;
  gap: 21px;
  flex-direction: column;

  @media (min-width: 375px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    gap: 32px;
  }
`,z=o.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  color: ${i.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  @media (min-width: 768px) {
    gap: 8px;

    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
  }
`,y=o.label`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 2);
  gap: 4px;

  color: ${i.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  @media (min-width: 375px) {
    width: 160px;
  }

  @media (min-width: 768px) {
    width: 165px;
    gap: 8px;

    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
  }
`,u=o.input`
  padding: 14px;

  width: 100%;

  color: ${i.whiteColor};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${i.greyTextColor};
  background: transparent;

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${i.orangeColor};
    background-color: transparent;
    outline: none;
  }

  @media (min-width: 768px) {
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`,ne=o.input`
  padding: 14px;

  width: 100%;

  color: ${i.whiteColor};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${i.greyTextColor};
  background: transparent;

  &:focus,
  &:hover,
  &:active {
    border: 1px solid ${i.orangeColor};
    background-color: transparent;
    outline: none;
  }

  @media (min-width: 768px) {
    width: 345px;

    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`,oe=o.input`
  padding: 14px;

  width: 100%;

  color: ${i.greyTextColor};

  font-size: 14px;
  font-style: normal;
  line-height: 1.43;

  border-radius: 12px;
  border: 1px solid ${i.greyTextColor};
  background: transparent;

  @media (min-width: 768px) {
    width: 345px;

    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`,re=o.p`
  color: ${i.greyTextColor};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  line-height: 1.5;

  margin-bottom: 5px;

  @media (min-width: 768px) {
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;

    margin-bottom: 8px;
  }
`,p=o.label`
  display: flex;
  align-items: center;

  gap: 8px;

  font-family: Roboto;
  font-size: 14px;
  line-height: 1.29;

  color: ${i.whiteColor};

  cursor: pointer;

  @media (min-width: 768px) {
    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`,h=o.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;

  width: 100%;

  font-size: 14px;
  line-height: 1.29;

  color: ${i.whiteColor};

  cursor: pointer;

  @media (min-width: 375px) {
    width: 326px;
  }

  @media (min-width: 768px) {
    width: 530px;

    font-family: Roboto;
    font-size: 16px;
    line-height: 1.5;
  }
`,d=o.input`
  appearance: none;

  min-width: 18px;
  min-height: 18px;

  font: inherit;
  color: ${i.orangeColor};
  background-color: transparent;

  border: 0.11em solid ${i.greyTextColor};
  border-radius: 50%;

  cursor: pointer;

  &:checked {
    border: 0.11em solid ${i.orange2Color};
    background: radial-gradient(
      circle,
      ${i.orange2Color} 40%,
      transparent 50%
    );
  }

  @media (min-width: 768px) {
    margin-top: 0;

    min-width: 20px;
    min-height: 20px;
  }
`,ae=o.button`
  padding: 12px 40px;

  font-weight: 500;
  line-height: 1.43;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.13;

  border: 1px solid ${i.orangeColor};
  border-radius: 12px;

  background-color: ${i.orangeColor};
  color: ${i.whiteColor};

  cursor: pointer;

  transition: background-color 0.3s ease;
  text-transform: none;

  &:hover {
    background-color: transparent;
  }

  @media (min-width: 768px) {
    padding: 16px 50px;

    font-size: 20px;
    line-height: 1.2;
  }
`,de=()=>{const m=A(),r=R(S),g={name:r.name??"",height:r.height??150,currentWeight:r.currentWeight??35,desiredWeight:r.desiredWeight??35,birthday:r.birthday??"1990-01-01",blood:String(r.blood)??"1",sex:r.sex??"male",levelActivity:String(r.levelActivity)??"1"};function b(n){const t=new Date(n),c=t.getDate().toString().padStart(2,"0"),s=(t.getMonth()+1).toString().padStart(2,"0"),l=t.getFullYear();return`${c}.${s}.${l}`}const x=n=>{const{birthday:t,blood:c,currentWeight:s,desiredWeight:l,height:w,levelActivity:W,name:F,sex:T}=n;m(B({name:F,height:w,currentWeight:s,desiredWeight:l,birthday:b(t),blood:c,sex:T,levelActivity:Number(W)}))};return e.jsx(P,{initialValues:g,onSubmit:x,children:({handleChange:n,values:t})=>e.jsxs(Q,{children:[e.jsxs(Z,{children:[e.jsxs(z,{children:["Name",e.jsx(ne,{type:"text",id:"name",name:"name",value:t.name,onChange:n})]}),e.jsxs(z,{children:["Email",e.jsx(oe,{type:"text",id:"email",name:"email",defaultValue:r.email,readOnly:!0,disabled:!0})]})]}),e.jsxs(_,{children:[e.jsxs($,{children:[e.jsxs(y,{children:["Height",e.jsx(u,{type:"number",id:"height",name:"height",value:t.height,onChange:n})]}),e.jsxs(y,{children:["Current Weight",e.jsx(u,{type:"number",id:"currentWeight",name:"currentWeight",value:t.currentWeight,onChange:n})]})]}),e.jsxs($,{children:[e.jsxs(y,{children:["Desired Weight",e.jsx(u,{type:"number",id:"desiredWeight",name:"desiredWeight",value:t.desiredWeight,onChange:n})]}),e.jsxs(y,{children:["Date of birth",e.jsx(u,{type:"date",id:"birthday",name:"birthday",value:t.birthday,onChange:n,style:{pointerEvents:"none"}})]})]})]}),e.jsxs(ee,{children:[e.jsx(re,{children:"Blood"}),e.jsxs(te,{children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"blood",value:"1",checked:t.blood==="1",onChange:n}),"1"]}),e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"blood",value:"2",checked:t.blood==="2",onChange:n}),"2"]}),e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"blood",value:"3",checked:t.blood==="3",onChange:n}),"3"]}),e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"blood",value:"4",checked:t.blood==="4",onChange:n}),"4"]})]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"sex",value:"male",checked:t.sex==="male",onChange:n}),"Male"]}),e.jsxs(p,{children:[e.jsx(d,{type:"radio",name:"sex",value:"female",checked:t.sex==="female",onChange:n}),"Female"]})]})]})]}),e.jsxs(ie,{children:[e.jsxs(h,{children:[e.jsx(d,{type:"radio",name:"levelActivity",value:"1",checked:t.levelActivity==="1",onChange:n}),"Sedentary lifestyle (little or no physical activity)"]}),e.jsxs(h,{children:[e.jsx(d,{type:"radio",name:"levelActivity",value:"2",checked:t.levelActivity==="2",onChange:n}),"Light activity (light exercises/sports 1-3 days per week)"]}),e.jsxs(h,{children:[e.jsx(d,{type:"radio",name:"levelActivity",value:"3",checked:t.levelActivity==="3",onChange:n}),"Moderately active (moderate exercises/sports 3-5 days per week)"]}),e.jsxs(h,{children:[e.jsx(d,{type:"radio",name:"levelActivity",value:"4",checked:t.levelActivity==="4",onChange:n}),"Very active (intense exercises/sports 6-7 days per week)"]}),e.jsxs(h,{children:[e.jsx(d,{type:"radio",name:"levelActivity",value:"5",checked:t.levelActivity==="5",onChange:n}),"Extremely active (very strenuous exercises/ sports and physical work)"]})]}),e.jsx(ae,{type:"submit",children:"Save"})]})})},se=a.div`
  width: 100%;
  margin-inline: auto;
  padding-inline: 20px;

  @media screen and (min-width: 375px) {
    width: 375px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding-inline: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding-inline: 96px;
  }
`,le=a.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;

    margin-top: 32px;
  }
`,fe=()=>e.jsx(O,{direction:"X",children:e.jsxs(se,{children:[e.jsx(I,{children:"Profile Settings"}),e.jsxs(le,{children:[e.jsx(K,{}),e.jsx(de,{})]})]})});export{fe as default};
