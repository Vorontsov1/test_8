"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[699],{4699:function(n,e,r){r.r(e),r.d(e,{default:function(){return T}});var t,o,i,a,s,c,d,l=r(4270),x=r(9434),p=r(6916),u=function(n){return n.contacts.items},f=function(n){return n.contacts.isLoading},b=function(n){return n.contacts.error},h=(0,p.P1)([u,function(n){return n.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),m=r(7322),g=r(7450),j=r(168),v=r(6444),Z=v.ZP.div(t||(t=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  padding: 5px 0;\n"]))),y=v.ZP.p(o||(o=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 5px;\n  font-family: inherit;\n  font-size: 15px;\n\n  flex-grow: 1;\n\n  span {\n    font-size: 12px;\n  }\n"]))),w=v.ZP.div(i||(i=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n\n  border-radius: 50%;\n  background-color: ",";\n"])),(function(n){return n.color})),z=v.ZP.button(a||(a=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 0;\n  margin: 0;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n\n  svg {\n    color: #bdbdbd;\n  }\n\n  &:hover {\n    svg {\n      color: #2196f3;\n    }\n  }\n"]))),k=r(184),P=function(n){var e,r=n.contact,t=r.id,o=r.name,i=r.phone,a=(0,x.I0)();return(0,k.jsxs)(Z,{children:[(0,k.jsx)(w,{color:"#".concat(Math.floor(16777215*Math.random()).toString(16)),children:(e=o,e.charAt(0).toUpperCase())}),(0,k.jsxs)(y,{children:[o,(0,k.jsxs)("span",{children:["Phone: ",i]})]}),(0,k.jsx)(z,{type:"button",onClick:function(){a((0,g.GK)(t))},children:(0,k.jsx)(m.FH3,{size:28})})]})},C=v.ZP.ul(s||(s=(0,j.Z)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),F=v.ZP.li(c||(c=(0,j.Z)(["\n  border-top: 1px solid #2f2f37;\n"]))),_=function(){var n=(0,x.v9)(h);return(0,k.jsx)(C,{children:n.map((function(n){return(0,k.jsx)(F,{children:(0,k.jsx)(P,{contact:n})},n.id)}))})},A=r(2791),L=r(5984),q=v.ZP.form(d||(d=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n\n  margin-bottom: 20px;\n\n  label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 20px;\n  }\n  input {\n    width: 250px;\n\n    font-size: 14px;\n\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n    background-color: transparent;\n    padding: 5px;\n    outline: none;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:focus {\n      border-color: #2196f3;\n    }\n  }\n  button {\n    padding: 5px 5px;\n    border: none;\n    border-radius: 4px;\n    min-width: 90px;\n\n    background-color: #2196f3;\n    color: #ffffff;\n\n    font-family: inherit;\n    font-weight: 500;\n    font-size: 14px;\n\n    text-align: center;\n\n    cursor: pointer;\n\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      color 250ms cubic-bezier(0.4, 0, 0.2, 1),\n      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    &:focus {\n      background-color: #2196f3;\n      color: #ffffff;\n      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),\n        0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);\n    }\n  }\n"])));function I(){var n=(0,x.v9)(u),e=(0,x.I0)();return(0,k.jsxs)(q,{onSubmit:function(r){r.preventDefault();var t=r.target,o=t.name,i=t.number,a={name:o.value,phone:i.value};if(n.some((function(n){return n.name.toLowerCase()===o.value.toLowerCase()})))return alert("".concat(o.value," is already in contacts."));e((0,g.uK)(a)),t.reset()},children:[(0,k.jsxs)("div",{children:[(0,k.jsx)("label",{htmlFor:(0,L.x0)(),children:"Name"}),(0,k.jsx)("input",{id:(0,L.x0)(),type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,k.jsxs)("div",{children:[(0,k.jsx)("label",{htmlFor:(0,L.x0)(),children:"Number"}),(0,k.jsx)("input",{id:(0,L.x0)(),type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,k.jsx)("button",{type:"submit",children:"Add contact"})]})}var M,N,K,S,B=r(3165),D=v.ZP.div(M||(M=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 5px;\n\n  margin-bottom: 20px;\n\n  label {\n    display: block;\n    margin-bottom: 5px;\n    font-size: 20px;\n  }\n  input {\n    width: 250px;\n\n    font-size: 12px;\n\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n    background-color: transparent;\n    padding: 5px;\n    outline: none;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:focus {\n      border-color: #2196f3;\n    }\n  }\n"]))),E=function(){var n=(0,x.I0)();return(0,k.jsx)(D,{children:(0,k.jsxs)("div",{children:[(0,k.jsx)("label",{htmlFor:(0,L.x0)(),children:"Find contacts by name"}),(0,k.jsx)("input",{id:(0,L.x0)(),type:"text",name:"filter",onChange:function(e){var r=e.target.value;n((0,B.T)(r.trim()))}})]})})},G=v.ZP.div(N||(N=(0,j.Z)(["\n  width: 280px;\n  padding: 20px;\n\n  margin: 0 auto;\n\n  border: 1px solid black;\n  border-radius: 10px;\n  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,\n    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;\n"]))),H=v.ZP.h1(K||(K=(0,j.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 700;\n  font-size: 30px;\n"]))),J=v.ZP.h2(S||(S=(0,j.Z)(["\n  margin-bottom: 20px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 30px;\n"]))),R=function(){var n=(0,x.I0)(),e=(0,x.v9)(f),r=(0,x.v9)(b);return(0,A.useEffect)((function(){n((0,g.yF)())}),[n]),(0,k.jsxs)(G,{children:[(0,k.jsx)(H,{children:"Phonebook"}),(0,k.jsx)(I,{}),(0,k.jsx)(J,{children:"Contacts"}),(0,k.jsx)(E,{}),e&&!r&&(0,k.jsx)("b",{children:"Request in progress..."}),(0,k.jsx)(_,{})]})};function T(){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(l.q,{children:(0,k.jsx)("title",{children:"Your contacts"})}),(0,k.jsx)(R,{}),(0,k.jsx)(_,{})]})}}}]);
//# sourceMappingURL=699.0a5d1cba.chunk.js.map