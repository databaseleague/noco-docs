__NUXT_JSONP__("/setup-and-usages/nocodb-dashboard", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:[{document:{slug:"nocodb-dashboard",description:h,title:h,position:10,category:"Setup and Usages",menuTitle:h,toc:[{id:j,depth:k,text:l},{id:m,depth:k,text:n}],body:{type:"root",children:[{type:b,tag:o,props:{id:j},children:[{type:b,tag:p,props:{ariaHidden:q,href:"#setup-your-first-super-admin",tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you have started NocoDB, you can visit the dashboard via "},{type:b,tag:e,props:{},children:[{type:a,value:"example.com\u002Fdashboard"}]},{type:a,value:i}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{},children:[{type:a,value:"Let's Begin"}]},{type:a,value:" button to sign up."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597128-f88df6e5-7625-4208-9817-68e9303410ff.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Enter your work email and your password."}]},{type:a,value:c},{type:b,tag:"alert",props:{},children:[{type:a,value:"\n  Your password has at least 8 letters with one uppercase, one number and one special letter\n"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597144-0343b5ca-c7ca-47a4-926d-4e8df2f8c161.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you start your application without specifying "},{type:b,tag:e,props:{},children:[{type:a,value:"NC_DB"}]},{type:a,value:". A local SQLite will be created in root folder. Your data will be stored there."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you are using Docker, it is recommended to mount "},{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fusr\u002Fapp\u002Fdata\u002F"}]},{type:a,value:" for persistent volume (since "},{type:b,tag:e,props:{},children:[{type:a,value:"v0.10.6"}]},{type:a,value:"), otherwise your data will be lost after recreating the container."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Example:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-text","line-numbers"]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"docker run -d -p 8080:8080 --name foo -v \u002Flocal\u002Fpath:\u002Fusr\u002Fapp\u002Fdata\u002F nocodb\u002Fnocodb\n"}]}]}]},{type:a,value:c},{type:b,tag:o,props:{id:m},children:[{type:b,tag:p,props:{ariaHidden:q,href:"#initialize-your-first-project",tabIndex:r},children:[{type:b,tag:s,props:{className:[t,u]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Once you have logged into NocoDB, you should see "},{type:b,tag:e,props:{},children:[{type:a,value:"My Projects"}]},{type:a,value:i}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597182-b74cadb4-e165-417e-9e95-9a3cb7dce8e5.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To create a project, you can click "},{type:b,tag:e,props:{},children:[{type:a,value:"New Project"}]},{type:a,value:i}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597208-0b6e8162-5088-4825-bcb2-f2b0574a74c2.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:"Create"}]},{type:a,value:", you need to specify the project name and API type. A local SQLite will be used."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597259-b9552c71-d13b-463c-abc2-0f3be31627b2.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:w},{type:b,tag:e,props:{},children:[{type:a,value:"Create By Connecting To An external Datbase"}]},{type:a,value:", you need to specify the project name, API type, and several database parameters."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597279-c1722d8b-c885-4e9e-9e94-44711102af20.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Currently it supports MySQL, Postgres, MSSQL and SQLite."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597320-fd6b19a9-ed3e-4f4a-80b7-880a79a54a11.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You can also specify SSL & advanced parameters."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F35857179\u002F126597342-0c61ab15-a112-4269-8f30-78455fa09081.png"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:v},{type:b,tag:e,props:{},children:[{type:a,value:"Test Database Connection"}]},{type:a,value:" to see if the connection can be established or not."}]}]},dir:"\u002Fen\u002Fsetup-and-usages",path:"\u002Fen\u002Fsetup-and-usages\u002Fnocodb-dashboard",extension:".md",createdAt:x,updatedAt:x,to:"\u002Fsetup-and-usages\u002Fnocodb-dashboard"},prev:{slug:"demos",title:"Demos",to:"\u002Fgetting-started\u002Fdemos"},next:{slug:"table-and-column-creation",title:"Table & Columns",to:"\u002Fsetup-and-usages\u002Ftable-and-column-creation"}}],fetch:{},mutations:[]}}("text","element","\n","p","code","img","image","NocoDB Dashboard",".","setup-your-first-super-admin",2,"Setup your first super admin","initialize-your-first-project","Initialize your first project","h2","a","true",-1,"span","icon","icon-link","Click ","If you click ","2021-08-25T10:41:00.651Z")));