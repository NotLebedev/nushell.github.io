import{_ as e,o as a,c as o,e as t}from"./app.22fee913.js";const d={},c=t(`<h1 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> Math</h1><p>\u4F55\u304B\u306E\u4F5C\u696D\u3092\u3057\u3066\u3044\u308B\u3068\u304D\u3001\u3044\u304F\u3064\u304B\u306E\u6570\u5B57\u3092\u8DB3\u3057\u7B97\u3057\u305F\u304F\u306A\u308B\u3068\u304D\u304C\u3042\u308A\u307E\u3059\u3002Nu \u306B\u306F\u57FA\u672C\u7684\u306A\u6570\u5B66\u6F14\u7B97\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002</p><p>&quot;math mode&quot;\u306B\u3059\u308B\u306B\u306F\u3001\u30B3\u30DE\u30F3\u30C9\u306E\u5148\u982D\u306B<code>=</code>\u3092\u3064\u3051\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u6F14\u7B97\u5B50\u3092\u4F7F\u7528\u3059\u308B\u30B3\u30DE\u30F3\u30C9\u3092\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002<code>where</code>\u30B3\u30DE\u30F3\u30C9\u306E\u3088\u3046\u306B\u81EA\u52D5\u3067\u304A\u3053\u306A\u3063\u3066\u304F\u308C\u308B\u30B3\u30DE\u30F3\u30C9\u3082\u3042\u308A\u307E\u3059\u3002</p><h2 id="\u56DB\u5247\u6F14\u7B97" tabindex="-1"><a class="header-anchor" href="#\u56DB\u5247\u6F14\u7B97" aria-hidden="true">#</a> \u56DB\u5247\u6F14\u7B97</h2><div class="language-text ext-text"><pre class="language-text"><code>&gt; = 1 + 3
4
</code></pre></div><p>Nu \u3067\u306F\u8DB3\u3057\u7B97\u3001\u5F15\u304D\u7B97\u3001\u639B\u3051\u7B97\u3001\u5272\u308A\u7B97\u3092\u305D\u308C\u305E\u308C<code>+</code>,<code>-</code>,<code>*</code>\u305D\u3057\u3066<code>/</code>\u6F14\u7B97\u5B50\u3067\u304A\u3053\u306A\u3046\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u6F14\u7B97\u5B50\u306E\u512A\u5148\u9806\u4F4D\u304C\u8003\u616E\u3055\u308C\u308B\u306E\u3067<code>1 + 2 * 3</code>\u306F<code>1 + (2 * 3)</code>\u3068\u3057\u3066\u6271\u308F\u308C\u307E\u3059\u3002</p><h2 id="\u62EC\u5F27" tabindex="-1"><a class="header-anchor" href="#\u62EC\u5F27" aria-hidden="true">#</a> \u62EC\u5F27</h2><p>math mode \u3067\u306F\u62EC\u5F27\u3092\u5229\u7528\u3057\u3066\u6570\u5F0F\u3092\u30B0\u30EB\u30FC\u30D7\u5316\u3067\u304D\u307E\u3059\u3002\u3053\u308C\u306B\u3088\u308A\u8DB3\u3057\u7B97\u3092\u512A\u5148\u3057\u305F\u3044\u3068\u304D\u306F<code>(1 + 2) * 3</code>\u3068\u66F8\u304F\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><h2 id="in\u3068not-in" tabindex="-1"><a class="header-anchor" href="#in\u3068not-in" aria-hidden="true">#</a> <code>in</code>\u3068<code>not-in</code></h2><p><code>in</code>\u3068<code>not-in</code>\u6F14\u7B97\u5B50\u3092\u4F7F\u3063\u3066\u3001\u5024\u304C\u96C6\u5408\u306B\u542B\u307E\u308C\u308B\u304B\u3069\u3046\u304B\u3092\u8ABF\u3079\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; = 1 in [1 2 3]
true
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; = 1 not-in [1 2 3]
false
</code></pre></div><h2 id="\u3068" tabindex="-1"><a class="header-anchor" href="#\u3068" aria-hidden="true">#</a> <code>=~</code>\u3068<code>!~</code></h2><p><code>=~</code>\u3068<code>!~</code>\u6F14\u7B97\u5B50\u3092\u4F7F\u3063\u3066\u6587\u5B57\u5217\u304C\u4ED6\u306E\u6587\u5B57\u5217\u306E\u4E2D\u306B\u3042\u308B\u304B\u3069\u3046\u304B\u3092\u8ABF\u3079\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; = &quot;foobar&quot; =~ &quot;foo&quot;
true
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&gt; = &quot;foobar&quot; !~ &quot;baz&quot;
true
</code></pre></div><h2 id="\u6BD4\u8F03\u6F14\u7B97\u5B50" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F03\u6F14\u7B97\u5B50" aria-hidden="true">#</a> \u6BD4\u8F03\u6F14\u7B97\u5B50</h2><p>\u4EE5\u4E0B\u306E\u6BD4\u8F03\u6F14\u7B97\u5B50\u304C\u5229\u7528\u53EF\u80FD\u3067\u3059\u3002</p><ul><li><code>&lt;</code> - less than</li><li><code>&lt;=</code> - less than or equal to</li><li><code>&gt;</code> - greater than</li><li><code>&gt;=</code> - greater than or equal to</li><li><code>==</code> - equal to</li><li><code>!=</code> - not equal to</li></ul><h2 id="\u8907\u5408\u6F14\u7B97\u5B50" tabindex="-1"><a class="header-anchor" href="#\u8907\u5408\u6F14\u7B97\u5B50" aria-hidden="true">#</a> \u8907\u5408\u6F14\u7B97\u5B50</h2><p><code>&amp;&amp;</code>\u3068<code>||</code>\u3092\u4F7F\u3063\u3066\u30D6\u30FC\u30EA\u30A2\u30F3\u3092\u8FD4\u3059\uFF12\u3064\u306E\u64CD\u4F5C\u3092\u7D50\u5408\u3067\u304D\u307E\u3059\u3002\u4F8B\u3048\u3070: <code>ls | where name in [&quot;one&quot; &quot;two&quot; &quot;three&quot;] &amp;&amp; size &gt; 10kb</code></p>`,21),n=[c];function r(i,h){return a(),o("div",null,n)}var s=e(d,[["render",r],["__file","math.html.vue"]]);export{s as default};
