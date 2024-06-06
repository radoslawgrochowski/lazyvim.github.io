"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[190],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||l;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7462),a=t(7294),l=t(6010),o=t(2466),i=t(6550),u=t(1980),c=t(7392),s=t(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}function f(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function v(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=f(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[u,c]=m({queryString:t,groupId:r}),[p,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,s.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),g=(()=>{const e=u??p;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),v(e)}),[c,v,l]),tabValues:l}}var g=t(2389);const b="tabList__CuJ",y="tabItem_LNqP";function h(e){let{className:n,block:t,selectedValue:i,selectValue:u,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),f=e=>{const n=e.currentTarget,t=s.indexOf(n),r=c[t].value;r!==i&&(p(n),u(r))},d=e=>{let n=null;switch(e.key){case"Enter":f(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},c.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,key:n,ref:e=>s.push(e),onKeyDown:d,onClick:f},o,{className:(0,l.Z)("tabs__item",y,o?.className,{"tabs__item--active":i===n})}),t??n)})))}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r}))))}function x(e){const n=v(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",b)},a.createElement(h,(0,r.Z)({},e,n)),a.createElement(k,(0,r.Z)({},e,n)))}function w(e){const n=(0,g.Z)();return a.createElement(x,(0,r.Z)({key:String(n)},e))}},9380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),l=t(4866),o=t(5162);const i={},u="Refactoring",c={unversionedId:"extras/editor/refactoring",id:"extras/editor/refactoring",title:"Refactoring",description:"You can enable the extra with the :LazyExtras command.",source:"@site/docs/extras/editor/refactoring.md",sourceDirName:"extras/editor",slug:"/extras/editor/refactoring",permalink:"/extras/editor/refactoring",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/main/docs/extras/editor/refactoring.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Outline",permalink:"/extras/editor/outline"},next:{title:"Trouble-v3",permalink:"/extras/editor/trouble-v3"}},s={},p=[{value:"refactoring.nvim",id:"refactoringnvim",level:2},{value:"plenary.nvim",id:"plenarynvim",level:2},{value:"nvim-treesitter",id:"nvim-treesitter",level:2}],f={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"refactoring"},(0,a.kt)("inlineCode",{parentName:"h1"},"Refactoring")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You can enable the extra with the ",(0,a.kt)("inlineCode",{parentName:"p"},":LazyExtras")," command.\nPlugins marked as optional will only be configured if they are installed.")),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Alternatively, you can add it to your ",(0,a.kt)("code",null,"lazy.nvim")," imports"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="lua/config/lazy.lua" {4}',title:'"lua/config/lazy.lua"',"{4}":!0},'require("lazy").setup({\n  spec = {\n    { "LazyVim/LazyVim", import = "lazyvim.plugins" },\n    { import = "lazyvim.plugins.extras.editor.refactoring" },\n    { import = "plugins" },\n  },\n})\n'))),(0,a.kt)("p",null,"Below you can find a list of included plugins and their default settings."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"You don't need to copy the default settings to your config.\nThey are only shown here for reference.")),(0,a.kt)("h2",{id:"refactoringnvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/ThePrimeagen/refactoring.nvim"},"refactoring.nvim")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = {\n  prompt_func_return_type = {\n    go = false,\n    java = false,\n    cpp = false,\n    c = false,\n    h = false,\n    hpp = false,\n    cxx = false,\n  },\n  prompt_func_param_type = {\n    go = false,\n    java = false,\n    cpp = false,\n    c = false,\n    h = false,\n    hpp = false,\n    cxx = false,\n  },\n  printf_statements = {},\n  print_var_statements = {},\n  show_success_message = true, -- shows a message with information about the refactor on success\n  -- i.e. [Refactor] Inlined 3 variable occurrences\n}\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "ThePrimeagen/refactoring.nvim",\n  event = { "BufReadPre", "BufNewFile" },\n  dependencies = {\n    "nvim-lua/plenary.nvim",\n    "nvim-treesitter/nvim-treesitter",\n  },\n  keys = {\n    { "<leader>r", "", desc = "+refactor" },\n    {\n      "<leader>rs",\n      function()\n        require("telescope").extensions.refactoring.refactors()\n      end,\n      mode = "v",\n      desc = "Refactor",\n    },\n    {\n      "<leader>ri",\n      function()\n        require("refactoring").refactor("Inline Variable")\n      end,\n      mode = { "n", "v" },\n      desc = "Inline Variable",\n    },\n    {\n      "<leader>rb",\n      function()\n        require("refactoring").refactor("Extract Block")\n      end,\n      desc = "Extract Block",\n    },\n    {\n      "<leader>rf",\n      function()\n        require("refactoring").refactor("Extract Block To File")\n      end,\n      desc = "Extract Block To File",\n    },\n    {\n      "<leader>rP",\n      function()\n        require("refactoring").debug.printf({ below = false })\n      end,\n      desc = "Debug Print",\n    },\n    {\n      "<leader>rp",\n      function()\n        require("refactoring").debug.print_var({ normal = true })\n      end,\n      desc = "Debug Print Variable",\n    },\n    {\n      "<leader>rc",\n      function()\n        require("refactoring").debug.cleanup({})\n      end,\n      desc = "Debug Cleanup",\n    },\n    {\n      "<leader>rf",\n      function()\n        require("refactoring").refactor("Extract Function")\n      end,\n      mode = "v",\n      desc = "Extract Function",\n    },\n    {\n      "<leader>rF",\n      function()\n        require("refactoring").refactor("Extract Function To File")\n      end,\n      mode = "v",\n      desc = "Extract Function To File",\n    },\n    {\n      "<leader>rx",\n      function()\n        require("refactoring").refactor("Extract Variable")\n      end,\n      mode = "v",\n      desc = "Extract Variable",\n    },\n    {\n      "<leader>rp",\n      function()\n        require("refactoring").debug.print_var()\n      end,\n      mode = "v",\n      desc = "Debug Print Variable",\n    },\n  },\n  opts = {\n    prompt_func_return_type = {\n      go = false,\n      java = false,\n      cpp = false,\n      c = false,\n      h = false,\n      hpp = false,\n      cxx = false,\n    },\n    prompt_func_param_type = {\n      go = false,\n      java = false,\n      cpp = false,\n      c = false,\n      h = false,\n      hpp = false,\n      cxx = false,\n    },\n    printf_statements = {},\n    print_var_statements = {},\n    show_success_message = true, -- shows a message with information about the refactor on success\n    -- i.e. [Refactor] Inlined 3 variable occurrences\n  },\n  config = function(_, opts)\n    require("refactoring").setup(opts)\n    if LazyVim.has("telescope.nvim") then\n      LazyVim.on_load("telescope.nvim", function()\n        require("telescope").load_extension("refactoring")\n      end)\n    end\n  end,\n}\n')))),(0,a.kt)("h2",{id:"plenarynvim"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-lua/plenary.nvim"},"plenary.nvim")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "nvim-lua/plenary.nvim",\n  "nvim-treesitter/nvim-treesitter",\n}\n')))),(0,a.kt)("h2",{id:"nvim-treesitter"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/nvim-treesitter/nvim-treesitter"},"nvim-treesitter")),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"opts",label:"Options",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"opts = nil\n"))),(0,a.kt)(o.Z,{value:"code",label:"Full Spec",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'"nvim-treesitter/nvim-treesitter"\n')))))}d.isMDXComponent=!0}}]);