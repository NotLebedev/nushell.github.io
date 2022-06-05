import{_ as s,u as n,o as r,c as o,a as e,t,d as i,e as d}from"./app.22fee913.js";const c={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=i(),u={style:{"white-space":"pre-wrap"}},m=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; export extern (def_name) (params)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>def_name</code>: definition name</li><li><code>params</code>: parameters</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><div class="language-text ext-text"><pre class="language-text"><code>This command is a parser keyword. For details, check
https://www.nushell.sh/book/thinking_in_nushell.html#parsing-and-evaluation-are-different-stages
</code></pre></div><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Export the signature for an external command</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">export</span> extern <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>text: string<span class="token punctuation">]</span>
</code></pre></div>`,9);function x(_,f,g,k,b,a){return r(),o("div",null,[e("h1",l,[h,p,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),m])}var w=s(c,[["render",x],["__file","export_extern.html.vue"]]);export{w as default};
