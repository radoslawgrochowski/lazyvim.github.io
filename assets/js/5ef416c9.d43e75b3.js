"use strict";(self.webpackChunklazyvim=self.webpackChunklazyvim||[]).push([[159],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,d=u["".concat(p,".").concat(f)]||u[f]||m[f]||i;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1864:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:5},o="Recipes",l={unversionedId:"configuration/recipes",id:"configuration/recipes",title:"Recipes",description:"Disable autoformat for some buffers",source:"@site/docs/configuration/recipes.md",sourceDirName:"configuration",slug:"/configuration/recipes",permalink:"/configuration/recipes",draft:!1,editUrl:"https://github.com/LazyVim/lazyvim.github.io/tree/master/docs/configuration/recipes.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/configuration/examples"},next:{title:"Plugins",permalink:"/configuration/plugins"}},p={},s=[{value:"Disable autoformat for some buffers",id:"disable-autoformat-for-some-buffers",level:2},{value:"Add a <code>nvim-cmp</code> source",id:"add-a-nvim-cmp-source",level:2},{value:"Add telescope-fzf-native",id:"add-telescope-fzf-native",level:2},{value:"Supertab",id:"supertab",level:2},{value:"Change surround mappings",id:"change-surround-mappings",level:2},{value:"Make TokyoNight Transparent",id:"make-tokyonight-transparent",level:2},{value:"Fix clangd offset encoding",id:"fix-clangd-offset-encoding",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"recipes"},"Recipes"),(0,r.kt)("h2",{id:"disable-autoformat-for-some-buffers"},"Disable autoformat for some buffers"),(0,r.kt)("p",null,"If you want to disable autoformat for a certain buffer, then\nset ",(0,r.kt)("inlineCode",{parentName:"p"},"vim.b.autoformat = false")," for that buffer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua",metastring:"title=lua/config/autocmds.lua",title:"lua/config/autocmds.lua"},'-- Disable autoformat for lua files\nvim.api.nvim_create_autocmd({ "FileType" }, {\n  pattern = { "lua" },\n  callback = function()\n    vim.b.autoformat = false\n  end,\n})\n')),(0,r.kt)("p",null,"If you change your mind you can do ",(0,r.kt)("inlineCode",{parentName:"p"},"<leader>uf")," to enable autoformat\nanyway for that buffer."),(0,r.kt)("h2",{id:"add-a-nvim-cmp-source"},"Add a ",(0,r.kt)("inlineCode",{parentName:"h2"},"nvim-cmp")," source"),(0,r.kt)("p",null,"override nvim-cmp and add cmp-emoji"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/nvim-cmp",\n  dependencies = { "hrsh7th/cmp-emoji" },\n  ---@param opts cmp.ConfigSchema\n  opts = function(_, opts)\n    local cmp = require("cmp")\n    opts.sources = cmp.config.sources(vim.list_extend(opts.sources, { { name = "emoji" } }))\n  end,\n}\n')),(0,r.kt)("h2",{id:"add-telescope-fzf-native"},"Add telescope-fzf-native"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "telescope.nvim",\n  dependencies = {\n    "nvim-telescope/telescope-fzf-native.nvim",\n    build = "make",\n    config = function()\n      require("telescope").load_extension("fzf")\n    end,\n  },\n}\n')),(0,r.kt)("h2",{id:"supertab"},"Supertab"),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"<tab>")," for completion and snippets (supertab)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Disable default ",(0,r.kt)("inlineCode",{parentName:"li"},"<tab>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<s-tab>")," behavior in LuaSnip")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "L3MON4D3/LuaSnip",\n  keys = function()\n    return {}\n  end,\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Setup supertab in cmp")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "hrsh7th/nvim-cmp",\n  dependencies = {\n    "hrsh7th/cmp-emoji",\n  },\n  ---@param opts cmp.ConfigSchema\n  opts = function(_, opts)\n    local has_words_before = function()\n      unpack = unpack or table.unpack\n      local line, col = unpack(vim.api.nvim_win_get_cursor(0))\n      return col ~= 0 and vim.api.nvim_buf_get_lines(0, line - 1, line, true)[1]:sub(col, col):match("%s") == nil\n    end\n\n    local luasnip = require("luasnip")\n    local cmp = require("cmp")\n\n    opts.mapping = vim.tbl_extend("force", opts.mapping, {\n      ["<Tab>"] = cmp.mapping(function(fallback)\n        if cmp.visible() then\n          cmp.select_next_item()\n        -- You could replace the expand_or_jumpable() calls with expand_or_locally_jumpable()\n        -- they way you will only jump inside the snippet region\n        elseif luasnip.expand_or_jumpable() then\n          luasnip.expand_or_jump()\n        elseif has_words_before() then\n          cmp.complete()\n        else\n          fallback()\n        end\n      end, { "i", "s" }),\n      ["<S-Tab>"] = cmp.mapping(function(fallback)\n        if cmp.visible() then\n          cmp.select_prev_item()\n        elseif luasnip.jumpable(-1) then\n          luasnip.jump(-1)\n        else\n          fallback()\n        end\n      end, { "i", "s" }),\n    })\n  end,\n}\n')),(0,r.kt)("h2",{id:"change-surround-mappings"},"Change surround mappings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "echasnovski/mini.surround",\n  opts = {\n    mappings = {\n      add = "gsa",\n      delete = "gsd",\n      find = "gsf",\n      find_left = "gsF",\n      highlight = "gsh",\n      replace = "gsr",\n      update_n_lines = "gsn",\n    },\n  },\n}\n')),(0,r.kt)("h2",{id:"make-tokyonight-transparent"},"Make TokyoNight Transparent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "folke/tokyonight.nvim",\n  opts = {\n    transparent = true,\n    styles = {\n      sidebars = "transparent",\n      floats = "transparent",\n    },\n  },\n}\n')),(0,r.kt)("h2",{id:"fix-clangd-offset-encoding"},"Fix clangd offset encoding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'{\n  "neovim/nvim-lspconfig",\n  opts = {\n    setup = {\n      clangd = function(_, opts)\n        opts.capabilities.offsetEncoding = { "utf-16" }\n      end,\n    },\n  },\n}\n')))}u.isMDXComponent=!0}}]);