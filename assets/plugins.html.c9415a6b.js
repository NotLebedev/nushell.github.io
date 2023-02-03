import{_ as a,z as r,A as i,X as e,C as o,T as n,Q as l}from"./framework.3d018c9f.js";const t={},u=e("h1",{id:"plugins",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),o(" Plugins")],-1),c=e("p",null,"A funcionalidade do Nu pode ser extendida usando plugins. Os plugins podem desenpenhar muitas das mesmas operações que os comandos embutidos do Nu, com o benefício adicional de que eles podem ser incluídos separadamente do Nu em si.",-1),d=e("p",null,[o("Para adicionar um plugin, simplesmente implemente-o e coloque o binário no seu PATH. Os nomes dos arquivos de plugins do Nu começam com "),e("code",null,"nu_plugin_"),o(" para que o Nu possa encontrá-los em meio aos outros binários no seu PATH.")],-1),p=e("p",null,[e("strong",null,"Nota:"),o(" no futuro, plugins podem ter um local específico em precisem ser colocados a fim de que o Nu possa encontrá-los.")],-1),m=e("p",null,"Quando o Nu inicia, ele faz uma busca no sistema e carrega os plugins que encontra.",-1),_={href:"https://github.com/nushell/nushell/tree/master/src/plugins",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/nushell/contributor-book/blob/master/en/plugins.md",target:"_blank",rel:"noopener noreferrer"};function h(f,b){const s=l("ExternalLinkIcon");return r(),i("div",null,[u,c,d,p,m,e("p",null,[o("O protocolo que os plugins do Nu usam estão sujeitos a mudar enquanto o Nu estiver em pleno desenvolvimento. O melhor lugar para aprender mais sobre o protocolo e como criar seus próprios plugins é lendo o código fonte para os "),e("a",_,[o("plugins no repositório do Nu"),n(s)]),o(". Você pode também se dirigir ao "),e("a",g,[o("capítulo de plugins no livro do colaborador"),n(s)]),o(".")])])}const q=a(t,[["render",h],["__file","plugins.html.vue"]]);export{q as default};