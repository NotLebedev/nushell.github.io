import{_ as a,o as s,c as e,e as n}from"./app.22fee913.js";const t={},l=n(`<p>collects a list of strings into a string</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> str collect <span class="token punctuation">(</span>separator<span class="token punctuation">)</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>(separator)</code> the separator to put between the different values</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Collect a list of string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span> <span class="token string">&#39;b&#39;</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">]</span> <span class="token operator">|</span> str collect
</code></pre></div>`,10),c=[l];function r(o,p){return s(),e("div",null,c)}var h=a(t,[["render",r],["__file","str-collect.html.vue"]]);export{h as default};
