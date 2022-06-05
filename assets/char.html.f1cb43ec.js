import{_ as a,o as e,c as s,e as n}from"./app.22fee913.js";const t={},c=n(`<p>Output special characters (e.g., &#39;newline&#39;).</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> char <span class="token punctuation">(</span>character<span class="token punctuation">)</span> <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>(character)</code> the name of the character to output</li><li>...args: multiple Unicode bytes</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-l, --list: List all supported character names</li><li>-u, --unicode: Unicode string i.e. 1f378</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Output newline</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> char newline
</code></pre></div><p>Output prompt character, newline and a hamburger character</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token punctuation">(</span>char prompt<span class="token punctuation">)</span> <span class="token punctuation">(</span>char newline<span class="token punctuation">)</span> <span class="token punctuation">(</span>char hamburger<span class="token punctuation">)</span>
</code></pre></div><p>Output Unicode character</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> char -u 1f378
</code></pre></div><p>Output multi-byte Unicode character</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> char -u 1F468 200D 1F466 200D 1F466
</code></pre></div>`,16),p=[c];function r(l,o){return e(),s("div",null,p)}var h=a(t,[["render",r],["__file","char.html.vue"]]);export{h as default};
