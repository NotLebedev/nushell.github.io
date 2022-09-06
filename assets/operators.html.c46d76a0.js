import{_ as r,r as a,o as l,c as i,a as t,b as s,w as c,e as o,d as e}from"./app.57288ba9.js";const p={},h=o(`<h1 id="\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26</h1><p>Nushell \u652F\u6301\u4EE5\u4E0B\u5E38\u89C1\u7684\u6570\u5B66\u3001\u903B\u8F91\u548C\u5B57\u7B26\u4E32\u64CD\u4F5C\u7684\u8FD0\u7B97\u7B26\uFF1A</p><table><thead><tr><th>\u8FD0\u7B97\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>+</code></td><td>\u52A0</td></tr><tr><td><code>-</code></td><td>\u51CF</td></tr><tr><td><code>*</code></td><td>\u4E58</td></tr><tr><td><code>/</code></td><td>\u9664</td></tr><tr><td><code>**</code></td><td>\u6307\u6570 (\u5E42)</td></tr><tr><td><code>mod</code></td><td>\u53D6\u6A21</td></tr><tr><td><code>==</code></td><td>\u7B49\u4E8E</td></tr><tr><td><code>!=</code></td><td>\u4E0D\u7B49\u4E8E</td></tr><tr><td><code>&lt;</code></td><td>\u5C0F\u4E8E</td></tr><tr><td><code>&lt;=</code></td><td>\u5C0F\u4E8E\u7B49\u4E8E</td></tr><tr><td><code>&gt;</code></td><td>\u5927\u4E8E</td></tr><tr><td><code>&gt;=</code></td><td>\u5927\u4E8E\u7B49\u4E8E</td></tr><tr><td><code>=~</code></td><td>\u6B63\u5219\u5339\u914D / \u5B57\u7B26\u4E32\u5305\u542B\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32</td></tr><tr><td><code>!~</code></td><td>\u6B63\u5219\u4E0D\u5339\u914D / \u5B57\u7B26\u4E32<em>\u4E0D</em>\u5305\u542B\u53E6\u4E00\u4E2A</td></tr><tr><td><code>in</code></td><td>\u5217\u8868\u5305\u542B\u503C</td></tr><tr><td><code>not-in</code></td><td>\u5217\u8868\u4E0D\u5305\u542B\u503C</td></tr><tr><td><code>not</code></td><td>\u903B\u8F91\u53D6\u53CD</td></tr><tr><td><code>&amp;&amp;</code>, <code>and</code></td><td>\u4E24\u4E2A\u5E03\u5C14\u503C\u4E0E\u8FD0\u7B97</td></tr><tr><td><code>||</code>, <code>or</code></td><td>\u4E24\u4E2A\u5E03\u5C14\u503C\u6216\u8FD0\u7B97</td></tr><tr><td><code>//</code></td><td>\u6574\u9664\u5E76\u5411\u4E0B\u53D6\u6574</td></tr><tr><td><code>**</code></td><td>\u5E42\u8FD0\u7B97</td></tr><tr><td><code>bit-or</code></td><td>\u6309\u4F4D\u6216</td></tr><tr><td><code>bit-xor</code></td><td>\u6309\u4F4D\u5F02\u6216</td></tr><tr><td><code>bit-and</code></td><td>\u6309\u4F4D\u4E0E</td></tr><tr><td><code>bit-shl</code></td><td>\u6309\u4F4D\u5DE6\u79FB</td></tr><tr><td><code>bit-shr</code></td><td>\u6309\u4F4D\u53F3\u79FB</td></tr><tr><td><code>starts-with</code></td><td>\u5B57\u7B26\u4E32\u5F00\u59CB\u68C0\u6D4B</td></tr><tr><td><code>ends-with</code></td><td>\u5B57\u7B26\u4E32\u7ED3\u5C3E\u68C0\u6D4B</td></tr></tbody></table><p>\u5706\u62EC\u53F7\u53EF\u7528\u4E8E\u5206\u7EC4\u4EE5\u6307\u5B9A\u6C42\u503C\u987A\u5E8F\uFF0C\u6216\u7528\u4E8E\u8C03\u7528\u547D\u4EE4\u5E76\u5728\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u7ED3\u679C\u3002</p><h2 id="\u8FD0\u7B97\u7B26\u7ED3\u5408\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u7B97\u7B26\u7ED3\u5408\u987A\u5E8F" aria-hidden="true">#</a> \u8FD0\u7B97\u7B26\u7ED3\u5408\u987A\u5E8F</h2><p>\u6570\u5B66\u8FD0\u7B97\u7684\u7ED3\u5408\u987A\u5E8F\u5982\u4E0B\uFF08\u4ECE\u6700\u9AD8\u4F18\u5148\u7EA7\u5230\u6700\u4F4E\uFF09\uFF1A</p><ul><li>\u5706\u62EC\u53F7 (<code>()</code>)</li><li>\u4E58 (<code>*</code>) \u3001 \u9664 (<code>/</code>) \u548C\u5E42 (<code>**</code>)</li><li>\u52A0 (<code>+</code>) \u548C\u51CF (<code>-</code>)</li></ul><div class="language-text ext-text"><pre class="language-text"><code>&gt; 3 * (1 + 2)
9
</code></pre></div><h2 id="\u6B63\u5219\u8868\u8FBE\u5F0F-\u5B57\u7B26\u4E32\u5305\u542B\u8FD0\u7B97\u7B26" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F-\u5B57\u7B26\u4E32\u5305\u542B\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F / \u5B57\u7B26\u4E32\u5305\u542B\u8FD0\u7B97\u7B26</h2>`,9),_=t("code",null,"=~",-1),u=e("\u548C"),g=t("code",null,"!~",-1),k=e("\u8FD0\u7B97\u7B26\u63D0\u4F9B\u4E86\u4E00\u79CD\u66F4\u65B9\u4FBF\u7684\u65B9\u6CD5\u6765\u8BC4\u4F30 "),m={href:"https://cheatography.com/davechild/cheat-sheets/regular-expressions/",target:"_blank",rel:"noopener noreferrer"},b=e("\u6B63\u5219\u8868\u8FBE\u5F0F"),f=e("\u3002\u4F60\u4E0D\u9700\u8981\u77E5\u9053\u6B63\u5219\u8868\u8FBE\u5F0F\u5C31\u53EF\u4EE5\u4F7F\u7528\u5B83\u4EEC \u2014\u2014 \u5B83\u4EEC\u4E5F\u662F\u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B\u53E6\u4E00\u4E2A\u7684\u7B80\u5355\u65B9\u6CD5\uFF1A"),x=o(`<ul><li><code>string =~ pattern</code> \u5982\u679C <code>string</code> \u5305\u542B <code>pattern</code> \u7684\u5339\u914D\u8FD4\u56DE <strong>true</strong>, \u53CD\u4E4B\u8FD4\u56DE <strong>false</strong>\uFF1B</li><li><code>string !~ pattern</code> \u5982\u679C <code>string</code> \u5305\u542B <code>pattern</code> \u7684\u5339\u914D\u8FD4\u56DE <strong>false</strong>, \u53CD\u4E4B\u8FD4\u56DE <strong>true</strong>\uFF1B</li></ul><p>\u4F8B\u5982:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>foobarbaz <span class="token operator">=~</span> bar <span class="token comment"># returns true</span>
foobarbaz <span class="token operator">!</span>~ bar <span class="token comment"># returns false</span>
<span class="token function">ls</span> <span class="token operator">|</span> where name <span class="token operator">=~</span> ^nu <span class="token comment"># returns all files whose names start with &quot;nu&quot;</span>
</code></pre></div>`,3),q=e("\u4E24\u4E2A\u8FD0\u7B97\u7B26\u90FD\u4F7F\u7528\u4E86 "),v={href:"https://docs.rs/regex/latest/regex/struct.Regex.html#method.is_match",target:"_blank",rel:"noopener noreferrer"},w=e("Rust regex \u5305\u7684 "),O=t("code",null,"is_match()",-1),F=e(" \u51FD\u6570"),N=e("\u3002"),L=o(`<h2 id="\u5927\u5C0F\u5199\u654F\u611F\u6027" tabindex="-1"><a class="header-anchor" href="#\u5927\u5C0F\u5199\u654F\u611F\u6027" aria-hidden="true">#</a> \u5927\u5C0F\u5199\u654F\u611F\u6027</h2><p>\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u64CD\u4F5C\u65F6\uFF0C\u8FD0\u7B97\u7B26\u901A\u5E38\u662F\u533A\u5206\u5927\u5C0F\u5199\u7684\u3002\u6709\u51E0\u79CD\u65B9\u6CD5\u53EF\u4EE5\u5904\u7406\u5927\u5C0F\u5199\u4E0D\u654F\u611F\u7684\u573A\u666F\uFF1A</p><ol><li>\u5728\u6B63\u5219\u8868\u8FBE\u5F0F\u8FD0\u7B97\u7B26\u4E2D\uFF0C\u6307\u5B9A<code>(?i)</code>\u4E0D\u533A\u5206\u5927\u5C0F\u5199\u7684\u6A21\u5F0F\u4FEE\u9970\u5668\uFF1A</li></ol><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;FOO&quot;</span> <span class="token operator">=~</span> <span class="token string">&quot;foo&quot;</span> <span class="token comment"># returns false</span>
<span class="token string">&quot;FOO&quot;</span> <span class="token operator">=~</span> <span class="token string">&quot;(?i)foo&quot;</span> <span class="token comment"># returns true</span>
</code></pre></div>`,4),R={start:"2"},V=e("\u4F7F\u7528"),y=t("code",null,"str contains",-1),B=e(" \u547D\u4EE4\u7684"),E=t("code",null,"--insensitive",-1),z=e("\u6807\u5FD7\uFF1A"),C=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token string">&quot;FOO&quot;</span> <span class="token operator">|</span> str contains <span class="token parameter variable">--insensitive</span> <span class="token string">&quot;foo&quot;</span>
</code></pre></div>`,1),I={start:"3"},S=e("\u5728\u6BD4\u8F83\u524D\u7528"),T=t("code",null,"str downcase",-1),j=e("\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5C0F\u5199\uFF1A"),A=o(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token punctuation">(</span><span class="token string">&quot;FOO&quot;</span> <span class="token operator">|</span> str downcase<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token string">&quot;Foo&quot;</span> <span class="token operator">|</span> str downcase<span class="token punctuation">)</span>
</code></pre></div>`,1);function D(G,H){const d=a("ExternalLinkIcon"),n=a("RouterLink");return l(),i("div",null,[h,t("p",null,[_,u,g,k,t("a",m,[b,s(d)]),f]),x,t("p",null,[q,t("a",v,[w,O,F,s(d)]),N]),L,t("ol",R,[t("li",null,[V,s(n,{to:"/book/commands/str_contains.html"},{default:c(()=>[y]),_:1}),B,E,z])]),C,t("ol",I,[t("li",null,[S,s(n,{to:"/book/commands/str_downcase.html"},{default:c(()=>[T]),_:1}),j])]),A])}const K=r(p,[["render",D],["__file","operators.html.vue"]]);export{K as default};