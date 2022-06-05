import{_ as t,u as n,o as r,c as o,a as e,t as s,d as c,e as i}from"./app.22fee913.js";const p={computed:{frontmatter(){return n().value}}},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},g=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; size </code></p><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Count the number of words in a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;There are seven words in this sentence&quot;</span> <span class="token operator">|</span> size
</code></pre></div><p>Counts unicode characters</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&#39;\u4ECA\u5929\u5929\u6C14\u771F\u597D&#39;</span> <span class="token operator">|</span> size
</code></pre></div><p>Counts Unicode characters correctly in a string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token string">&quot;Ame\u0301lie Amelie&quot;</span> <span class="token operator">|</span> size
</code></pre></div>`,9);function _(m,f,x,v,k,a){return r(),o("div",null,[e("h1",d,[l,h,e("code",null,s(a.frontmatter.title),1)]),e("div",u,s(a.frontmatter.usage),1),g])}var z=t(p,[["render",_],["__file","size.html.vue"]]);export{z as default};
