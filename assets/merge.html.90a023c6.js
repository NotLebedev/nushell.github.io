import{_ as a,o as e,c as s,e as n}from"./app.22fee913.js";const t={},o=n(`<p>Merge a table.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> merge <span class="token operator">&lt;</span>block<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;block&gt;</code> the block to run and merge into the table</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Merge a 1-based index column with some ls output</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">ls</span> <span class="token operator">|</span> <span class="token keyword">select</span> name <span class="token operator">|</span> keep <span class="token number">3</span> <span class="token operator">|</span> merge <span class="token punctuation">{</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">|</span> wrap index <span class="token punctuation">}</span>
</code></pre></div>`,10),p=[o];function l(r,c){return e(),s("div",null,p)}var h=a(t,[["render",l],["__file","merge.html.vue"]]);export{h as default};
