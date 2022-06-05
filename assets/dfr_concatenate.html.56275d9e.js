import{_ as n,u as s,o as r,c as o,a,t,d as c,e as p}from"./app.22fee913.js";const d={computed:{frontmatter(){return s().value}}},i={id:"frontmatter-title",tabindex:"-1"},l=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},f=p(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; dfr concatenate (other)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>other</code>: Other array with string to be concatenated</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Concatenate string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">let</span> other <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>za xs cd<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">[</span>abc abc abc<span class="token punctuation">]</span> <span class="token operator">|</span> dfr to-df <span class="token operator">|</span> dfr concatenate <span class="token variable">$other</span>
</code></pre></div>`,7);function _(m,k,g,x,b,e){return r(),o("div",null,[a("h1",i,[l,h,a("code",null,t(e.frontmatter.title),1)]),a("div",u,t(e.frontmatter.usage),1),f])}var w=n(d,[["render",_],["__file","dfr_concatenate.html.vue"]]);export{w as default};
