import{_ as l,z as s,A as a,W as h,X as t,C as e,T as r,a6 as o,Q as i}from"./framework.3d018c9f.js";const d={},u=t("h1",{id:"nushell-0-69",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-69","aria-hidden":"true"},"#"),e(" Nushell 0.69")],-1),c=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),p=t("p",null,"Today, we're releasing version 0.69 of Nu. This release includes bugfixes and improvements to existing languages.",-1),_=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),f={href:"https://github.com/nushell/nushell/releases/tag/0.69.1",target:"_blank",rel:"noopener noreferrer"},g={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"cargo install nu",-1),b=t("p",null,[e("If you want all the built-in goodies, you can install "),t("code",null,"cargo install nu --features=extra"),e(".")],-1),v=t("p",null,[e("As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use "),t("code",null,"cargo install nu_plugin_<plugin name>"),e(".")],-1),k=t("h1",{id:"themes-of-this-release",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#themes-of-this-release","aria-hidden":"true"},"#"),e(" Themes of this release")],-1),y={id:"finishing-the-rework-of-modules-and-environment-windsoilder-kubouch",tabindex:"-1"},w=t("a",{class:"header-anchor",href:"#finishing-the-rework-of-modules-and-environment-windsoilder-kubouch","aria-hidden":"true"},"#",-1),x={href:"https://github.com/nushell/nushell/pull/6468",target:"_blank",rel:"noopener noreferrer"},N={href:"https://en.wikipedia.org/wiki/J%C3%A1ra_Cimrman",target:"_blank",rel:"noopener noreferrer"},A=t("code",null,"source-env",-1),S=t("code",null,"source-env",-1),T=t("code",null,"source-env",-1),I=t("strong",null,[t("code",null,"use"),e(" will be used activate the module's environment")],-1),W=t("code",null,"use",-1),C=t("code",null,"export-env { ... }",-1),F=t("code",null,"use",-1),q=t("code",null,"source-env",-1),R=o('<p>We&#39;re also keeping the <code>source</code> command for now, as well as the current config file format. One reason is that we want to first investigate whether it is possible to export also regular variables from modules and whether we can use the <code>module</code> keyword inside modules. However, the use of modules is still preferred over <code>source</code> as it will become the default way in the future.</p><h3 id="summary-of-deprecations" tabindex="-1"><a class="header-anchor" href="#summary-of-deprecations" aria-hidden="true">#</a> Summary of deprecations</h3><p>Here is a recap of the table posted in the previous release post with updated entries.</p><table><thead><tr><th>command</th><th>pre-previous release (0.67)</th><th>previous release (0.68)</th><th>this release (0.69)</th></tr></thead><tbody><tr><td><code>source</code></td><td>imports everything into the current scope</td><td>same (deprecated)</td><td>same (deprecated)</td></tr><tr><td><code>source-env</code></td><td>N/A</td><td>imports environment variables</td><td>removed</td></tr><tr><td><code>use</code></td><td>imports environment variables, commands and aliases</td><td>same</td><td>same</td></tr><tr><td><code>hide</code></td><td>hides enviornment variables, commands and aliases</td><td>same</td><td>hides only commands and aliases*</td></tr><tr><td><code>hide-env</code></td><td>hides environment variables</td><td>same</td><td>same</td></tr><tr><td><code>export env</code></td><td>defines a single environment variable in a module</td><td>same</td><td>removed</td></tr><tr><td><code>export-env</code></td><td>N/A</td><td>(in a module) defines the envrionment for the whole module</td><td>same</td></tr><tr><td><code>export-env</code></td><td>N/A</td><td>(in a script) when evaluated, preserves the environment from the block</td><td>same</td></tr><tr><td><code>export ...</code></td><td>only allowed in a module</td><td>allowed in a script as well</td><td>same</td></tr><tr><td><code>config.nu</code></td><td>plain script</td><td>plain script</td><td>plain script</td></tr><tr><td><code>env.nu</code></td><td>plain script</td><td>plain script</td><td>plain script</td></tr><tr><td><code>login.nu</code></td><td>plain script</td><td>plain script</td><td>plain script</td></tr></tbody></table><ul><li>Technically, <code>hide</code> still hides environment variables but it works in a &quot;compatibility mode&quot; that is intended to only serve its purpose in the virtualenv activation script. As soon as the virtualenv integration gets updated, hiding environment variables with <code>hide</code> will be removed completely.</li></ul><h2 id="upcoming-virtualenv-activation-changes-kubouch" tabindex="-1"><a class="header-anchor" href="#upcoming-virtualenv-activation-changes-kubouch" aria-hidden="true">#</a> Upcoming <code>virtualenv</code> activation changes (kubouch)</h2>',6),j={href:"https://github.com/pypa/virtualenv/pull/2422",target:"_blank",rel:"noopener noreferrer"},E=t("code",null,"source activate.nu",-1),U=t("code",null,"overlay use activate.nu",-1),B=t("code",null,"deactivate",-1),V=o('<p>Under the hood, calling <code>overlay use activate.nu</code> will activate the <code>activate</code> overlay and <code>deactivate</code> is just an alias for calling <code>overlay hide activate</code>. If you wish, you can manually name the overlay, for example <code>overlay use activate.nu as spam</code>, but then you&#39;d need to remove it with <code>overlay hide spam</code> instead of <code>deactivate</code>.</p><h2 id="grammar-experiments-jt" tabindex="-1"><a class="header-anchor" href="#grammar-experiments-jt" aria-hidden="true">#</a> Grammar Experiments (JT)</h2>',2),z={href:"https://github.com/nushell/grammar",target:"_blank",rel:"noopener noreferrer"},P=o(`<p>Traditional function definition syntax</p><div class="language-text" data-ext="text"><pre class="language-text"><code>def foo(x: int) { ... }
</code></pre></div><p>Traditional function call syntax</p><div class="language-text" data-ext="text"><pre class="language-text"><code>foo(3)
</code></pre></div><p>And much more. We&#39;re hoping to talk more about these experiments as they mature.</p><h1 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h1><p>We found a regression in the correctness of the <code>-d</code> and <code>-t</code> flags of <code>touch</code>. To get the release out, we&#39;ve removed these flags, but hope to replace them with correct implementations in the future.</p><p>We also removed support for duration literals above weeks, including month, year, and decade literals. These were found to be confusing as it&#39;s unclear what a duration of a month is (30 days? 31 days?)</p><p>The <code>str collect</code> command is now <code>str join</code>.</p><h1 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps" aria-hidden="true">#</a> Next Steps</h1>`,10),D={href:"https://kubouch.notion.site/4db276462ba24704919edb4cc4b86be7?v=10506505557f4f7b9a65155128c04250",target:"_blank",rel:"noopener noreferrer"},L=t("p",null,"Some time was spent trying out possible new syntax directions but we were not confident to release them yet. In the next release we'll see a removal of features deprecated in this release and we'll continue to push ahead for the 0.80.",-1),M=t("h1",{id:"full-changelog",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#full-changelog","aria-hidden":"true"},"#"),e(" Full changelog")],-1),H=t("h2",{id:"nushell",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell","aria-hidden":"true"},"#"),e(" Nushell")],-1),J={href:"https://github.com/nushell/nushell/pull/6631",target:"_blank",rel:"noopener noreferrer"},O={href:"https://github.com/nushell/nushell/pull/6629",target:"_blank",rel:"noopener noreferrer"},G={href:"https://github.com/nushell/nushell/pull/6626",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://github.com/nushell/nushell/pull/6623",target:"_blank",rel:"noopener noreferrer"},$={href:"https://github.com/nushell/nushell/pull/6613",target:"_blank",rel:"noopener noreferrer"},K={href:"https://github.com/nushell/nushell/pull/6612",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/nushell/nushell/pull/6615",target:"_blank",rel:"noopener noreferrer"},X={href:"https://github.com/nushell/nushell/pull/6614",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://github.com/nushell/nushell/pull/6590",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://github.com/nushell/nushell/pull/6524",target:"_blank",rel:"noopener noreferrer"},te=t("code",null,"all",-1),ne=t("code",null,"any",-1),re={href:"https://github.com/nushell/nushell/pull/6610",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://github.com/nushell/nushell/pull/6609",target:"_blank",rel:"noopener noreferrer"},le={href:"https://github.com/nushell/nushell/pull/6576",target:"_blank",rel:"noopener noreferrer"},se={href:"https://github.com/nushell/nushell/pull/6564",target:"_blank",rel:"noopener noreferrer"},ae={href:"https://github.com/nushell/nushell/pull/6561",target:"_blank",rel:"noopener noreferrer"},he={href:"https://github.com/nushell/nushell/pull/6556",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://github.com/nushell/nushell/pull/6607",target:"_blank",rel:"noopener noreferrer"},de={href:"https://github.com/nushell/nushell/pull/6560",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://github.com/nushell/nushell/pull/6468",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://github.com/nushell/nushell/pull/6604",target:"_blank",rel:"noopener noreferrer"},pe={href:"https://github.com/nushell/nushell/pull/6601",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://github.com/nushell/nushell/pull/6555",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://github.com/nushell/nushell/pull/6551",target:"_blank",rel:"noopener noreferrer"},ge={href:"https://github.com/nushell/nushell/pull/6515",target:"_blank",rel:"noopener noreferrer"},me={href:"https://github.com/nushell/nushell/pull/6600",target:"_blank",rel:"noopener noreferrer"},be={href:"https://github.com/nushell/nushell/pull/6587",target:"_blank",rel:"noopener noreferrer"},ve={href:"https://github.com/nushell/nushell/pull/6585",target:"_blank",rel:"noopener noreferrer"},ke={href:"https://github.com/nushell/nushell/pull/6568",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://github.com/nushell/nushell/pull/6566",target:"_blank",rel:"noopener noreferrer"},we={href:"https://github.com/nushell/nushell/pull/6565",target:"_blank",rel:"noopener noreferrer"},xe={href:"https://github.com/nushell/nushell/pull/6563",target:"_blank",rel:"noopener noreferrer"},Ne={href:"https://github.com/nushell/nushell/pull/6557",target:"_blank",rel:"noopener noreferrer"},Ae={href:"https://github.com/nushell/nushell/pull/6537",target:"_blank",rel:"noopener noreferrer"},Se={href:"https://github.com/nushell/nushell/pull/6599",target:"_blank",rel:"noopener noreferrer"},Te={href:"https://github.com/nushell/nushell/pull/6580",target:"_blank",rel:"noopener noreferrer"},Ie=t("code",null,"uniq --help",-1),We={href:"https://github.com/nushell/nushell/pull/6579",target:"_blank",rel:"noopener noreferrer"},Ce={href:"https://github.com/nushell/nushell/pull/6575",target:"_blank",rel:"noopener noreferrer"},Fe=t("code",null,"-a",-1),qe=t("code",null,"save --append",-1),Re={href:"https://github.com/nushell/nushell/pull/6542",target:"_blank",rel:"noopener noreferrer"},je={href:"https://github.com/nushell/nushell/pull/6540",target:"_blank",rel:"noopener noreferrer"},Ee={href:"https://github.com/nushell/nushell/pull/6531",target:"_blank",rel:"noopener noreferrer"},Ue=t("code",null,"str collect",-1),Be=t("code",null,"str join",-1),Ve={href:"https://github.com/nushell/nushell/pull/6572",target:"_blank",rel:"noopener noreferrer"},ze={href:"https://github.com/nushell/nushell/pull/6526",target:"_blank",rel:"noopener noreferrer"},Pe=t("code",null,"source-env",-1),De={href:"https://github.com/nushell/nushell/pull/6548",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://github.com/nushell/nushell/pull/6538",target:"_blank",rel:"noopener noreferrer"},Me={href:"https://github.com/nushell/nushell/pull/6535",target:"_blank",rel:"noopener noreferrer"},He={href:"https://github.com/nushell/nushell/pull/6523",target:"_blank",rel:"noopener noreferrer"},Je=t("code",null,"module spam { export def-env",-1),Oe={href:"https://github.com/nushell/nushell/pull/6495",target:"_blank",rel:"noopener noreferrer"},Ge=t("code",null,"lpad",-1),Ye=t("code",null,"rpad",-1),$e=t("code",null,"lpad",-1),Ke={href:"https://github.com/nushell/nushell/pull/6527",target:"_blank",rel:"noopener noreferrer"},Qe=t("code",null,"cpufeatures",-1),Xe={href:"https://github.com/nushell/nushell/pull/6492",target:"_blank",rel:"noopener noreferrer"},Ze={href:"https://github.com/nushell/nushell/pull/6481",target:"_blank",rel:"noopener noreferrer"},et=t("h2",{id:"extension",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#extension","aria-hidden":"true"},"#"),e(" Extension")],-1),tt={href:"https://github.com/nushell/vscode-nushell-lang/pull/65",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://github.com/nushell/vscode-nushell-lang/pull/64",target:"_blank",rel:"noopener noreferrer"},rt={href:"https://github.com/nushell/vscode-nushell-lang/pull/63",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://github.com/nushell/vscode-nushell-lang/pull/62",target:"_blank",rel:"noopener noreferrer"},lt={href:"https://github.com/nushell/vscode-nushell-lang/pull/61",target:"_blank",rel:"noopener noreferrer"},st={href:"https://github.com/nushell/vscode-nushell-lang/pull/60",target:"_blank",rel:"noopener noreferrer"},at=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),ht={href:"https://github.com/nushell/nushell.github.io/pull/613",target:"_blank",rel:"noopener noreferrer"},it={href:"https://github.com/nushell/nushell.github.io/pull/611",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://github.com/nushell/nushell.github.io/pull/610",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://github.com/nushell/nushell.github.io/pull/609",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://github.com/nushell/nushell.github.io/pull/607",target:"_blank",rel:"noopener noreferrer"},pt={href:"https://github.com/nushell/nushell.github.io/pull/600",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://github.com/nushell/nushell.github.io/pull/608",target:"_blank",rel:"noopener noreferrer"},ft={href:"https://github.com/nushell/nushell.github.io/pull/605",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://github.com/nushell/nushell.github.io/pull/604",target:"_blank",rel:"noopener noreferrer"},mt={href:"https://github.com/nushell/nushell.github.io/pull/603",target:"_blank",rel:"noopener noreferrer"},bt={href:"https://github.com/nushell/nushell.github.io/pull/602",target:"_blank",rel:"noopener noreferrer"},vt=t("code",null,"str collect",-1),kt=t("code",null,"str join",-1),yt=t("h2",{id:"nu-scripts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),e(" Nu_Scripts")],-1),wt={href:"https://github.com/nushell/nu_scripts/pull/299",target:"_blank",rel:"noopener noreferrer"},xt={href:"https://github.com/nushell/nu_scripts/pull/298",target:"_blank",rel:"noopener noreferrer"},Nt={href:"https://github.com/nushell/nu_scripts/pull/297",target:"_blank",rel:"noopener noreferrer"},At={href:"https://github.com/nushell/nu_scripts/pull/296",target:"_blank",rel:"noopener noreferrer"},St={href:"https://github.com/nushell/nu_scripts/pull/293",target:"_blank",rel:"noopener noreferrer"},Tt={href:"https://github.com/nushell/nu_scripts/pull/289",target:"_blank",rel:"noopener noreferrer"},It=t("h2",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" reedline")],-1),Wt={href:"https://github.com/nushell/reedline/pull/487",target:"_blank",rel:"noopener noreferrer"},Ct={href:"https://github.com/nushell/reedline/pull/486",target:"_blank",rel:"noopener noreferrer"},Ft=t("code",null,"Char(' ')",-1),qt={href:"https://github.com/nushell/reedline/pull/484",target:"_blank",rel:"noopener noreferrer"},Rt={href:"https://github.com/nushell/reedline/pull/483",target:"_blank",rel:"noopener noreferrer"},jt={href:"https://github.com/nushell/reedline/pull/482",target:"_blank",rel:"noopener noreferrer"},Et={href:"https://github.com/nushell/reedline/pull/485",target:"_blank",rel:"noopener noreferrer"},Ut={href:"https://github.com/nushell/reedline/pull/481",target:"_blank",rel:"noopener noreferrer"},Bt={href:"https://github.com/nushell/reedline/pull/474",target:"_blank",rel:"noopener noreferrer"},Vt={href:"https://github.com/nushell/reedline/pull/472",target:"_blank",rel:"noopener noreferrer"},zt={href:"https://github.com/nushell/reedline/pull/467",target:"_blank",rel:"noopener noreferrer"};function Pt(Dt,Lt){const n=i("ExternalLinkIcon");return s(),a("div",null,[u,c,p,h(" more "),_,t("p",null,[e("Nu 0.69 is available as "),t("a",f,[e("pre-built binaries"),r(n)]),e(" or from "),t("a",g,[e("crates.io"),r(n)]),e('. Note: this release is officially "0.69.1" because of a last-minute issue that was found and fixed. If you have Rust installed you can install it using '),m,e(".")]),b,v,k,t("h2",y,[w,e(" Finishing the rework of modules and environment ("),t("a",x,[e("WindSoilder, kubouch"),r(n)]),e(")")]),t("p",null,[e('If you followed the development since the last release, you might have noticed we successfully applied "the method of dead ends" pioneered by '),t("a",N,[e("Jára Cimrman"),r(n)]),e(': "Somebody had to probe this dead end of human knowledge and announce to the world: Not this way, friends!" In short, the '),A,e(" experiment did not work out as planned. We hoped to allow to call "),S,e(" with dynamic paths which, however, proved unfeasible. Therefore, in this release, we remove all notions of "),T,e(" from Nushell and instead "),I,e(". Any call to "),W,e(" will run the module's "),C,e(" block (if there is one) and keep its environment. A positive side of it is that one call of "),F,e(" is enough to import both commands/aliases and the environment, there is no need to call two separate commands as we planned for "),q,e(".")]),R,t("p",null,[e("To reflect the recent changes to the module environment, we are changing the virtualenv integration to use overlays. This will come in effect as soon as "),t("a",j,[e("this PR"),r(n)]),e(" gets merged. In practice, this means that instead of "),E,e(", you'll use "),U,e(", "),B,e(" will work the same.")]),V,t("p",null,[e("We've recently also started working on some improvements to Nushell's syntax. While these aren't part of Nushell 0.69, you can try this experimental syntax in our new "),t("a",z,[e("grammar"),r(n)]),e(" repo. Some experiments we're looking into:")]),P,t("p",null,[e("We've been progressing with our design towards 0.80 as outlined in "),t("a",D,[e("this Notion page"),r(n)]),e(".")]),L,M,H,t("ul",null,[t("li",null,[e("jt created "),t("a",J,[e("bump to 0.69.1"),r(n)]),e(", and "),t("a",O,[e("remove -d and -t from touch"),r(n)]),e(", and "),t("a",G,[e("bump to updated reedline"),r(n)]),e(", and "),t("a",Y,[e("bump to 0.69"),r(n)]),e(", and "),t("a",$,[e("Remove month and year duration constants"),r(n)]),e(", and "),t("a",K,[e("touchup some clippy warnings in tests"),r(n)])]),t("li",null,[e("sholderbach created "),t("a",Q,[e("Clippy with the current stable toolchain"),r(n)]),e(", and "),t("a",X,[e("Update reedline to better vi behavior"),r(n)]),e(", and "),t("a",Z,[e('Add "space" key to bind in vi normal mode'),r(n)]),e(", and "),t("a",ee,[e("Improve wording around "),te,e(" and "),ne,r(n)])]),t("li",null,[e("MichelMunoz created "),t("a",re,[e("6582 - Incorrect documentation for some string operations"),r(n)])]),t("li",null,[e("nibon7 created "),t("a",oe,[e("version: show built time git branch"),r(n)]),e(", and "),t("a",le,[e("Apply clippy fix for rust 1.63.0"),r(n)]),e(", and "),t("a",se,[e("Use style from lscolors to render the rest of the filename"),r(n)]),e(", and "),t("a",ae,[e("Use stripped path for lscolors to get style"),r(n)]),e(", and "),t("a",he,[e("Make clickable links smarter"),r(n)])]),t("li",null,[e("WindSoilder created "),t("a",ie,[e("fix sys info mem usage"),r(n)]),e(", and "),t("a",de,[e("when execute external command, escape args if possible"),r(n)]),e(", and "),t("a",ue,[e("Remove deprecated environment functionality"),r(n)])]),t("li",null,[e("Fl1tzi created "),t("a",ce,[e("fix issue 6602 (broken highlighting in find)"),r(n)])]),t("li",null,[e("Kangaxx-0 created "),t("a",pe,[e("[Cleanup]Nu completion unit tests"),r(n)]),e(", and "),t("a",_e,[e("Fix 6529 - Trim overlay name"),r(n)]),e(", and "),t("a",fe,[e("Add overlay use usage for 'as'"),r(n)]),e(", and "),t("a",ge,[e("Fix 6252 by remove unit tests"),r(n)])]),t("li",null,[e("fdncred created "),t("a",me,[e("bump pinned rust version to 1.63"),r(n)]),e(", and "),t("a",be,[e("add history session command"),r(n)]),e(", and "),t("a",ve,[e("add history session id to $nu"),r(n)]),e(", and "),t("a",ke,[e("rename with_sql to query dfr"),r(n)]),e(", and "),t("a",ye,[e("update sql-parser crate and all the files it touches"),r(n)]),e(", and "),t("a",we,[e("synchronize the db commands with file names"),r(n)]),e(", and "),t("a",xe,[e("update to the latest sysinfo crate"),r(n)]),e(", and "),t("a",Ne,[e("update text in readme file"),r(n)]),e(", and "),t("a",Ae,[e("provide a way to use sql to query dataframes"),r(n)])]),t("li",null,[e("rgwood created "),t("a",Se,[e("Fix mv data loss when changing folder case (step 1)"),r(n)])]),t("li",null,[e("dandavison created "),t("a",Te,[e("Improve "),Ie,e(" text"),r(n)]),e(", and "),t("a",We,[e('Improve "Did you mean?" suggestions'),r(n)]),e(", and "),t("a",Ce,[e("Reinstate the "),Fe,e(" short form of "),qe,r(n)]),e(", and "),t("a",Re,[e("Revert foreground process changes to fix MacOS piping bug (less and fzf)"),r(n)]),e(", and "),t("a",je,[e("Don't compute 'did you mean' suggestions unless showing them to user"),r(n)]),e(", and "),t("a",Ee,[Ue,e(" => "),Be,r(n)])]),t("li",null,[e("kubouch created "),t("a",Ve,[e("Add export-env eval to use command"),r(n)]),e(", and "),t("a",ze,[e("Require static path for "),Pe,r(n)])]),t("li",null,[e("aroneous created "),t("a",De,[e("Support Arrow IPC file format with dataframes"),r(n)])]),t("li",null,[e("hustcer created "),t("a",Le,[e("Bump dev version to v0.68.2"),r(n)])]),t("li",null,[e("merelymyself created "),t("a",Me,[e("default to $nothing if cellpath not found"),r(n)]),e(", and "),t("a",He,[e("Stop panic when typing "),Je,r(n)]),e(", and "),t("a",Oe,[e("remove panic from "),Ge,e(" and "),Ye,e(", change truncation behaviour for "),$e,r(n)])]),t("li",null,[e("CBenoit created "),t("a",Ke,[e("build: update "),Qe,e(" crate"),r(n)])]),t("li",null,[e("unrelentingtech created "),t("a",Xe,[e("Add a 'commandline' command for manipulating the current buffer"),r(n)]),e(", and "),t("a",Ze,[e("shell_integration: Report current working directory as OSC 7"),r(n)])])]),et,t("ul",null,[t("li",null,[e("fdncred created "),t("a",tt,[e("Update readme screenshots"),r(n)]),e(", and "),t("a",nt,[e("bump version for release"),r(n)]),e(", and "),t("a",rt,[e("add some tweaks to the auto-generated syntax"),r(n)]),e(", and "),t("a",ot,[e("remove themes + cleanup"),r(n)]),e(", and "),t("a",lt,[e("correct syntax highlighting for block parameters"),r(n)])]),t("li",null,[e("Yethal created "),t("a",st,[e("Updated syntax + fixed generation script"),r(n)])])]),at,t("ul",null,[t("li",null,[e("drbrain created "),t("a",ht,[e("Explain … for a repeating positional parameter"),r(n)])]),t("li",null,[e("tensorush created "),t("a",it,[e("Fix built-in and plug-in typos"),r(n)]),e(", and "),t("a",dt,[e("Fix some typos"),r(n)])]),t("li",null,[e("WindSoilder created "),t("a",ut,[e("add background task section"),r(n)]),e(", and "),t("a",ct,[e("add doc about plugin name"),r(n)]),e(", and "),t("a",pt,[e("update plugin for newest changes"),r(n)])]),t("li",null,[e("fdncred created "),t("a",_t,[e("add a dataframe cookbook example"),r(n)])]),t("li",null,[e("hustcer created "),t("a",ft,[e("Refactor vuepress config"),r(n)])]),t("li",null,[e("apraga created "),t("a",gt,[e("Cookbook : SSH passphase management"),r(n)])]),t("li",null,[e("Yethal created "),t("a",mt,[e("Update modules.md"),r(n)])]),t("li",null,[e("dandavison created "),t("a",bt,[vt,e(" => "),kt,r(n)])])]),yt,t("ul",null,[t("li",null,[e("Neur1n created "),t("a",wt,[e("feat: added coloring/hl.nu, a highlighting module"),r(n)])]),t("li",null,[e("WindSoilder created "),t("a",xt,[e("add background feature"),r(n)])]),t("li",null,[e("fdncred created "),t("a",Nt,[e("add cargo update completions"),r(n)])]),t("li",null,[e("FrancescElies created "),t("a",At,[e("cargo clippy completions"),r(n)])]),t("li",null,[e("e2dk4r created "),t("a",St,[e("custom completions: scoop: fix getting environmental variables on nu v0.68.0"),r(n)])]),t("li",null,[e("Lightfire228 created "),t("a",Tt,[e("[WIP] Feature/auto venv"),r(n)])])]),It,t("ul",null,[t("li",null,[e("sholderbach created "),t("a",Wt,[e("Prepare 0.12.0 release"),r(n)]),e(", and "),t("a",Ct,[e("List that space can be bound through "),Ft,r(n)]),e(", and "),t("a",qt,[e("Vi-Refactor: Properly parse motions separate from the actions"),r(n)]),e(", and "),t("a",Rt,[e("Fix vi character search parsing"),r(n)]),e(", and "),t("a",jt,[e("Fix documentation string formatting and linking"),r(n)])]),t("li",null,[e("fdncred created "),t("a",Et,[e("enable easier history session id conversion"),r(n)]),e(", and "),t("a",Ut,[e("change history session_id to a systematically generated number"),r(n)])]),t("li",null,[e("jcgruenhage created "),t("a",Bt,[e("Don't bundle sqlite by default"),r(n)])]),t("li",null,[e("unrelentingtech created "),t("a",Vt,[e("Allow external manipulation of the command line buffer, fixes #423"),r(n)])]),t("li",null,[e("GrxE created "),t("a",zt,[e("Basic external printer"),r(n)])])])])}const Ht=l(d,[["render",Pt],["__file","2022-09-27-nushell-0_69.html.vue"]]);export{Ht as default};