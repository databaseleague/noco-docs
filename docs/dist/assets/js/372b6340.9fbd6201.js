"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[9288],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>v});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},w=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(i),w=n,v=u["".concat(s,".").concat(w)]||u[w]||p[w]||r;return i?a.createElement(v,l(l({ref:t},d),{},{components:i})):a.createElement(v,l({ref:t},d))}));function v(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=w;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<r;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}w.displayName="MDXCreateElement"},3755:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=i(7462),n=(i(7294),i(3905));const r={title:"Views",description:"Understanding Views in NocoDB!"},l=void 0,o={unversionedId:"setup-and-usages/views",id:"setup-and-usages/views",title:"Views",description:"Understanding Views in NocoDB!",source:"@site/docs/030.setup-and-usages/160.views.md",sourceDirName:"030.setup-and-usages",slug:"/setup-and-usages/views",permalink:"/setup-and-usages/views",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/docs/030.setup-and-usages/160.views.md",tags:[],version:"current",sidebarPosition:160,frontMatter:{title:"Views",description:"Understanding Views in NocoDB!"},sidebar:"tutorialSidebar",previous:{title:"Keyboard Maneuver",permalink:"/setup-and-usages/keyboard-maneuver"},next:{title:"Account Settings",permalink:"/setup-and-usages/account-settings"}},s={},c=[{value:"What&#39;s a View?",id:"whats-a-view",level:2},{value:"View Types",id:"view-types",level:2},{value:"Grid View",id:"grid-view",level:3},{value:"Form View",id:"form-view",level:3},{value:"Gallery View",id:"gallery-view",level:3},{value:"Kanban View",id:"kanban-view",level:3},{value:"View Permission Types",id:"view-permission-types",level:2},{value:"Collaborative Views (default)",id:"collaborative-views-default",level:3},{value:"Locked Views",id:"locked-views",level:3},{value:"Personal Views",id:"personal-views",level:3},{value:"View Operations",id:"view-operations",level:2},{value:"Create a View",id:"create-a-view",level:3},{value:"Rename a View",id:"rename-a-view",level:3},{value:"Delete a View",id:"delete-a-view",level:3},{value:"Duplicate a View",id:"duplicate-a-view",level:3},{value:"Reorder a View",id:"reorder-a-view",level:3}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"whats-a-view"},"What's a View?"),(0,n.kt)("p",null,"In a table, you can use different views to display your data. You can show specific fields in a View. You can also apply Sorting or Filtering to the View. Each View is independent, which means the configuration applying to View 1 will not apply to View 2. "),(0,n.kt)("p",null,"To navigate different views, we can select the target one in the view sidebar. By default, Grid View will be created for you after creating the table. You can create multiple views of a type, as long as they have unique View names."),(0,n.kt)("h2",{id:"view-types"},"View Types"),(0,n.kt)("h3",{id:"grid-view"},"Grid View"),(0,n.kt)("p",null,"Grid View, as a default type of view, allows you to display your data in a spreadsheet-like interface."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1010-2 Grid",src:i(629).Z,width:"1512",height:"802"})),(0,n.kt)("h3",{id:"form-view"},"Form View"),(0,n.kt)("p",null,"Form View allows you to arrange fields in a form to input data."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1010-2 Form",src:i(8054).Z,width:"1533",height:"868"})),(0,n.kt)("p",null,"You can drag-drop columns from the form to form-field-menu-bar as required."),(0,n.kt)("h3",{id:"gallery-view"},"Gallery View"),(0,n.kt)("p",null,"Gallery View allows you to display images as thumbnails with other fields just like a gallery."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1010-2 Gallery",src:i(6690).Z,width:"1532",height:"869"})),(0,n.kt)("h3",{id:"kanban-view"},"Kanban View"),(0,n.kt)("p",null,"Kanban View allows you to visualise your data using cards at various stacks."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"1010-2 Kanban",src:i(6450).Z,width:"1531",height:"865"})),(0,n.kt)("h2",{id:"view-permission-types"},"View Permission Types"),(0,n.kt)("p",null,"We can apply permission to each View. By default, Collaborative Views will be used. To see or change the view type, expand ",(0,n.kt)("inlineCode",{parentName:"p"},"view-tool-bar-menu")," as shown below."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/41b28e3b-f8c3-46b7-8e9e-894706379a1c",alt:"locked view"})),(0,n.kt)("h3",{id:"collaborative-views-default"},"Collaborative Views (default)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Collaborators with edit permissions or higher can change the view configurations")),(0,n.kt)("h3",{id:"locked-views"},"Locked Views"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"No one can edit view configurations until it is Unlocked"),(0,n.kt)("li",{parentName:"ul"},"All collaborators can only READ data from such views")),(0,n.kt)("h3",{id:"personal-views"},"Personal Views"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Only you can edit the view configuration."),(0,n.kt)("li",{parentName:"ul"},"Your personal views are hidden for other collaborators"),(0,n.kt)("li",{parentName:"ul"},"Are not available currently; will be enabled in future release")),(0,n.kt)("h2",{id:"view-operations"},"View Operations"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://github.com/nocodb/nocodb/assets/86527202/c210de4a-7bc2-4b21-bc64-e68c52c1ba21",alt:"view operations"})),(0,n.kt)("h3",{id:"create-a-view"},"Create a View"),(0,n.kt)("p",null,"Click ",(0,n.kt)("inlineCode",{parentName:"p"},"+")," in View-menu sidebar"),(0,n.kt)("h3",{id:"rename-a-view"},"Rename a View"),(0,n.kt)("p",null,"Double click on ",(0,n.kt)("inlineCode",{parentName:"p"},"view-name"),", edit, click ",(0,n.kt)("inlineCode",{parentName:"p"},"enter"),"."),(0,n.kt)("h3",{id:"delete-a-view"},"Delete a View"),(0,n.kt)("p",null,"Hover the target View and click the delete icon"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"You cannot delete the very first Grid View (termed as ",(0,n.kt)("inlineCode",{parentName:"p"},"Default view"),").")),(0,n.kt)("h3",{id:"duplicate-a-view"},"Duplicate a View"),(0,n.kt)("p",null,"Hover the target View and click the copy icon"),(0,n.kt)("h3",{id:"reorder-a-view"},"Reorder a View"),(0,n.kt)("p",null,"Hover the target View and re-order it as needed by drag-drop the drag icon"))}p.isMDXComponent=!0},8054:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/form-ce1b4c53ec8b9d03001e4524873fb4d6.png"},6690:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/gallery-fe837d40324b1f9479964a3280055db7.png"},629:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/grid-b17c1fc262057c2c71cbcf040f997f00.png"},6450:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/kanban-2fe2bc205278641a8c03e689dfeb2917.png"}}]);