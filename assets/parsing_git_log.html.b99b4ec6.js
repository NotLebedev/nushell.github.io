import{_ as a,o as n,c as s,e}from"./app.22fee913.js";const o={},t=e(`<h1 id="parsing-git-log" tabindex="-1"><a class="header-anchor" href="#parsing-git-log" aria-hidden="true">#</a> Parsing Git Log</h1><h1 id="let-s-parse-git-log" tabindex="-1"><a class="header-anchor" href="#let-s-parse-git-log" aria-hidden="true">#</a> Let&#39;s parse git log</h1><p>This <code>git log</code> command is interesting but you can&#39;t do a lot with it like this.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log
</code></pre></div><p>Let&#39;s make it more parsable</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span><span class="token string">&quot;%h|%s|%aN|%aE|%aD&quot;</span> -n <span class="token number">25</span>
</code></pre></div><p>This will work but I&#39;ve been burnt by this in the past when a pipe <code>|</code> gets injected in the commits.</p><p>So, let&#39;s try again with something that most likely won&#39;t show up in commits, <code>\xBB\xA6\xAB</code>. Also, since we&#39;re not using a pipe now we don&#39;t have to use quotes around the pretty format string. Notice that the output is just a bunch of strings.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">5</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>42f1874a\xBB\xA6\xABUpdate some examples and docs (#4682)\xBB\xA6\xABJustin Ma\xBB\xA6\xABhustcer@outlook.com\xBB\xA6\xABTue, 1 Mar 2022 21:05:29 +0800
2a89936b\xBB\xA6\xABMove to latest stable crossterm, with fix (#4684)\xBB\xA6\xABJT\xBB\xA6\xAB547158+jntrnr@users.noreply.github.com\xBB\xA6\xABTue, 1 Mar 2022 07:05:46 -0500
ece5e7db\xBB\xA6\xABdataframe list command (#4681)\xBB\xA6\xABFernando Herrera\xBB\xA6\xABfernando.j.herrera@gmail.com\xBB\xA6\xABTue, 1 Mar 2022 11:41:13 +0000
a6a96b29\xBB\xA6\xABAdd binary literals (#4680)\xBB\xA6\xABJT\xBB\xA6\xAB547158+jntrnr@users.noreply.github.com\xBB\xA6\xABMon, 28 Feb 2022 18:31:53 -0500
e3100e6a\xBB\xA6\xABFix alias in \`docs/sample_config/config.toml\` (#4669)\xBB\xA6\xABLuca Trevisani\xBB\xA6\xABlucatrv@hotmail.com\xBB\xA6\xABMon, 28 Feb 2022 22:47:14 +0100
</code></pre></div><p>Ahh, much better. Now that we have the raw data, let&#39;s try to parse it with nu.</p><p>First we need to get it in lines or rows. Notice that the output is now in a table format.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">5</span> <span class="token operator">|</span> lines
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 42f1874a\xBB\xA6\xABUpdate some examples and docs (#4682)\xBB\xA6\xABJustin Ma\xBB\xA6\xABhustcer@outlook.com\xBB\xA6\xABTue, 1 Mar
   \u2502 2022 21:05:29 +0800
 1 \u2502 2a89936b\xBB\xA6\xABMove to latest stable crossterm, with fix
   \u2502 (#4684)\xBB\xA6\xABJT\xBB\xA6\xAB547158+jntrnr@users.noreply.github.com\xBB\xA6\xABTue, 1 Mar 2022 07:05:46 -0500
 2 \u2502 ece5e7db\xBB\xA6\xABdataframe list command (#4681)\xBB\xA6\xABFernando
   \u2502 Herrera\xBB\xA6\xABfernando.j.herrera@gmail.com\xBB\xA6\xABTue, 1 Mar 2022 11:41:13 +0000
 3 \u2502 a6a96b29\xBB\xA6\xABAdd binary literals (#4680)\xBB\xA6\xABJT\xBB\xA6\xAB547158+jntrnr@users.noreply.github.com\xBB\xA6\xABMon, 28
   \u2502 Feb 2022 18:31:53 -0500
 4 \u2502 e3100e6a\xBB\xA6\xABFix alias in \`docs/sample_config/config.toml\` (#4669)\xBB\xA6\xABLuca
   \u2502 Trevisani\xBB\xA6\xABlucatrv@hotmail.com\xBB\xA6\xABMon, 28 Feb 2022 22:47:14 +0100
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>That&#39;s more like nushell, but it would be nice to have some columns.</p><p>We used the delimiter <code>\xBB\xA6\xAB</code> specifically so we can create columns so let&#39;s use it like this.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">5</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502 column1  \u2502       column2        \u2502     column3      \u2502       column4        \u2502     column5
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 42f1874a \u2502 Update some examples \u2502 Justin Ma        \u2502 hustcer@outlook.com  \u2502 Tue, 1 Mar 2022
   \u2502          \u2502 and docs (#4682)     \u2502                  \u2502                      \u2502 21:05:29 +0800
 1 \u2502 2a89936b \u2502 Move to latest       \u2502 JT               \u2502 547158+jntrnr@users. \u2502 Tue, 1 Mar 2022
   \u2502          \u2502 stable crossterm,    \u2502                  \u2502 noreply.github.com   \u2502 07:05:46 -0500
   \u2502          \u2502 with fix (#4684)     \u2502                  \u2502                      \u2502
 2 \u2502 ece5e7db \u2502 dataframe list       \u2502 Fernando Herrera \u2502 fernando.j.herrera@g \u2502 Tue, 1 Mar 2022
   \u2502          \u2502 command (#4681)      \u2502                  \u2502 mail.com             \u2502 11:41:13 +0000
 3 \u2502 a6a96b29 \u2502 Add binary literals  \u2502 JT               \u2502 547158+jntrnr@users. \u2502 Mon, 28 Feb 2022
   \u2502          \u2502 (#4680)              \u2502                  \u2502 noreply.github.com   \u2502 18:31:53 -0500
 4 \u2502 e3100e6a \u2502 Fix alias in         \u2502 Luca Trevisani   \u2502 lucatrv@hotmail.com  \u2502 Mon, 28 Feb 2022
   \u2502          \u2502 \`docs/sample_config/ \u2502                  \u2502                      \u2502 22:47:14 +0100
   \u2502          \u2502 config.toml\`         \u2502                  \u2502                      \u2502
   \u2502          \u2502 (#4669)              \u2502                  \u2502                      \u2502
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Yay, for columns! But wait, it would really be nice if those columns had something other than generically named column names.</p><p>Let&#39;s try adding the columns names to <code>split column</code> like this.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">5</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span>
</code></pre></div><p>Ahhh, that looks much better.</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502  commit  \u2502       subject        \u2502       name       \u2502        email         \u2502       date
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 42f1874a \u2502 Update some examples \u2502 Justin Ma        \u2502 hustcer@outlook.com  \u2502 Tue, 1 Mar 2022
   \u2502          \u2502 and docs (#4682)     \u2502                  \u2502                      \u2502 21:05:29 +0800
 1 \u2502 2a89936b \u2502 Move to latest       \u2502 JT               \u2502 547158+jntrnr@users. \u2502 Tue, 1 Mar 2022
   \u2502          \u2502 stable crossterm,    \u2502                  \u2502 noreply.github.com   \u2502 07:05:46 -0500
   \u2502          \u2502 with fix (#4684)     \u2502                  \u2502                      \u2502
 2 \u2502 ece5e7db \u2502 dataframe list       \u2502 Fernando Herrera \u2502 fernando.j.herrera@g \u2502 Tue, 1 Mar 2022
   \u2502          \u2502 command (#4681)      \u2502                  \u2502 mail.com             \u2502 11:41:13 +0000
 3 \u2502 a6a96b29 \u2502 Add binary literals  \u2502 JT               \u2502 547158+jntrnr@users. \u2502 Mon, 28 Feb 2022
   \u2502          \u2502 (#4680)              \u2502                  \u2502 noreply.github.com   \u2502 18:31:53 -0500
 4 \u2502 e3100e6a \u2502 Fix alias in         \u2502 Luca Trevisani   \u2502 lucatrv@hotmail.com  \u2502 Mon, 28 Feb 2022
   \u2502          \u2502 \`docs/sample_config/ \u2502                  \u2502                      \u2502 22:47:14 +0100
   \u2502          \u2502 config.toml\`         \u2502                  \u2502                      \u2502
   \u2502          \u2502 (#4669)              \u2502                  \u2502                      \u2502
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Hmmm, that date string is a string. If it were a date vs a string it could be used for sorting by date. The way we do that is we have to convert the date time to a real datetime and update the column. Try this.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">5</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span>
</code></pre></div><p>Now this looks more nu-ish</p><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502  commit  \u2502         subject          \u2502       name       \u2502          email           \u2502     date
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 42f1874a \u2502 Update some examples and \u2502 Justin Ma        \u2502 hustcer@outlook.com      \u2502 7 hours ago
   \u2502          \u2502 docs (#4682)             \u2502                  \u2502                          \u2502
 1 \u2502 2a89936b \u2502 Move to latest stable    \u2502 JT               \u2502 547158+jntrnr@users.nore \u2502 8 hours ago
   \u2502          \u2502 crossterm, with fix      \u2502                  \u2502 ply.github.com           \u2502
   \u2502          \u2502 (#4684)                  \u2502                  \u2502                          \u2502
 2 \u2502 ece5e7db \u2502 dataframe list command   \u2502 Fernando Herrera \u2502 fernando.j.herrera@gmail \u2502 8 hours ago
   \u2502          \u2502 (#4681)                  \u2502                  \u2502 .com                     \u2502
 3 \u2502 a6a96b29 \u2502 Add binary literals      \u2502 JT               \u2502 547158+jntrnr@users.nore \u2502 20 hours ago
   \u2502          \u2502 (#4680)                  \u2502                  \u2502 ply.github.com           \u2502
 4 \u2502 e3100e6a \u2502 Fix alias in             \u2502 Luca Trevisani   \u2502 lucatrv@hotmail.com      \u2502 a day ago
   \u2502          \u2502 \`docs/sample_config/conf \u2502                  \u2502                          \u2502
   \u2502          \u2502 ig.toml\`                 \u2502                  \u2502                          \u2502
   \u2502          \u2502 (#4669)                  \u2502                  \u2502                          \u2502
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>If we want to revert back to a date string we can do something like this with the <code>nth</code> command and the <code>get</code> command.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">5</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> <span class="token keyword">select</span> <span class="token number">3</span> <span class="token operator">|</span> get <span class="token function">date</span> <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token operator">|</span> get <span class="token number">0</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>Mon, 28 Feb 2022 18:31:53 -0500
</code></pre></div><p>Cool! Now that we have a real datetime we can do some interesting things with it like <code>group-by</code> or <code>sort-by</code> or <code>where</code>. Let&#39;s try <code>sort-by</code> first</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> sort-by <span class="token function">date</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502  commit  \u2502         subject          \u2502       name        \u2502          email          \u2502     date
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 0c3ea636 \u2502 Add support for stderr   \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 4 days ago
    \u2502          \u2502 and exit code (#4647)    \u2502                   \u2502 eply.github.com         \u2502
  1 \u2502 ed46f0ea \u2502 fix: add missing         \u2502 Jae-Heon Ji       \u2502 32578710+jaeheonji@user \u2502 3 days ago
    \u2502          \u2502 metadata for \`ls_colors\` \u2502                   \u2502 s.noreply.github.com    \u2502
    \u2502          \u2502 (#4603)                  \u2502                   \u2502                         \u2502
  2 \u2502 3eca43c0 \u2502 Plugins without file     \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 3 days ago
    \u2502          \u2502 (#4650)                  \u2502                   \u2502 l.com                   \u2502
  3 \u2502 11bc0565 \u2502 Find with regex flag     \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 3 days ago
    \u2502          \u2502 (#4649)                  \u2502                   \u2502 l.com                   \u2502
  4 \u2502 d2bd71d2 \u2502 add LAST_EXIT_CODE       \u2502 LordMZTE          \u2502 lord@mzte.de            \u2502 3 days ago
    \u2502          \u2502 variable (#4655)         \u2502                   \u2502                         \u2502
  5 \u2502 799fa984 \u2502 Update reedline, revert  \u2502 Stefan Holderbach \u2502 sholderbach@users.norep \u2502 3 days ago
    \u2502          \u2502 crossterm (#4657)        \u2502                   \u2502 ly.github.com           \u2502
  6 \u2502 995757c0 \u2502 flags for find (#4663)   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502                          \u2502                   \u2502 l.com                   \u2502
  7 \u2502 446c2aab \u2502 Lets internals also      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 2 days ago
    \u2502          \u2502 have exit codes (#4664)  \u2502                   \u2502 eply.github.com         \u2502
  8 \u2502 10ceac99 \u2502 menu keybindings in      \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502 default file (#4651)     \u2502                   \u2502 l.com                   \u2502
  9 \u2502 4ebbe07d \u2502 Polars upgrade (#4665)   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502                          \u2502                   \u2502 l.com                   \u2502
 10 \u2502 78192100 \u2502 Add shortcircuiting      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 2 days ago
    \u2502          \u2502 boolean operators        \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 (#4668)                  \u2502                   \u2502                         \u2502
 11 \u2502 796d4920 \u2502 add char separators      \u2502 Darren Schroeder  \u2502 343840+fdncred@users.no \u2502 2 days ago
    \u2502          \u2502 (#4667)                  \u2502                   \u2502 reply.github.com        \u2502
 12 \u2502 0f437589 \u2502 add last exit code to    \u2502 Darren Schroeder  \u2502 343840+fdncred@users.no \u2502 2 days ago
    \u2502          \u2502 starship parameters      \u2502                   \u2502 reply.github.com        \u2502
    \u2502          \u2502 (#4670)                  \u2502                   \u2502                         \u2502
 13 \u2502 ef70c8db \u2502 Date parse refactor      \u2502 Jonathan Moore    \u2502 jtm170330@utdallas.edu  \u2502 2 days ago
    \u2502          \u2502 (#4661)                  \u2502                   \u2502                         \u2502
 14 \u2502 10364c4f \u2502 don&#39;t use table          \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 compaction in to nuon if \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 not a table (#4671)      \u2502                   \u2502                         \u2502
 15 \u2502 eec17304 \u2502 Add profiling build      \u2502 Stefan Holderbach \u2502 sholderbach@users.norep \u2502 a day ago
    \u2502          \u2502 profile and symbol strip \u2502                   \u2502 ly.github.com           \u2502
    \u2502          \u2502 (#4630)                  \u2502                   \u2502                         \u2502
 16 \u2502 d6a6c4b0 \u2502 Add back in default      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 keybindings (#4673)      \u2502                   \u2502 eply.github.com         \u2502
 17 \u2502 0924975b \u2502 Use default_config.nu    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 by default (#4675)       \u2502                   \u2502 eply.github.com         \u2502
 18 \u2502 b09acdb7 \u2502 Fix unsupported type     \u2502 Justin Ma         \u2502 hustcer@outlook.com     \u2502 a day ago
    \u2502          \u2502 message for some math    \u2502                   \u2502                         \u2502
    \u2502          \u2502 related commands (#4672) \u2502                   \u2502                         \u2502
 19 \u2502 cb5c61d2 \u2502 Fix open ended ranges    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 (#4677)                  \u2502                   \u2502 eply.github.com         \u2502
 20 \u2502 e3100e6a \u2502 Fix alias in             \u2502 Luca Trevisani    \u2502 lucatrv@hotmail.com     \u2502 a day ago
    \u2502          \u2502 \`docs/sample_config/con  \u2502                   \u2502                         \u2502
    \u2502          \u2502 fig.toml\`                \u2502                   \u2502                         \u2502
    \u2502          \u2502 (#4669)                  \u2502                   \u2502                         \u2502
 21 \u2502 a6a96b29 \u2502 Add binary literals      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 20 hours ago
    \u2502          \u2502 (#4680)                  \u2502                   \u2502 eply.github.com         \u2502
 22 \u2502 ece5e7db \u2502 dataframe list command   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 8 hours ago
    \u2502          \u2502 (#4681)                  \u2502                   \u2502 l.com                   \u2502
 23 \u2502 2a89936b \u2502 Move to latest stable    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 8 hours ago
    \u2502          \u2502 crossterm, with fix      \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 (#4684)                  \u2502                   \u2502                         \u2502
 24 \u2502 42f1874a \u2502 Update some examples     \u2502 Justin Ma         \u2502 hustcer@outlook.com     \u2502 7 hours ago
    \u2502          \u2502 and docs (#4682)         \u2502                   \u2502                         \u2502
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>That&#39;s neat but what if I want it sorted in the opposite order? Try the <code>reverse</code> command and notice the newest commits are at the top.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> sort-by <span class="token function">date</span> <span class="token operator">|</span> reverse
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502  commit  \u2502         subject          \u2502       name        \u2502          email          \u2502     date
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 42f1874a \u2502 Update some examples     \u2502 Justin Ma         \u2502 hustcer@outlook.com     \u2502 7 hours ago
    \u2502          \u2502 and docs (#4682)         \u2502                   \u2502                         \u2502
  1 \u2502 2a89936b \u2502 Move to latest stable    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 8 hours ago
    \u2502          \u2502 crossterm, with fix      \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 (#4684)                  \u2502                   \u2502                         \u2502
  2 \u2502 ece5e7db \u2502 dataframe list command   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 8 hours ago
    \u2502          \u2502 (#4681)                  \u2502                   \u2502 l.com                   \u2502
  3 \u2502 a6a96b29 \u2502 Add binary literals      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 20 hours ago
    \u2502          \u2502 (#4680)                  \u2502                   \u2502 eply.github.com         \u2502
  4 \u2502 e3100e6a \u2502 Fix alias in             \u2502 Luca Trevisani    \u2502 lucatrv@hotmail.com     \u2502 a day ago
    \u2502          \u2502 \`docs/sample_config/con  \u2502                   \u2502                         \u2502
    \u2502          \u2502 fig.toml\`                \u2502                   \u2502                         \u2502
    \u2502          \u2502 (#4669)                  \u2502                   \u2502                         \u2502
  5 \u2502 cb5c61d2 \u2502 Fix open ended ranges    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 (#4677)                  \u2502                   \u2502 eply.github.com         \u2502
  6 \u2502 b09acdb7 \u2502 Fix unsupported type     \u2502 Justin Ma         \u2502 hustcer@outlook.com     \u2502 a day ago
    \u2502          \u2502 message for some math    \u2502                   \u2502                         \u2502
    \u2502          \u2502 related commands (#4672) \u2502                   \u2502                         \u2502
  7 \u2502 0924975b \u2502 Use default_config.nu    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 by default (#4675)       \u2502                   \u2502 eply.github.com         \u2502
  8 \u2502 d6a6c4b0 \u2502 Add back in default      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 keybindings (#4673)      \u2502                   \u2502 eply.github.com         \u2502
  9 \u2502 eec17304 \u2502 Add profiling build      \u2502 Stefan Holderbach \u2502 sholderbach@users.norep \u2502 a day ago
    \u2502          \u2502 profile and symbol strip \u2502                   \u2502 ly.github.com           \u2502
    \u2502          \u2502 (#4630)                  \u2502                   \u2502                         \u2502
 10 \u2502 10364c4f \u2502 don&#39;t use table          \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 compaction in to nuon if \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 not a table (#4671)      \u2502                   \u2502                         \u2502
 11 \u2502 ef70c8db \u2502 Date parse refactor      \u2502 Jonathan Moore    \u2502 jtm170330@utdallas.edu  \u2502 2 days ago
    \u2502          \u2502 (#4661)                  \u2502                   \u2502                         \u2502
 12 \u2502 0f437589 \u2502 add last exit code to    \u2502 Darren Schroeder  \u2502 343840+fdncred@users.no \u2502 2 days ago
    \u2502          \u2502 starship parameters      \u2502                   \u2502 reply.github.com        \u2502
    \u2502          \u2502 (#4670)                  \u2502                   \u2502                         \u2502
 13 \u2502 796d4920 \u2502 add char separators      \u2502 Darren Schroeder  \u2502 343840+fdncred@users.no \u2502 2 days ago
    \u2502          \u2502 (#4667)                  \u2502                   \u2502 reply.github.com        \u2502
 14 \u2502 78192100 \u2502 Add shortcircuiting      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 2 days ago
    \u2502          \u2502 boolean operators        \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 (#4668)                  \u2502                   \u2502                         \u2502
 15 \u2502 4ebbe07d \u2502 Polars upgrade (#4665)   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502                          \u2502                   \u2502 l.com                   \u2502
 16 \u2502 10ceac99 \u2502 menu keybindings in      \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502 default file (#4651)     \u2502                   \u2502 l.com                   \u2502
 17 \u2502 446c2aab \u2502 Lets internals also      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 2 days ago
    \u2502          \u2502 have exit codes (#4664)  \u2502                   \u2502 eply.github.com         \u2502
 18 \u2502 995757c0 \u2502 flags for find (#4663)   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502                          \u2502                   \u2502 l.com                   \u2502
 19 \u2502 799fa984 \u2502 Update reedline, revert  \u2502 Stefan Holderbach \u2502 sholderbach@users.norep \u2502 3 days ago
    \u2502          \u2502 crossterm (#4657)        \u2502                   \u2502 ly.github.com           \u2502
 20 \u2502 d2bd71d2 \u2502 add LAST_EXIT_CODE       \u2502 LordMZTE          \u2502 lord@mzte.de            \u2502 3 days ago
    \u2502          \u2502 variable (#4655)         \u2502                   \u2502                         \u2502
 21 \u2502 11bc0565 \u2502 Find with regex flag     \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 3 days ago
    \u2502          \u2502 (#4649)                  \u2502                   \u2502 l.com                   \u2502
 22 \u2502 3eca43c0 \u2502 Plugins without file     \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 3 days ago
    \u2502          \u2502 (#4650)                  \u2502                   \u2502 l.com                   \u2502
 23 \u2502 ed46f0ea \u2502 fix: add missing         \u2502 Jae-Heon Ji       \u2502 32578710+jaeheonji@user \u2502 3 days ago
    \u2502          \u2502 metadata for \`ls_colors\` \u2502                   \u2502 s.noreply.github.com    \u2502
    \u2502          \u2502 (#4603)                  \u2502                   \u2502                         \u2502
 24 \u2502 0c3ea636 \u2502 Add support for stderr   \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 4 days ago
    \u2502          \u2502 and exit code (#4647)    \u2502                   \u2502 eply.github.com         \u2502
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Now let&#39;s try <code>group-by</code> and see what happens. This is a tiny bit tricky because dates are tricky. When you use <code>group-by</code> on dates you have to remember to use the <code>group-by date</code> subcommand so it&#39;s <code>group-by date date_column_name</code>.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y-%m-%d&#39;</span><span class="token punctuation">}</span> <span class="token operator">|</span> group-by <span class="token function">date</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 2022-03-01 \u2502 [table 3 rows]
 2022-02-28 \u2502 [table 8 rows]
 2022-02-27 \u2502 [table 8 rows]
 2022-02-26 \u2502 [table 5 rows]
 2022-02-25 \u2502 [table 1 row]
\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>This would look better if we transpose the data and name the columns</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime <span class="token operator">|</span> <span class="token function">date</span> <span class="token function">format</span> <span class="token string">&#39;%Y-%m-%d&#39;</span><span class="token punctuation">}</span> <span class="token operator">|</span> group-by <span class="token function">date</span> <span class="token operator">|</span> transpose <span class="token function">date</span> count
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502    date    \u2502     count
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 2022-03-01 \u2502 [table 3 rows]
 1 \u2502 2022-02-28 \u2502 [table 8 rows]
 2 \u2502 2022-02-27 \u2502 [table 8 rows]
 3 \u2502 2022-02-26 \u2502 [table 5 rows]
 4 \u2502 2022-02-25 \u2502 [table 1 row]
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>How about <code>where</code> now? Show only the records that are less than a year old.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.date <span class="token operator">&gt;</span> <span class="token variable"><span class="token punctuation">((</span>date now<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">365</span>day<span class="token punctuation">))</span></span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502  commit  \u2502         subject          \u2502       name        \u2502          email          \u2502     date
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 42f1874a \u2502 Update some examples     \u2502 Justin Ma         \u2502 hustcer@outlook.com     \u2502 7 hours ago
    \u2502          \u2502 and docs (#4682)         \u2502                   \u2502                         \u2502
  1 \u2502 2a89936b \u2502 Move to latest stable    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 8 hours ago
    \u2502          \u2502 crossterm, with fix      \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 (#4684)                  \u2502                   \u2502                         \u2502
  2 \u2502 ece5e7db \u2502 dataframe list command   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 8 hours ago
    \u2502          \u2502 (#4681)                  \u2502                   \u2502 l.com                   \u2502
  3 \u2502 a6a96b29 \u2502 Add binary literals      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 21 hours ago
    \u2502          \u2502 (#4680)                  \u2502                   \u2502 eply.github.com         \u2502
  4 \u2502 e3100e6a \u2502 Fix alias in             \u2502 Luca Trevisani    \u2502 lucatrv@hotmail.com     \u2502 a day ago
    \u2502          \u2502 \`docs/sample_config/con  \u2502                   \u2502                         \u2502
    \u2502          \u2502 fig.toml\`                \u2502                   \u2502                         \u2502
    \u2502          \u2502 (#4669)                  \u2502                   \u2502                         \u2502
  5 \u2502 cb5c61d2 \u2502 Fix open ended ranges    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 (#4677)                  \u2502                   \u2502 eply.github.com         \u2502
  6 \u2502 b09acdb7 \u2502 Fix unsupported type     \u2502 Justin Ma         \u2502 hustcer@outlook.com     \u2502 a day ago
    \u2502          \u2502 message for some math    \u2502                   \u2502                         \u2502
    \u2502          \u2502 related commands (#4672) \u2502                   \u2502                         \u2502
  7 \u2502 0924975b \u2502 Use default_config.nu    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 by default (#4675)       \u2502                   \u2502 eply.github.com         \u2502
  8 \u2502 d6a6c4b0 \u2502 Add back in default      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 keybindings (#4673)      \u2502                   \u2502 eply.github.com         \u2502
  9 \u2502 eec17304 \u2502 Add profiling build      \u2502 Stefan Holderbach \u2502 sholderbach@users.norep \u2502 a day ago
    \u2502          \u2502 profile and symbol strip \u2502                   \u2502 ly.github.com           \u2502
    \u2502          \u2502 (#4630)                  \u2502                   \u2502                         \u2502
 10 \u2502 10364c4f \u2502 don&#39;t use table          \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 compaction in to nuon if \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 not a table (#4671)      \u2502                   \u2502                         \u2502
 11 \u2502 ef70c8db \u2502 Date parse refactor      \u2502 Jonathan Moore    \u2502 jtm170330@utdallas.edu  \u2502 2 days ago
    \u2502          \u2502 (#4661)                  \u2502                   \u2502                         \u2502
 12 \u2502 0f437589 \u2502 add last exit code to    \u2502 Darren Schroeder  \u2502 343840+fdncred@users.no \u2502 2 days ago
    \u2502          \u2502 starship parameters      \u2502                   \u2502 reply.github.com        \u2502
    \u2502          \u2502 (#4670)                  \u2502                   \u2502                         \u2502
 13 \u2502 796d4920 \u2502 add char separators      \u2502 Darren Schroeder  \u2502 343840+fdncred@users.no \u2502 2 days ago
    \u2502          \u2502 (#4667)                  \u2502                   \u2502 reply.github.com        \u2502
 14 \u2502 78192100 \u2502 Add shortcircuiting      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 2 days ago
    \u2502          \u2502 boolean operators        \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 (#4668)                  \u2502                   \u2502                         \u2502
 15 \u2502 4ebbe07d \u2502 Polars upgrade (#4665)   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502                          \u2502                   \u2502 l.com                   \u2502
 16 \u2502 10ceac99 \u2502 menu keybindings in      \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502 default file (#4651)     \u2502                   \u2502 l.com                   \u2502
 17 \u2502 446c2aab \u2502 Lets internals also      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 2 days ago
    \u2502          \u2502 have exit codes (#4664)  \u2502                   \u2502 eply.github.com         \u2502
 18 \u2502 995757c0 \u2502 flags for find (#4663)   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502                          \u2502                   \u2502 l.com                   \u2502
 19 \u2502 799fa984 \u2502 Update reedline, revert  \u2502 Stefan Holderbach \u2502 sholderbach@users.norep \u2502 3 days ago
    \u2502          \u2502 crossterm (#4657)        \u2502                   \u2502 ly.github.com           \u2502
 20 \u2502 d2bd71d2 \u2502 add LAST_EXIT_CODE       \u2502 LordMZTE          \u2502 lord@mzte.de            \u2502 3 days ago
    \u2502          \u2502 variable (#4655)         \u2502                   \u2502                         \u2502
 21 \u2502 11bc0565 \u2502 Find with regex flag     \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 3 days ago
    \u2502          \u2502 (#4649)                  \u2502                   \u2502 l.com                   \u2502
 22 \u2502 3eca43c0 \u2502 Plugins without file     \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 3 days ago
    \u2502          \u2502 (#4650)                  \u2502                   \u2502 l.com                   \u2502
 23 \u2502 ed46f0ea \u2502 fix: add missing         \u2502 Jae-Heon Ji       \u2502 32578710+jaeheonji@user \u2502 3 days ago
    \u2502          \u2502 metadata for \`ls_colors\` \u2502                   \u2502 s.noreply.github.com    \u2502
    \u2502          \u2502 (#4603)                  \u2502                   \u2502                         \u2502
 24 \u2502 0c3ea636 \u2502 Add support for stderr   \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 4 days ago
    \u2502          \u2502 and exit code (#4647)    \u2502                   \u2502 eply.github.com         \u2502
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
...
</code></pre></div><p>Or even show me all the commits in the last 7 days.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD -n <span class="token number">25</span> <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.date <span class="token operator">&gt;</span> <span class="token variable"><span class="token punctuation">((</span>date now<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">7</span>day<span class="token punctuation">))</span></span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502  commit  \u2502         subject          \u2502       name        \u2502          email          \u2502     date
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  0 \u2502 42f1874a \u2502 Update some examples     \u2502 Justin Ma         \u2502 hustcer@outlook.com     \u2502 7 hours ago
    \u2502          \u2502 and docs (#4682)         \u2502                   \u2502                         \u2502
  1 \u2502 2a89936b \u2502 Move to latest stable    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 8 hours ago
    \u2502          \u2502 crossterm, with fix      \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 (#4684)                  \u2502                   \u2502                         \u2502
  2 \u2502 ece5e7db \u2502 dataframe list command   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 8 hours ago
    \u2502          \u2502 (#4681)                  \u2502                   \u2502 l.com                   \u2502
  3 \u2502 a6a96b29 \u2502 Add binary literals      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 21 hours ago
    \u2502          \u2502 (#4680)                  \u2502                   \u2502 eply.github.com         \u2502
  4 \u2502 e3100e6a \u2502 Fix alias in             \u2502 Luca Trevisani    \u2502 lucatrv@hotmail.com     \u2502 a day ago
    \u2502          \u2502 \`docs/sample_config/con  \u2502                   \u2502                         \u2502
    \u2502          \u2502 fig.toml\`                \u2502                   \u2502                         \u2502
    \u2502          \u2502 (#4669)                  \u2502                   \u2502                         \u2502
  5 \u2502 cb5c61d2 \u2502 Fix open ended ranges    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 (#4677)                  \u2502                   \u2502 eply.github.com         \u2502
  6 \u2502 b09acdb7 \u2502 Fix unsupported type     \u2502 Justin Ma         \u2502 hustcer@outlook.com     \u2502 a day ago
    \u2502          \u2502 message for some math    \u2502                   \u2502                         \u2502
    \u2502          \u2502 related commands (#4672) \u2502                   \u2502                         \u2502
  7 \u2502 0924975b \u2502 Use default_config.nu    \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 by default (#4675)       \u2502                   \u2502 eply.github.com         \u2502
  8 \u2502 d6a6c4b0 \u2502 Add back in default      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 keybindings (#4673)      \u2502                   \u2502 eply.github.com         \u2502
  9 \u2502 eec17304 \u2502 Add profiling build      \u2502 Stefan Holderbach \u2502 sholderbach@users.norep \u2502 a day ago
    \u2502          \u2502 profile and symbol strip \u2502                   \u2502 ly.github.com           \u2502
    \u2502          \u2502 (#4630)                  \u2502                   \u2502                         \u2502
 10 \u2502 10364c4f \u2502 don&#39;t use table          \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 a day ago
    \u2502          \u2502 compaction in to nuon if \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 not a table (#4671)      \u2502                   \u2502                         \u2502
 11 \u2502 ef70c8db \u2502 Date parse refactor      \u2502 Jonathan Moore    \u2502 jtm170330@utdallas.edu  \u2502 2 days ago
    \u2502          \u2502 (#4661)                  \u2502                   \u2502                         \u2502
 12 \u2502 0f437589 \u2502 add last exit code to    \u2502 Darren Schroeder  \u2502 343840+fdncred@users.no \u2502 2 days ago
    \u2502          \u2502 starship parameters      \u2502                   \u2502 reply.github.com        \u2502
    \u2502          \u2502 (#4670)                  \u2502                   \u2502                         \u2502
 13 \u2502 796d4920 \u2502 add char separators      \u2502 Darren Schroeder  \u2502 343840+fdncred@users.no \u2502 2 days ago
    \u2502          \u2502 (#4667)                  \u2502                   \u2502 reply.github.com        \u2502
 14 \u2502 78192100 \u2502 Add shortcircuiting      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 2 days ago
    \u2502          \u2502 boolean operators        \u2502                   \u2502 eply.github.com         \u2502
    \u2502          \u2502 (#4668)                  \u2502                   \u2502                         \u2502
 15 \u2502 4ebbe07d \u2502 Polars upgrade (#4665)   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502                          \u2502                   \u2502 l.com                   \u2502
 16 \u2502 10ceac99 \u2502 menu keybindings in      \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502 default file (#4651)     \u2502                   \u2502 l.com                   \u2502
 17 \u2502 446c2aab \u2502 Lets internals also      \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 2 days ago
    \u2502          \u2502 have exit codes (#4664)  \u2502                   \u2502 eply.github.com         \u2502
 18 \u2502 995757c0 \u2502 flags for find (#4663)   \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 2 days ago
    \u2502          \u2502                          \u2502                   \u2502 l.com                   \u2502
 19 \u2502 799fa984 \u2502 Update reedline, revert  \u2502 Stefan Holderbach \u2502 sholderbach@users.norep \u2502 3 days ago
    \u2502          \u2502 crossterm (#4657)        \u2502                   \u2502 ly.github.com           \u2502
 20 \u2502 d2bd71d2 \u2502 add LAST_EXIT_CODE       \u2502 LordMZTE          \u2502 lord@mzte.de            \u2502 3 days ago
    \u2502          \u2502 variable (#4655)         \u2502                   \u2502                         \u2502
 21 \u2502 11bc0565 \u2502 Find with regex flag     \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 3 days ago
    \u2502          \u2502 (#4649)                  \u2502                   \u2502 l.com                   \u2502
 22 \u2502 3eca43c0 \u2502 Plugins without file     \u2502 Fernando Herrera  \u2502 fernando.j.herrera@gmai \u2502 3 days ago
    \u2502          \u2502 (#4650)                  \u2502                   \u2502 l.com                   \u2502
 23 \u2502 ed46f0ea \u2502 fix: add missing         \u2502 Jae-Heon Ji       \u2502 32578710+jaeheonji@user \u2502 3 days ago
    \u2502          \u2502 metadata for \`ls_colors\` \u2502                   \u2502 s.noreply.github.com    \u2502
    \u2502          \u2502 (#4603)                  \u2502                   \u2502                         \u2502
 24 \u2502 0c3ea636 \u2502 Add support for stderr   \u2502 JT                \u2502 547158+jntrnr@users.nor \u2502 4 days ago
    \u2502          \u2502 and exit code (#4647)    \u2502                   \u2502 eply.github.com         \u2502
\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>Now, with the 365 day slice of data, let&#39;s <code>group-by</code> name where the commits are less than a year old. This table has a lot of columns so it&#39;s unreadable. However, if we <code>group-by</code> name and <code>transpose</code> the table things will look much cleaner. <code>Pivot</code> takes rows and turns them into columns or turns columns into rows.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.date <span class="token operator">&gt;</span> <span class="token variable"><span class="token punctuation">((</span>date now<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">365</span>day<span class="token punctuation">))</span></span> <span class="token operator">|</span> group-by name <span class="token operator">|</span> transpose
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  #  \u2502             column0             \u2502     column1
\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   0 \u2502 Justin Ma                       \u2502 [table 21 rows]
   1 \u2502 JT                              \u2502 [table 851 rows]
   2 \u2502 Fernando Herrera                \u2502 [table 176 rows]
   3 \u2502 Luca Trevisani                  \u2502 [table 1 row]
   4 \u2502 Stefan Holderbach               \u2502 [table 19 rows]
   5 \u2502 Jonathan Moore                  \u2502 [table 2 rows]
   6 \u2502 Darren Schroeder                \u2502 [table 242 rows]
   7 \u2502 LordMZTE                        \u2502 [table 1 row]
   8 \u2502 Jae-Heon Ji                     \u2502 [table 10 rows]
   9 \u2502 zkldi                           \u2502 [table 1 row]
  10 \u2502 Michael Angerman                \u2502 [table 61 rows]
...
</code></pre></div><p>Side note: If you happen to get errors, pay attention to the error message. For instance, this error means that the data being returned from <code>git log</code> is somehow incomplete. Specifically, there is a missing date column. I&#39;ve seen git commands work perfectly on Windows and not work at all on Linux or Mac. I&#39;m not sure why. If you run into this issue, one easy way to temporarily avoid it is to limit <code>git log</code> results to a certain number like <code>git log -n 100</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>error: Unknown column
  \u250C\u2500 shell:1:124
  \u2502
1 \u2502 git log --pretty=%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD | lines | split column &quot;\xBB\xA6\xAB&quot; commit subject name email date | upsert date {|d| $d.date | into datetime} | where ($it.date &gt; ((date now) - 365day))
  \u2502                                                                                                                              ^^^^
  \u2502                                                                                                                              \u2502
  \u2502                                                                                                                              There isn&#39;t a column named &#39;date&#39;
  \u2502                                                                                                                              Perhaps you meant &#39;commit&#39;? Columns available: commit, subject
</code></pre></div><p>Here&#39;s one tip for dealing with this error. We have a <code>do</code> command that has an <code>--ignore_errors</code> parameter. This is how you&#39;d use it in the above example, if it were giving errors.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token keyword">do</span> -i <span class="token punctuation">{</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token punctuation">}</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.date <span class="token operator">&gt;</span> <span class="token variable"><span class="token punctuation">((</span>date now<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">365</span>day<span class="token punctuation">))</span></span> <span class="token operator">|</span> group-by name <span class="token operator">|</span> transpose
</code></pre></div><p>Now, back to parsing. What if we throw in the <code>sort-by</code> and <code>reverse</code> commands for good measure? Also, while we&#39;re in there, let&#39;s get rid of the <code>[table 21 rows]</code> thing too. We do that by using the <code>length</code> command on each row of column1.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> where <span class="token punctuation">(</span><span class="token variable">$it</span>.date <span class="token operator">&gt;</span> <span class="token variable"><span class="token punctuation">((</span>date now<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">365</span>day<span class="token punctuation">))</span></span> <span class="token operator">|</span> group-by name <span class="token operator">|</span> transpose <span class="token operator">|</span> upsert column1 <span class="token punctuation">{</span><span class="token operator">|</span>c<span class="token operator">|</span> <span class="token variable">$c</span>.column1 <span class="token operator">|</span> length<span class="token punctuation">}</span> <span class="token operator">|</span> sort-by column1 <span class="token operator">|</span> reverse
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  #  \u2502             column0             \u2502 column1
\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   0 \u2502 JT                              \u2502     851
   1 \u2502 Darren Schroeder                \u2502     242
   2 \u2502 Fernando Herrera                \u2502     176
   3 \u2502 Jakub \u017D\xE1dn\xEDk                    \u2502     136
   4 \u2502 Michael Angerman                \u2502      61
   5 \u2502 Andr\xE9s N. Robalino              \u2502      29
   6 \u2502 Luccas Mateus                   \u2502      27
   7 \u2502 Stefan Stanciulescu             \u2502      27
   8 \u2502 Jonathan Turner                 \u2502      23
   9 \u2502 Tanishq Kancharla               \u2502      21
  10 \u2502 Justin Ma                       \u2502      21
  11 \u2502 onthebridgetonowhere            \u2502      20
  12 \u2502 xiuxiu62                        \u2502      19
...
</code></pre></div><p>This is still a lot of data so let&#39;s just look at the top 10 and use the <code>rename</code> command to name the columns. We could&#39;ve also provided the column names with the <code>transpose</code> command.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> group-by name <span class="token operator">|</span> transpose <span class="token operator">|</span> upsert column1 <span class="token punctuation">{</span><span class="token operator">|</span>c<span class="token operator">|</span> <span class="token variable">$c</span>.column1 <span class="token operator">|</span> length<span class="token punctuation">}</span> <span class="token operator">|</span> sort-by column1 <span class="token operator">|</span> <span class="token function">rename</span> name commits <span class="token operator">|</span> reverse <span class="token operator">|</span> first <span class="token number">10</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 # \u2502        name        \u2502 commits
\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 0 \u2502 Jonathan Turner    \u2502    1420
 1 \u2502 JT                 \u2502     851
 2 \u2502 Andr\xE9s N. Robalino \u2502     383
 3 \u2502 Darren Schroeder   \u2502     380
 4 \u2502 Fernando Herrera   \u2502     176
 5 \u2502 Yehuda Katz        \u2502     165
 6 \u2502 Jakub \u017D\xE1dn\xEDk       \u2502     140
 7 \u2502 Joseph T. Lyons    \u2502      87
 8 \u2502 Michael Angerman   \u2502      71
 9 \u2502 Jason Gedge        \u2502      67
\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
</code></pre></div><p>And there you have it. The top 10 committers and we learned a little bit of parsing along the way.</p><p>Here&#39;s one last little known command. Perhaps you don&#39;t want your table numbered starting with 0. Here&#39;s a way to change that with the <code>table</code> command.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> log --pretty<span class="token operator">=</span>%h\xBB\xA6\xAB%s\xBB\xA6\xAB%aN\xBB\xA6\xAB%aE\xBB\xA6\xAB%aD <span class="token operator">|</span> lines <span class="token operator">|</span> <span class="token function">split</span> <span class="token function">column</span> <span class="token string">&quot;\xBB\xA6\xAB&quot;</span> commit subject name email <span class="token function">date</span> <span class="token operator">|</span> upsert <span class="token function">date</span> <span class="token punctuation">{</span><span class="token operator">|</span>d<span class="token operator">|</span> <span class="token variable">$d</span>.date <span class="token operator">|</span> into datetime<span class="token punctuation">}</span> <span class="token operator">|</span> group-by name <span class="token operator">|</span> transpose <span class="token operator">|</span> upsert column1 <span class="token punctuation">{</span><span class="token operator">|</span>c<span class="token operator">|</span> <span class="token variable">$c</span>.column1 <span class="token operator">|</span> length<span class="token punctuation">}</span> <span class="token operator">|</span> sort-by column1 <span class="token operator">|</span> <span class="token function">rename</span> name commits <span class="token operator">|</span> reverse <span class="token operator">|</span> first <span class="token number">10</span> <span class="token operator">|</span> table -n <span class="token number">1</span>
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
 #  \u2502        name        \u2502 commits
\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  1 \u2502 Jonathan Turner    \u2502    1420
  2 \u2502 JT                 \u2502     851
  3 \u2502 Andr\xE9s N. Robalino \u2502     383
  4 \u2502 Darren Schroeder   \u2502     380
  5 \u2502 Fernando Herrera   \u2502     176
  6 \u2502 Yehuda Katz        \u2502     165
  7 \u2502 Jakub \u017D\xE1dn\xEDk       \u2502     140
  8 \u2502 Joseph T. Lyons    \u2502      87
  9 \u2502 Michael Angerman   \u2502      71
 10 \u2502 Jason Gedge        \u2502      67
</code></pre></div><p>Created on 11/9/2020 with Nushell on Windows 10. Updated on 3/1/2022 with Nushell on Windows 10.</p><table><thead><tr><th>key</th><th>value</th></tr></thead><tbody><tr><td>version</td><td>0.59.0</td></tr><tr><td>branch</td><td>main</td></tr><tr><td>short_commit</td><td>b09acdb7</td></tr><tr><td>commit_hash</td><td>b09acdb7f98ec9694cfb223222577bc02ebba4a4</td></tr><tr><td>commit_date</td><td>2022-02-28 15:14:33 +00:00</td></tr><tr><td>build_os</td><td>windows-x86_64</td></tr><tr><td>rust_version</td><td>rustc 1.59.0 (9d1b2106e 2022-02-23)</td></tr><tr><td>rust_channel</td><td>stable-x86_64-pc-windows-msvc</td></tr><tr><td>cargo_version</td><td>cargo 1.59.0 (49d8809dc 2022-02-10)</td></tr><tr><td>pkg_version</td><td>0.59.0</td></tr><tr><td>build_time</td><td>2022-02-28 16:16:00 -06:00</td></tr><tr><td>build_rust_channel</td><td>debug</td></tr><tr><td>features</td><td>dataframe, default, trash, which, zip</td></tr><tr><td>installed_plugins</td><td>gstat</td></tr></tbody></table>`,67),r=[t];function p(c,l){return n(),s("div",null,r)}var i=a(o,[["render",p],["__file","parsing_git_log.html.vue"]]);export{i as default};
