(this["webpackJsonpreact-resume"]=this["webpackJsonpreact-resume"]||[]).push([[0],{358:function(e,c,s){"use strict";s.r(c);var t=s(3),n=s.n(t),a=s(86),i=s.n(a),r=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,359)).then((function(c){var s=c.getCLS,t=c.getFID,n=c.getFCP,a=c.getLCP,i=c.getTTFB;s(e),t(e),n(e),a(e),i(e)}))},o=(s(96),s(12)),l=s(23),d=s(87),m=s.n(d),j={particles:{number:{value:180,density:{enable:!0}},size:{value:3,random:!0,anim:{speed:4,size_min:.3}},line_linked:{enable:!1},move:{random:!0,speed:1,direction:"bottom",out_mode:"out"}}},b=s(2),h=function(){var e="".lsTheme,c="".lsIcon,s="".lsSnow;try{e=localStorage.getItem("theme"),c=localStorage.getItem("icon"),s=JSON.parse(localStorage.getItem("snow"))}catch(v){console.error("All Cookies blocked - Error: ".concat(v.message))}var n=Object(t.useState)(e||"light"),a=Object(l.a)(n,2),i=a[0],r=a[1],o=Object(t.useState)(c||"bx-moon"),d=Object(l.a)(o,2),h=d[0],u=d[1],p=Object(t.useState)(s),x=Object(l.a)(p,2),O=x[0],_=x[1];Object(t.useEffect)((function(){localStorage.setItem("theme",i),localStorage.setItem("icon",h),localStorage.setItem("snow",O),document.body.classList["dark"===i?"add":"remove"]("dark-theme")}),[i,O,h]);var N=function(){return O&&"dark"===i&&Object(b.jsx)(m.a,{params:j})};return Object(b.jsxs)("div",{className:"home__options",children:["dark"===i&&Object(b.jsx)("i",{className:"bx bx-cloud-snow enable-snow",title:"Activate Snow",id:"snow-button",onClick:function(){return _(!O)}}),Object(b.jsx)(N,{}),Object(b.jsx)("i",{className:"bx ".concat(h," change-theme"),title:"Toggle Theme",id:"theme-button",onClick:function(){r("light"===i?"dark":"light"),u("bx-sun"===h?"bx-moon":"bx-sun")}})]})},u=function(e){var c=e.name,s=e.ocupation,t=e.location,n=e.email,a=e.telephone,i=e.image;return Object(b.jsxs)("section",{className:"home",id:"home",children:[Object(b.jsxs)("div",{className:"home__container section bd-grid",children:[Object(b.jsxs)("div",{className:"home__data bd-grid",children:[Object(b.jsx)("img",{src:i,alt:"profile_image",className:"home__img"}),Object(b.jsx)("h1",{className:"home__title",children:Object(b.jsx)("strong",{children:c})}),Object(b.jsx)("h3",{className:"home__profession",children:s})]}),Object(b.jsxs)("div",{className:"home__address bd-grid",children:[Object(b.jsxs)("span",{className:"home__information",children:[Object(b.jsx)("i",{className:"bx bx-map home__icon"})," ",t]}),Object(b.jsxs)("span",{className:"home__information",children:[Object(b.jsx)("i",{className:"bx bx-envelope home__icon"})," ",n]}),Object(b.jsxs)("span",{className:"home__information",children:[Object(b.jsx)("i",{className:"bx bx-phone home__icon"})," ",a]})]})]}),Object(b.jsx)(h,{})]})},p=function(e){var c=e.academic;return Object(b.jsxs)("section",{className:"academic-experience section",id:"education",children:[Object(b.jsx)("h2",{className:"section-title",children:"Education"}),Object(b.jsx)("div",{className:"education__container bd-grid",children:c.map((function(e){return Object(b.jsx)(x,Object(o.a)({},e),e.institution)}))})]})},x=function(e){var c=e.career,s=e.date,t=e.institution;return Object(b.jsxs)("div",{className:"education__content",children:[Object(b.jsxs)("div",{className:"education__time",children:[Object(b.jsx)("span",{className:"education__rounder"}),Object(b.jsx)("span",{className:"education__line"})]}),Object(b.jsxs)("div",{className:"education__data bd-grid",children:[Object(b.jsx)("h3",{className:"education__title",children:c}),Object(b.jsx)("span",{className:"education__year",children:s}),Object(b.jsx)("span",{className:"education__studies",children:t})]})]})},O=function(e){var c=e.technicalLabel,s=e.softLabel,t=e.technicalSkills,n=e.softSkills;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("section",{className:"technical-skills section",id:"skills",children:[Object(b.jsx)("h2",{className:"section-title",children:c}),Object(b.jsx)("div",{className:"skills__content bd-grid",children:Object(b.jsx)("ul",{className:"skills__data",children:t.map((function(e){return Object(b.jsx)(_,{skill:e},e)}))})})]}),Object(b.jsxs)("section",{className:"soft-skills section",children:[Object(b.jsx)("h2",{className:"section-title",children:s}),Object(b.jsx)("div",{className:"skills__content bd-grid",children:Object(b.jsx)("ul",{className:"skills__data",children:n.map((function(e){return Object(b.jsx)(_,{skill:e},e)}))})})]})]})},_=function(e){var c=e.skill;return Object(b.jsxs)("li",{className:"skills__name",children:[Object(b.jsx)("span",{className:"skills__circle"})," ",c]})},N=function(e){var c=e.desc;return Object(b.jsx)("p",{className:"experience__description",children:c})},v=function(e){var c=e.proyects;return Object(b.jsxs)("section",{className:"proyects-experience section",id:"proyects",children:[Object(b.jsx)("h2",{className:"section-title",children:"Projects"}),Object(b.jsx)("div",{className:"experience__container bd-grid",children:c.map((function(e){return Object(b.jsx)(f,Object(o.a)({},e),e.company)}))})]})},f=function(e){var c=e.name,s=e.company,t=e.period,n=e.description;return Object(b.jsxs)("div",{className:"experience__content",children:[Object(b.jsxs)("div",{className:"experience__time",children:[Object(b.jsx)("span",{className:"experience__rounder"}),Object(b.jsx)("span",{className:"experience__line"})]}),Object(b.jsxs)("div",{className:"experience__data bd-grid",children:[Object(b.jsxs)("h3",{className:"experience__title",children:[c," - ",s]}),Object(b.jsx)("span",{className:"experience__proyect",children:t}),n.map((function(e,c){return Object(b.jsx)(N,{desc:e},c)}))]})]})},g=function(e){var c=e.works;return Object(b.jsxs)("section",{className:"work-experience section",id:"experience",children:[Object(b.jsx)("h2",{className:"section-title",children:"Experience"}),Object(b.jsx)("div",{className:"experience__container bd-grid",children:c.map((function(e){return Object(b.jsx)(k,Object(o.a)({},e),e.company)}))})]})},k=function(e){var c=e.title,s=e.period,t=e.company,n=e.description;return Object(b.jsxs)("div",{className:"experience__content",children:[Object(b.jsxs)("div",{className:"experience__time",children:[Object(b.jsx)("span",{className:"experience__rounder"}),Object(b.jsx)("span",{className:"experience__line"})]}),Object(b.jsxs)("div",{className:"experience__data bd-grid",children:[Object(b.jsx)("h3",{className:"experience__title",children:c}),Object(b.jsxs)("span",{className:"experience__company",children:[s," | ",t]}),n.map((function(e,c){return Object(b.jsx)(N,{desc:e},c)}))]})]})},y=function(e){var c=e.label,s=e.social;return Object(b.jsxs)("section",{className:"social section",children:[Object(b.jsx)("h2",{className:"section-title",children:c}),Object(b.jsx)("div",{className:"social__container bd-grid",children:s.map((function(e){return Object(b.jsx)(S,Object(o.a)({},e),e.name)}))})]})},S=function(e){var c=e.label,s=e.url,t=e.className;return Object(b.jsxs)("a",{href:s,target:"_blank",rel:"noreferrer",className:"social__link",children:[Object(b.jsx)("i",{className:"bx ".concat(t," social__icon")})," ",c]})},w=function(e){var c=e.label,s=e.description;return Object(b.jsxs)("section",{className:"profile section",id:"profile",children:[Object(b.jsx)("h2",{className:"section-title",children:c}),Object(b.jsx)("p",{className:"profile__description",children:s})]})},C=s(54),E=s(10),A=function(e){var c=e.menu,s=Object(t.useState)(!1),n=Object(l.a)(s,2),a=n[0],i=n[1],r=function(e){window.location.hash=e.target.hash,i(!a)};return Object(b.jsx)("header",{className:"l-header",id:"header",children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(E.b,{exact:!0,path:"/",children:Object(b.jsx)(E.a,{to:"/#home"})}),Object(b.jsxs)("nav",{className:"nav bd-container",children:[Object(b.jsx)("span",{className:"nav__logo",children:"Menu"}),Object(b.jsx)("div",{className:a?"nav__menu show-menu":"nav__menu",id:"nav-menu",children:Object(b.jsx)("ul",{className:"nav__list",children:c.map((function(e){var c=e.label,s=e.section,t=e.className;return Object(b.jsx)("li",{className:"nav__item",children:Object(b.jsxs)(C.b,{className:"nav__link",activeClassName:"active-link",onClick:r,to:{pathname:"/",hash:s},isActive:function(e,c){return c.hash===s},children:[Object(b.jsx)("i",{className:"bx ".concat(t," nav__icon")})," ",c]})},c)}))})}),Object(b.jsx)("div",{className:"nav__toggle",id:"nav-toggle",onClick:function(){return i(!a)},children:Object(b.jsx)("i",{className:"bx bx-grid-alt"})})]})]})})},I=s(89),P=function(e){var c=e.name,s=e.ocupation,t=e.description;return Object(b.jsxs)(I.a,{children:[Object(b.jsxs)("title",{children:[c," - ",s]}),Object(b.jsx)("meta",{name:"description",content:t})]})},L={name:"Pedro Sousa",ocupation:"FullStack Developer | QA Tester",location:"Ponta Delgada, Azores",email:"pedro.p.sousa@sapo.pt",telephone:"+351 910320910",image:"images/1618678297300.jpg"},T={label:"Profile",description:"Dedicated QA Tester, extremely motivated to constantly develop my skills, grow professionally and always willing to learn new technologies."},M={technicalLabel:"Technologies",softLabel:"Skills",technicalSkills:["Outsystems","JavaScript, HTML, CSS, JQuery","TDD, Java, Spring, JDBC,","Tomcat, MySql .C#, .NET Core","Entity Framework Core, C++; Arduino","MYSQL, MicroSoft Sql","Apache, IIS, MVC","WordPress, Elementor, Woocommerce"],softSkills:["Time Management","Critical thinking","Team work","Communication","Self-taught"]},D={label:"SOCIAL",social:[{label:"Pedro",name:"linkedin",url:"https://www.linkedin.com/in/pirilampo/",className:"bxl-linkedin-square"},{label:"Pedro",name:"github",url:"https://github.com/Atomic-C",className:"bxl-github"}]},J={works:[{title:"Web DEVELOPER",period:"Sept. 2022 - NOW",company:"Redshift II",description:["Enterprise grade application development with Outsystems"]},{title:"FULL-STACK DEVELOPER",period:"Jun. 2021 - Jun. 2022",company:"Infosyncro Consulting",description:["Developed websites for companies and increased their web presence, optimized loading times by 123%;","Boosted traffic with SEO;","Consumed APIs to save time, IE: Syncfusion, Sweet Alert;","Saved time with code-first approach migrations AND LINQ;","Pre-production testing;"]}],academic:[{career:"IMMERSIVE FULLSTACK PROGRAMMING BOOTCAMP",date:"2021",institution:"Academia de C\xf3digo - AC"}],proyects:[{name:"Test Driven Development Lab",company:"Personal Development",period:"Jul. 2022 - Present",description:["Automated testing saves both time and money, tests are written once and can be run anytime as many times as we need throughout development!"]},{name:"Infosyncro's Website",company:"Infosyncro",period:"Dec. 2021 - Feb. 2022",description:["Company Website was re-built in order for Infosyncro to have it's very own internally developed product."]},{name:"E-commerce Masonry",company:"Personal Development",period:"Jul. 2021 - Dec. 2021",description:["B2B E-Commerce store made to refresh OOP concepts, explore .NET Core, Entiy Framework Core 5 and relationships."]},{name:"Wall Breaker - Arkanoid",company:"Personal Development",period:"Jun. 2021 - Jul. 2021",description:["Inspired on 1986's block breaker arcade game published by Romstar, this game began with the purpose of learning more about Unity and C#."]},{name:"Hackathon 24H",company:"Academia de C\xf3digo",period:"Apr. 2021 - Apr. 2021",description:["A page to create web presence for radical sports made using MVC, MySql, Hibernate, Jpa, HTML, CSS and BootStrap"]}]},F={menu:[{label:"Home",section:"#home",className:"bx-home"},{label:"Profile",section:"#profile",className:"bx-user"},{label:"Skills",section:"#skills",className:"bx-receipt"},{label:"Experience",section:"#experience",className:"bx-briefcase-alt"},{label:"Education",section:"#education",className:"bx-book"},{label:"Projects",section:"#proyects",className:"bx-award"}]},B=function(){var e="(min-width: 968px)",c=Object(t.useState)(window.matchMedia(e).matches),s=Object(l.a)(c,2),n=s[0],a=s[1];Object(t.useEffect)((function(){var c=window.matchMedia(e),s=function(){return a(c.matches)};return c.addEventListener("change",s),function(){return c.removeEventListener("change",s)}}),[n]);var i=L,r=T,d=M,m=D,j=J;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(P,Object(o.a)(Object(o.a)({},i),r)),!n&&Object(b.jsx)(A,Object(o.a)({},F)),Object(b.jsx)("main",{className:"l-main bd-container",id:"bd-container",children:Object(b.jsxs)("div",{className:"resume",id:"area-cv",children:[Object(b.jsxs)("div",{className:"resume__left",children:[Object(b.jsx)(u,Object(o.a)({},i)),Object(b.jsx)(w,Object(o.a)({},r)),Object(b.jsx)(O,Object(o.a)({},d)),Object(b.jsx)(y,Object(o.a)({},m))]}),Object(b.jsxs)("div",{className:"resume__right",children:[Object(b.jsx)(g,Object(o.a)({},j)),Object(b.jsx)(p,Object(o.a)({},j)),Object(b.jsx)(v,Object(o.a)({},j))]})]})})]})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),r()},96:function(e,c,s){}},[[358,1,2]]]);
//# sourceMappingURL=main.60c9902e.chunk.js.map