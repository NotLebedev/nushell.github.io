import{_ as a,o as t,c as e,e as s}from"./app.22fee913.js";const i={},n=s(`<p>Explore and manipulate paths.</p><p>There are three ways to represent a path:</p><ul><li>As a path literal, e.g., &#39;/home/viking/spam.txt&#39;</li><li>As a structured path: a table with &#39;parent&#39;, &#39;stem&#39;, and &#39;extension&#39; (and</li><li>&#39;prefix&#39; on Windows) columns. This format is produced by the &#39;path parse&#39; subcommand.</li><li>As an inner list of path parts, e.g., &#39;[[/ home viking spam.txt]]&#39;. Splitting into parts is done by the <code>path split</code> command.</li></ul><p>All subcommands accept all three variants as an input. Furthermore, the &#39;path join&#39; subcommand can be used to join the structured path or path parts back into the path literal.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> path <span class="token operator">&lt;</span>subcommand<span class="token operator">&gt;</span> <span class="token punctuation">{</span>flags<span class="token punctuation">}</span>
</code></pre></div><h2 id="subcommands" tabindex="-1"><a class="header-anchor" href="#subcommands" aria-hidden="true">#</a> Subcommands</h2><ul><li>path basename - Get the final component of a path</li><li>path dirname - Get the parent directory of a path</li><li>path exists - Check whether a path exists</li><li>path expand - Expand a path to its absolute form</li><li>path join - Join a structured path or a list of path parts.</li><li>path parse - Convert a path into structured data.</li><li>path relative-to - Get a path as relative to another path.</li><li>path split - Split a path into parts by a separator.</li><li>path type - Get the type of the object a path refers to (e.g., file, dir, symlink)</li></ul><h2 id="flags" tabindex="-1"><a class="header-anchor" href="#flags" aria-hidden="true">#</a> Flags</h2><ul><li>-h, --help: Display this help message</li></ul>`,10),p=[n];function l(r,h){return t(),e("div",null,p)}var c=a(i,[["render",l],["__file","path.html.vue"]]);export{c as default};
