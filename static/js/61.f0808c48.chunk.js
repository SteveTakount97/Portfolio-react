"use strict";(self.webpackChunkportfolio_react=self.webpackChunkportfolio_react||[]).push([[61],{61:(e,l,s)=>{s.r(l),s.d(l,{default:()=>d});var c=s(43),o=s(184),r=s(355),a=s(579);const t=e=>{let{project:l=[],title:s}=e;const[o,r]=(0,c.useState)(0),t=(0,c.useCallback)((()=>{r((o+1)%l.length)}),[o,l.length]);return(0,c.useEffect)((()=>{const e=setTimeout((()=>{t()}),5e3);return()=>clearTimeout(e)}),[t]),(0,a.jsxs)("div",{className:"cover",children:[(0,a.jsx)("div",{className:"carousel-image",children:(0,a.jsx)("img",{src:`/Portfolio-react${l[o]}`,alt:s,className:"image-caroussel"})}),l.length>1&&(0,a.jsxs)("div",{className:"image-counter",children:[o+1,"/",l.length]})]})};var n=s(965);const i=[{name:"HTML",level:"90%",color:"#e34c26",icon:(0,a.jsx)(o.Sc0,{})},{name:"CSS",level:"85%",color:"#1572B6",icon:(0,a.jsx)(o.hDM,{})},{name:"SASS",level:"85%",color:"#1572B6",icon:(0,a.jsx)(o.hDM,{})},{name:"JavaScript",level:"50%",color:"#f7df1e",icon:(0,a.jsx)(o._MR,{})},{name:"React",level:"50%",color:"#61DBFB",icon:(0,a.jsx)(o.rMV,{})},{name:"Notion, Lighthouse",level:"90%",color:"green",icon:(0,a.jsx)(r.i4$,{})},{name:"React-redux",level:"50%",color:"black",icon:(0,a.jsx)(r.fpf,{})},{name:"React Developper Tools",level:"70%",color:"#68A063",icon:(0,a.jsx)(o.rMV,{})},{name:"Git, Github",level:"85%",color:"#F05032",icon:(0,a.jsx)(o.N7L,{})},{name:"PHP, Laravel",level:"50%",color:"#F05020",icon:(0,a.jsx)(o.kbw,{})}],d=()=>{const[e,l]=(0,c.useState)([]);(0,c.useEffect)((()=>{(async()=>{try{const e=await(0,n.P)("/data.json");l(e)}catch(e){console.error("Erreur lors du chargement des projets",e)}})()}),[]);const s=e.map((e=>e.image)),o=e.map((e=>e.title));return(0,a.jsxs)("div",{id:"skills-wrapper",children:[(0,a.jsx)("h2",{children:"Mes Comp\xe9tences"}),(0,a.jsxs)("section",{id:"skills",children:[(0,a.jsx)("div",{className:"skills-image",children:(0,a.jsx)(t,{project:s,title:o})}),(0,a.jsx)("div",{className:"skills-container",children:i.map(((e,l)=>(0,a.jsxs)("div",{className:"skill",children:[(0,a.jsxs)("div",{className:"skill-header",children:[e.icon," ",(0,a.jsx)("h3",{children:e.name})]}),(0,a.jsx)("div",{className:"skill-bar",children:(0,a.jsx)("div",{className:"skill-level",style:{width:e.level,backgroundColor:e.color},children:(0,a.jsx)("span",{children:e.level})})})]},l)))})]})]})}},965:(e,l,s)=>{s.d(l,{P:()=>c});const c=async()=>{try{const e=await fetch("/Portfolio-react/dataProjet.json");if(!e.ok)throw new Error("Erreur lors de la r\xe9cup\xe9ration des donn\xe9es");return await e.json()}catch(e){console.error("Pas de data:",e)}}}}]);
//# sourceMappingURL=61.f0808c48.chunk.js.map