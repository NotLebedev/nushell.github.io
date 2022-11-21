import{_ as n,o as r,c as o,a,t as s,d as t,e as i}from"./app.ef551336.js";const c={},d={id:"frontmatter-title-for-bits",tabindex:"-1"},p=a("a",{class:"header-anchor",href:"#frontmatter-title-for-bits","aria-hidden":"true"},"#",-1),l=t(),h=t(" for bits"),u={class:"command-title"},b=i(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; bits and (target)</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>target</code>: target integer to perform bit and</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Apply bits and to two numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token number">2</span> <span class="token operator">|</span> bits and <span class="token number">2</span>
</code></pre></div><p>Apply logical and to a list of numbers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">4</span> <span class="token number">3</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">|</span> bits and <span class="token number">2</span>
</code></pre></div>`,9);function m(e,_){return r(),o("div",null,[a("h1",d,[p,l,a("code",null,s(e.$frontmatter.title),1),h]),a("div",u,s(e.$frontmatter.bits),1),b])}const g=n(c,[["render",m],["__file","bits_and.html.vue"]]);export{g as default};