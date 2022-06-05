import{_ as t,u as n,o as r,c as o,a as e,t as s,d as c,e as d}from"./app.22fee913.js";const p={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},_=d(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; db where (where)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>where</code>: Where expression on the table</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>selects a column from a database with a where clause</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> db <span class="token function">open</span> db.mysql
    <span class="token operator">|</span> db <span class="token keyword">select</span> a
    <span class="token operator">|</span> db from table_1
    <span class="token operator">|</span> db where <span class="token punctuation">((</span>db col a<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token operator">|</span> db describe
</code></pre></div>`,7);function m(b,f,k,g,x,a){return r(),o("div",null,[e("h1",l,[i,h,e("code",null,s(a.frontmatter.title),1)]),e("div",u,s(a.frontmatter.usage),1),_])}var v=t(p,[["render",m],["__file","db_where.html.vue"]]);export{v as default};
