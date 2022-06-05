import{_ as n,u as t,o as r,c as o,a,t as s,d as c,e as p}from"./app.22fee913.js";const l={computed:{frontmatter(){return t().value}}},i={id:"frontmatter-title",tabindex:"-1"},d=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),u=c(),m={style:{"white-space":"pre-wrap"}},h=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr rename-col (columns) (new names)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>columns</code>: Column(s) to be renamed. A string or list of strings</li><li><code>new names</code>: New names for the selected column(s). A string or list of strings</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Renames a dataframe column</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>a b<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token number">3</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr rename-col a a_new
</code></pre></div>`,7);function f(_,k,g,b,x,e){return r(),o("div",null,[a("h1",i,[d,u,a("code",null,s(e.frontmatter.title),1)]),a("div",m,s(e.frontmatter.usage),1),h])}var w=n(l,[["render",f],["__file","dfr_rename-col.html.vue"]]);export{w as default};
