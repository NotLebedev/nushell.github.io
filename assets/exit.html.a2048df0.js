import{_ as r,z as i,A as n,X as e,C as t,D as s,a6 as l}from"./framework.3d018c9f.js";const o={},d={id:"frontmatter-title-for-shells",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#frontmatter-title-for-shells","aria-hidden":"true"},"#",-1),h={class:"command-title"},p=l(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; exit (exit_code) --now</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>exit_code</code>: Exit code to return immediately with</li><li><code>--now</code>: Exit out of all shells immediately (exiting Nu)</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Exit the current shell</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span>
</code></pre></div><p>Exit all shells (exiting Nu)</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">exit</span> <span class="token parameter variable">--now</span>
</code></pre></div>`,9);function u(a,m){return i(),n("div",null,[e("h1",d,[c,t(),e("code",null,s(a.$frontmatter.title),1),t(" for shells")]),e("div",h,s(a.$frontmatter.shells),1),p])}const _=r(o,[["render",u],["__file","exit.html.vue"]]);export{_ as default};