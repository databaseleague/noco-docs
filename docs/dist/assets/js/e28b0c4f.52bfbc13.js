"use strict";(self.webpackChunknoco_docs=self.webpackChunknoco_docs||[]).push([[8880],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(n),g=o,m=s["".concat(c,".").concat(g)]||s[g]||u[g]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={title:"Upgrading",description:"Upgrading NocoDB : Docker, Node and Homebrew!"},i=void 0,l={unversionedId:"getting-started/upgrading",id:"version-0.109.7/getting-started/upgrading",title:"Upgrading",description:"Upgrading NocoDB : Docker, Node and Homebrew!",source:"@site/versioned_docs/version-0.109.7/020.getting-started/030.upgrading.md",sourceDirName:"020.getting-started",slug:"/getting-started/upgrading",permalink:"/0.109.7/getting-started/upgrading",draft:!1,editUrl:"https://github.com/nocodb/nocodb/tree/develop/packages/noco-docs/docs/versioned_docs/version-0.109.7/020.getting-started/030.upgrading.md",tags:[],version:"0.109.7",sidebarPosition:30,frontMatter:{title:"Upgrading",description:"Upgrading NocoDB : Docker, Node and Homebrew!"},sidebar:"tutorialSidebar",previous:{title:"Environment Variables",permalink:"/0.109.7/getting-started/environment-variables"},next:{title:"Demos",permalink:"/0.109.7/getting-started/demos"}},c={},d=[{value:"Docker",id:"docker",level:2},{value:"Find, Stop &amp; Delete NocoDB Docker Container",id:"find-stop--delete-nocodb-docker-container",level:3},{value:"Find &amp; Remove NocoDB Docker Image",id:"find--remove-nocodb-docker-image",level:3},{value:"Pull the latest NocoDB image with same environment variables",id:"pull-the-latest-nocodb-image-with-same-environment-variables",level:3},{value:"Example: Docker Upgrade",id:"example-docker-upgrade",level:3},{value:"Node",id:"node",level:2},{value:"Uninstall NocoDB package",id:"uninstall-nocodb-package",level:4},{value:"Install NocoDB package",id:"install-nocodb-package",level:4},{value:"Homebrew",id:"homebrew",level:2}],p={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"By default, if ",(0,o.kt)("inlineCode",{parentName:"p"},"NC_DB")," is not specified upon ",(0,o.kt)("a",{parentName:"p",href:"/getting-started/installation"},"installation"),", then SQLite will be used to store metadata. We suggest users to separate the metadata and user data in different databases as pictured in our ",(0,o.kt)("a",{parentName:"p",href:"/engineering/architecture"},"architecture"),". "),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("h3",{id:"find-stop--delete-nocodb-docker-container"},"Find, Stop & Delete NocoDB Docker Container"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# find NocoDB container ID\ndocker ps\n# stop NocoDB container\ndocker stop <YOUR_CONTAINER_ID>\n# delete NocoDB container\ndocker rm <YOUR_CONTAINER_ID>\n")),(0,o.kt)("p",null,"Note: Deleting your docker container without setting ",(0,o.kt)("inlineCode",{parentName:"p"},"NC_DB")," or mounting to a persistent volume for a default SQLite database will result in losing your data. See examples below."),(0,o.kt)("h3",{id:"find--remove-nocodb-docker-image"},"Find & Remove NocoDB Docker Image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# find NocoDB image\ndocker images\n# delete NocoDB image\ndocker rmi <YOUR_IMAGE_ID>\n")),(0,o.kt)("h3",{id:"pull-the-latest-nocodb-image-with-same-environment-variables"},"Pull the latest NocoDB image with same environment variables"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d -p 8080:8080 \\\n    -e NC_DB="<YOUR_NC_DB_URL>" \\\n    -e NC_AUTH_JWT_SECRET="<YOUR_NC_AUTH_JWT_SECRET_IF_GIVEN>" \\\n    nocodb/nocodb:latest\n')),(0,o.kt)("p",null,"Updating nocodb docker container is similar to updating ",(0,o.kt)("a",{parentName:"p",href:"https://www.whitesourcesoftware.com/free-developer-tools/blog/update-docker-images/"},"any other docker containers"),"."),(0,o.kt)("h3",{id:"example-docker-upgrade"},"Example: Docker Upgrade"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/5435402/133578984-53c6b96b-3e8b-4a96-b6c2-36f3c09ffdde.png",alt:"Screen Shot 2021-09-16 at 09 23 07"})),(0,o.kt)("h2",{id:"node"},"Node"),(0,o.kt)("p",null,"Updating docker container is similar to updating a npm package."),(0,o.kt)("p",null,"From your root folder "),(0,o.kt)("h4",{id:"uninstall-nocodb-package"},"Uninstall NocoDB package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm uninstall nocodb\n")),(0,o.kt)("h4",{id:"install-nocodb-package"},"Install NocoDB package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save nocodb\n")),(0,o.kt)("h2",{id:"homebrew"},"Homebrew"),(0,o.kt)("p",null,"Run following commands to upgrade Homebrew Nocodb version."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Update the local homebrew formulas\nbrew update\n# Upgrade nocodb package\nbrew upgrade nocodb\n")))}u.isMDXComponent=!0}}]);