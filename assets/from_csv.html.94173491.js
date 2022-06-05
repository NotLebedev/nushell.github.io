import{_ as t,u as n,o,c as r,a,t as s,d as p,e as c}from"./app.22fee913.js";const d={computed:{frontmatter(){return n().value}}},l={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),h=p(),g={style:{"white-space":"pre-wrap"}},u=c(`<h2 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h2><p><code>&gt; from csv --separator --noheaders --no-infer --trim</code></p><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h2><ul><li><code>--separator {string}</code>: a character to separate columns, defaults to &#39;,&#39;</li><li><code>--noheaders</code>: don&#39;t treat the first row as column names</li><li><code>--no-infer</code>: no field type inferencing</li><li><code>--trim {string}</code>: drop leading and trailing whitespaces around headers names and/or field values</li></ul><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><p>Convert comma-separated data to a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv
</code></pre></div><p>Convert comma-separated data to a table, ignoring headers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv --noheaders
</code></pre></div><p>Convert comma-separated data to a table, ignoring headers</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv -n
</code></pre></div><p>Convert semicolon-separated data to a table</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv --separator <span class="token string">&#39;;&#39;</span>
</code></pre></div><p>Convert semicolon-separated data to a table, dropping all possible whitespaces around header names and field values</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv --trim all
</code></pre></div><p>Convert semicolon-separated data to a table, dropping all possible whitespaces around header names</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv --trim headers
</code></pre></div><p>Convert semicolon-separated data to a table, dropping all possible whitespaces around field values</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">open</span> data.txt <span class="token operator">|</span> from csv --trim fields
</code></pre></div>`,19);function m(f,v,b,x,k,e){return o(),r("div",null,[a("h1",l,[i,h,a("code",null,s(e.frontmatter.title),1)]),a("div",g,s(e.frontmatter.usage),1),u])}var w=t(d,[["render",m],["__file","from_csv.html.vue"]]);export{w as default};
