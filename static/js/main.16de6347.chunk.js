(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(4),c=a(3),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],d=a(8),u=a.n(d),m=a(0),j=function(e){var t=e.name,a=e.username,n=e.email;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("strong",{children:"Name"}),": ",t,Object(m.jsx)("br",{}),Object(m.jsx)("strong",{children:"User Name"}),": ",a,Object(m.jsx)("br",{}),"Email",": ",Object(m.jsx)("a",{className:"UserInfo",href:n,children:n})]})},b=function(e){var t=e.todo;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"TodoInfo__title","data-id":t.id,children:t.title}),t.user&&Object(m.jsx)(j,Object(c.a)({},t.user))]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)("article",{className:u()("TodoInfo",{"TodoInfo--completed":!0===e.completed}),children:Object(m.jsx)(b,{todo:e})},e.id)}))})},O=function(e){return l.find((function(t){return t.id===e}))||null},f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),p=function(){var e=Object(o.useState)(0),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),d=c[0],u=c[1],j=Object(o.useState)(f),b=Object(s.a)(j,2),p=b[0],x=b[1],v=Object(o.useState)(!0),y=Object(s.a)(v,2),N=y[0],S=y[1],g=0;return p.forEach((function(e){g<e.id&&(g=e.id+1)})),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault();var t={id:g,title:d,completed:!1,userId:a,user:O(a)};0!==a&&""!==d?(S(!0),x([].concat(Object(r.a)(p),[t])),n(0),u("")):S(!1)},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{type:"text","data-cy":"titleInput",value:d,onChange:function(e){u(e.target.value)}}),!N&&(""!==d||Object(m.jsx)("span",{className:"error",children:"Please enter a title"}))]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",value:a,onChange:function(e){n(+e.target.value)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.username)}))]}),!N&&(0!==a||Object(m.jsx)("span",{className:"error",children:"Please enter a user"}))]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:p})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.16de6347.chunk.js.map