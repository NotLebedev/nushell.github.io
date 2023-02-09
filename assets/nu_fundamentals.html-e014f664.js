import{_ as n,M as l,p as i,q as r,Q as e,t,N as o,U as s}from"./framework-344bb0e4.js";const h={},d=e("h1",{id:"nu-fundamentals",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nu-fundamentals","aria-hidden":"true"},"#"),t(" Nu Fundamentals")],-1),u=e("p",null,"This chapter explains some of the fundamentals of the Nushell programming language. After going through it, you should have an idea how to write simple Nushell programs.",-1),c=e("em",null,"structured data",-1),m=e("em",null,"structured data",-1),p=e("code",null,"help",-1);function f(_,g){const a=l("RouterLink");return i(),r("div",null,[d,u,e("p",null,[t("Nushell has a rich type system. You will find typical data types such as strings or integers and less typical data types, such as cell paths. Furthermore, one of the defining features of Nushell is the notion of "),c,t(" which means that you can organize types into collections: lists, records, or tables. Contrary to the traditional Unix approach where commands communicate via plain text, Nushell commands communicate via these data types. All of the above is explained in "),o(a,{to:"/book/types_of_data.html"},{default:s(()=>[t("Types of Data")]),_:1}),t(".")]),e("p",null,[o(a,{to:"/book/loading_data.html"},{default:s(()=>[t("Loading Data")]),_:1}),t(" explains how to read common data formats, such as JSON, into "),m,t('. This includes our own "NUON" data format.')]),e("p",null,[t("Just like Unix shells, Nushell commands can be composed into "),o(a,{to:"/book/pipelines.html"},{default:s(()=>[t("pipelines")]),_:1}),t(" to pass and modify a stream of data.")]),e("p",null,[t("Some data types have interesting features that deserve their own sections: "),o(a,{to:"/book/working_with_strings.html"},{default:s(()=>[t("strings")]),_:1}),t(", "),o(a,{to:"/book/working_with_lists.html"},{default:s(()=>[t("lists")]),_:1}),t(", and "),o(a,{to:"/book/working_with_tables.html"},{default:s(()=>[t("tables")]),_:1}),t(". Apart from explaining the features, these sections also show how to do some common operations, such as composing strings or updating values in a list.")]),e("p",null,[t("Finally, "),o(a,{to:"/book/command_reference.html"},{default:s(()=>[t("Command Reference")]),_:1}),t(" lists all the built-in commands with brief descriptions. Note that you can also access this info from within Nushell using the "),p,t(" command.")])])}const y=n(h,[["render",f],["__file","nu_fundamentals.html.vue"]]);export{y as default};