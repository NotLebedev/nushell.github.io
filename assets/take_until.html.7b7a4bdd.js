import{_ as s,u as n,o as r,c as o,a as e,t,d as c,e as i}from"./app.22fee913.js";const l={computed:{frontmatter(){return n().value}}},p={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=c(),u={style:{"white-space":"pre-wrap"}},m=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; take until (predicate)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>predicate</code>: the predicate that element(s) must not match</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Take until the element is positive</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>-1 -2 <span class="token number">9</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">|</span> take <span class="token keyword">until</span> <span class="token variable">$it</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
</code></pre></div>`,7);function _(k,f,g,x,b,a){return r(),o("div",null,[e("h1",p,[d,h,e("code",null,t(a.frontmatter.title),1)]),e("div",u,t(a.frontmatter.usage),1),m])}var w=s(l,[["render",_],["__file","take_until.html.vue"]]);export{w as default};
