import{_ as s,o as a,c as n,e}from"./app.22fee913.js";const t={},r=e(`<h1 id="str-index-of" tabindex="-1"><a class="header-anchor" href="#str-index-of" aria-hidden="true">#</a> str index-of</h1><p>Returns starting index of given pattern in string counting from 0. Returns -1 when there are no results.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> str index-of <span class="token operator">&lt;</span>pattern<span class="token operator">&gt;</span> <span class="token punctuation">..</span>.args <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>&lt;pattern&gt;</code> the pattern to find index of</li><li>...args: optionally returns index of pattern in string by column paths</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li><li>-r, --range <code>&lt;any&gt;</code>: optional start and/or end index</li><li>-e, --end: search from the end of the string</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Returns index of pattern in string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;my_library.rb&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;.rb&#39;</span>
</code></pre></div><p>Returns index of pattern in string with start index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;.rb.rb&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;.rb&#39;</span> -r <span class="token string">&#39;1,&#39;</span>
</code></pre></div><p>Returns index of pattern in string with end index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;6&#39;</span> -r <span class="token string">&#39;,4&#39;</span>
</code></pre></div><p>Returns index of pattern in string with start and end index</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;3&#39;</span> -r <span class="token string">&#39;1,4&#39;</span>
</code></pre></div><p>Alternatively you can use this form</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;123456&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;3&#39;</span> -r <span class="token punctuation">[</span><span class="token number">1</span> <span class="token number">4</span><span class="token punctuation">]</span>
</code></pre></div><p>Returns index of pattern in string</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">echo</span> <span class="token string">&#39;/this/is/some/path/file.txt&#39;</span> <span class="token operator">|</span> str index-of <span class="token string">&#39;/&#39;</span> -e
</code></pre></div>`,21),p=[r];function o(i,l){return a(),n("div",null,p)}var d=s(t,[["render",o],["__file","str-index-of.html.vue"]]);export{d as default};
