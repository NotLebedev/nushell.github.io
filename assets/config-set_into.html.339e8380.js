import{_ as a,o as e,c as s,e as n}from"./app.22fee913.js";const t={},o=n(`<p>Sets a value in the config</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> config set_into <span class="token operator">&lt;</span>set_into<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;set_into&gt;</code> sets a variable from values in the pipeline</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Store the contents of the pipeline as a path</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token string">&#39;/usr/bin&#39;</span> <span class="token string">&#39;/bin&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> config set_into path
</code></pre></div>`,10),i=[o];function l(p,r){return e(),s("div",null,i)}var h=a(t,[["render",l],["__file","config-set_into.html.vue"]]);export{h as default};
