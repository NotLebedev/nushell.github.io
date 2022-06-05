import{_ as r,r as l,o as h,c as i,a as t,b as n,d as e,e as s}from"./app.22fee913.js";const a={},d=t("h1",{id:"nushell-0-63",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nushell-0-63","aria-hidden":"true"},"#"),e(" Nushell 0.63")],-1),c=t("p",null,"Nushell, or Nu for short, is a new shell that takes a modern, structured approach to your commandline. It works seamlessly with the data from your filesystem, operating system, and a growing number of file formats to make it easy to build powerful commandline pipelines.",-1),_=t("p",null,"Today, we're releasing version 0.63 of Nu. This release is the first to include the 'overlays' feature, hooks, lazy dataframes, and more.",-1),u=t("h1",{id:"where-to-get-it",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#where-to-get-it","aria-hidden":"true"},"#"),e(" Where to get it")],-1),p=e("Nu 0.63 is available as "),f={href:"https://github.com/nushell/nushell/releases/tag/0.63.0",target:"_blank",rel:"noopener noreferrer"},g=e("pre-built binaries"),b=e(" or from "),m={href:"https://crates.io/crates/nu",target:"_blank",rel:"noopener noreferrer"},k=e("crates.io"),y=e(". If you have Rust installed you can install it using "),v=t("code",null,"cargo install nu",-1),w=e("."),x=s(`<p>If you want all the built-in goodies, you can install <code>cargo install nu --features=extra</code>.</p><p>As part of this release, we also publish a set of optional plugins you can install and use with Nu. To install, use <code>cargo install nu_plugin_&lt;plugin name&gt;</code>.</p><h1 id="themes-of-this-release" tabindex="-1"><a class="header-anchor" href="#themes-of-this-release" aria-hidden="true">#</a> Themes of this release</h1><h2 id="overlays-kubouch" tabindex="-1"><a class="header-anchor" href="#overlays-kubouch" aria-hidden="true">#</a> Overlays (kubouch)</h2><p>We&#39;ve added a new concept into this release that merges a few of our previous design ideas together: overlays. You can think of overlays like layers in a paint program. They work together to give you a set of commands, environment variables, and more that you can turn on and off as needed.</p><p>For example, we can create an overlay to work in:</p><div class="language-text ext-text"><pre class="language-text"><code>(zero) &gt; module code { export env BAZ { &quot;baz&quot; } }
(zero) &gt; overlay add code
(code) &gt; $env.BAZ
baz
(code) &gt; let-env BAGR = &quot;bagr&quot;
(code) &gt; $env.BAGR
bagr
(code) &gt; overlay remove code
(zero) &gt; # environment back to what we started with
</code></pre></div><p>Just like layers in a paint program, changes you make (like the update to the environment above) are part of the layer. You can use <code>--keep-custom</code> to keep the changes you have made even after you hide the overlay. Using <code>add</code> and <code>remove</code> are effectively like <code>show</code> and <code>hide</code>, allowing you to quickly switch into a new context, do some work, and switch out with little effort.</p><h2 id="hooks-jt" tabindex="-1"><a class="header-anchor" href="#hooks-jt" aria-hidden="true">#</a> Hooks (jt)</h2><p>Starting with 0.63, you can now set up hooks that will run code under certain conditions. These hooks run after your code has finished evaluating.</p><p>Let&#39;s look first at how to set up the hooks, and then see what the hooks output. To set up a hook, you pick the kind of hook and then configure a block of code to run when that hook fires:</p><div class="language-text ext-text"><pre class="language-text"><code>hooks: {
    pre_prompt: [{
        print &quot;pre_prompt hook&quot;
    }]
    pre_execution: [{
        print &quot;pre_execution hook&quot;
    }]
    env_change: {
        PWD: [{|before, after|
            print $&quot;PWD environment variable changed from ($before) to ($after)&quot;
        }]
    }
}
</code></pre></div><p>Using this example, we can watch the hooks fire:</p><div class="language-text ext-text"><pre class="language-text"><code>/home/jt/Source/nushell\u3009cd ..
pre_execution hook
pre_prompt hook
PWD environment variable changed from /home/jt/Source/nushell to /home/jt/Source
/home/jt/Source\u3009
</code></pre></div><p>Used together with the &quot;overlays&quot; feature above, we hope to open up the possibility for a lot of powerful interactions with the shell while still keeping the workflow that makes Nushell special.</p><h2 id="lazy-dataframe-support-elferherrera" tabindex="-1"><a class="header-anchor" href="#lazy-dataframe-support-elferherrera" aria-hidden="true">#</a> Lazy dataframe support (elferherrera)</h2><p>We are starting to support a new way to query dataframes by using lazyframes. This new concept will allow users to build logical plans for the data operations which will result in a reduction of the dataframe processing time.</p><p>Lazy dataframes are accessed through the same <code>dfr</code> command and give you a way to build up a pipeline to execute in a more optimal way than the previous eager dataframes. For example, you can perform your aggregations and group-bys lazily, and then work on the results instead of paying for the processing time of having two separate steps.</p><h1 id="new-commands" tabindex="-1"><a class="header-anchor" href="#new-commands" aria-hidden="true">#</a> New commands</h1><ul><li>(Returned from the engine rewrite) <code>histogram</code> for checking distributions right inside nushell (WindSoilder)</li><li><code>config nu</code> and <code>config env</code> to easily edit your nushell configuration files with your editor of choice (Kangaxx-0/vFrankZhang)</li><li><code>str title-case</code> (krober)<div class="language-text ext-text"><pre class="language-text"><code>&gt; &#39;this is a test case&#39; | str title-case
This Is A Test Case
</code></pre></div></li><li>Many new <code>db</code> subcommands (elferherrera)</li></ul><h1 id="quality-of-life-improvements" tabindex="-1"><a class="header-anchor" href="#quality-of-life-improvements" aria-hidden="true">#</a> Quality-of-life Improvements</h1>`,21),A=e("More commands contain additional search terms to find them if you don't remember their exact name. (victormanueltn, LawlietLi) This is a great way to help out by contributing! More information can be found "),z={href:"https://github.com/nushell/nushell/issues/5093",target:"_blank",rel:"noopener noreferrer"},q=e("here"),T=e("."),F=s(`<li><p><code>print -n</code> option to print output without an additional new-line (fdncred)</p></li><li><p><code>flatten</code> now has a more consistent behavior for nested records and tables. (WindSoilder) This now more closely matches the pre-0.60 flatten, and should help create more predictable output.</p></li><li><p>We now support octal binary literals <code>0o[777]</code> similar to the hexadecimal <code>0x[FF]</code> and binary <code>0b[11111111]</code> literals (toffaletti)</p></li><li><p><code>cd</code> accepts abreviation of paths to quickly jump to nested directories based on unique prefixes (fdncred)</p><div class="language-text ext-text"><pre class="language-text"><code>&gt; $env.PWD
~/some/path
&gt; cd d/s/9
&gt; $env.PWD
~/some/path/deep/space/9
</code></pre></div></li><li><p>Various improvements make the completions feel more polished (herlon214, PurityLake)</p></li><li><p>If <code>$config.buffer_editor</code> is not set rely on the <code>$env.EDITOR</code> and <code>$env.VISUAL</code> environment variables to find a text editor to edit longer pipelines or your <code>config ...</code> (Kangaxx-0/vFrankZhang, sholderbach)</p></li><li><p>When invoking <code>nu</code> to run a script you can now pass the <code>--config</code> flag to load your <code>config.nu</code> and have the definitions available when running the script (WindSoilder)</p></li><li><p>Similarly you can change the table appearance with the <code>--table-mode</code> flag when invoking <code>nu</code> (fdncred)</p></li>`,8),N=s('<p><strong>Note:</strong> this is a shortened list. For the full list, see the &quot;Changelog&quot; section below</p><h1 id="breaking-changes" tabindex="-1"><a class="header-anchor" href="#breaking-changes" aria-hidden="true">#</a> Breaking changes</h1><h2 id="changed-default-keybindings" tabindex="-1"><a class="header-anchor" href="#changed-default-keybindings" aria-hidden="true">#</a> Changed default keybindings:</h2><table><thead><tr><th>Old binding</th><th>New binding</th><th>Action</th><th>Reason for the change</th></tr></thead><tbody><tr><td><code>Ctrl-x</code></td><td><code>Ctrl-r</code></td><td>Visual history search menu</td><td>We replaced the simple history search (previously bound to <code>Ctrl-r</code>, <code>cmd: SearchHistory</code>) with the menu that supports previewing several entries at once for quick navigation</td></tr><tr><td><code>Ctrl-q</code></td><td><code>F1</code></td><td>Interactive help menu</td><td><code>F1</code> is generally the convention for help information, with this menu you can search for commands browse through their documentation and pick examples to include/run</td></tr></tbody></table><h1 id="looking-ahead" tabindex="-1"><a class="header-anchor" href="#looking-ahead" aria-hidden="true">#</a> Looking ahead</h1><p>Here are a few of the things we&#39;re working on:</p><p>SQLite based history. This will maintain a larger number of entries that can searched using date, usage or text.</p><p>Input/output types. These will allow commands to be specialized based on the input they&#39;re given as we well as allow the typechecker to check that commands can connect on the pipeline together.</p><p>And more - we&#39;re still looking ahead to IDE support, better database support, and more.</p><h1 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h1><h2 id="nushell" tabindex="-1"><a class="header-anchor" href="#nushell" aria-hidden="true">#</a> Nushell</h2>',11),C=e("kubouch created "),D={href:"https://github.com/nushell/nushell/pull/5629",target:"_blank",rel:"noopener noreferrer"},I=e("Overlay keep"),S=e(", and "),j={href:"https://github.com/nushell/nushell/pull/5478",target:"_blank",rel:"noopener noreferrer"},L=e("Add Nushell REPL simulator; Fix bug in overlay add"),U=e(", and created "),R={href:"https://github.com/nushell/nushell/pull/5375",target:"_blank",rel:"noopener noreferrer"},W=e("Overlays"),E=e("jt created "),M={href:"https://github.com/nushell/nushell/pull/5627",target:"_blank",rel:"noopener noreferrer"},P=e("Bump to 0.63"),$=e(", and "),B={href:"https://github.com/nushell/nushell/pull/5600",target:"_blank",rel:"noopener noreferrer"},V=e("Add environment change hook"),O=e(", and "),H={href:"https://github.com/nushell/nushell/pull/5561",target:"_blank",rel:"noopener noreferrer"},K=e('Revert "Try to do less work during capture discovery"'),Z=e(", and "),J={href:"https://github.com/nushell/nushell/pull/5560",target:"_blank",rel:"noopener noreferrer"},Y=e("Try to do less work during capture discovery"),G=e(", and "),Q={href:"https://github.com/nushell/nushell/pull/5549",target:"_blank",rel:"noopener noreferrer"},X=e("Try removing debuginfo for ci builds"),ee=e(", and "),te={href:"https://github.com/nushell/nushell/pull/5480",target:"_blank",rel:"noopener noreferrer"},oe=e("Allow hooks to be lists of blocks"),ne=e(", and "),se={href:"https://github.com/nushell/nushell/pull/5479",target:"_blank",rel:"noopener noreferrer"},re=e("Add hooks to cli/repl"),le=e(", and "),he={href:"https://github.com/nushell/nushell/pull/5473",target:"_blank",rel:"noopener noreferrer"},ie=e("Bump to the 0.62.1 dev version"),ae=e("sholderbach created "),de={href:"https://github.com/nushell/nushell/pull/5620",target:"_blank",rel:"noopener noreferrer"},ce=e("Pin reedline v0.6.0 for the nushell v0.63.0 release"),_e=e(", and "),ue={href:"https://github.com/nushell/nushell/pull/5616",target:"_blank",rel:"noopener noreferrer"},pe=e("Add meta command for the config subcommands"),fe=e(", and "),ge={href:"https://github.com/nushell/nushell/pull/5614",target:"_blank",rel:"noopener noreferrer"},be=e("Fallback for "),me=t("code",null,"config.buffer_editor",-1),ke=e(" from "),ye=t("code",null,"EDITOR",-1),ve=e(", and "),we={href:"https://github.com/nushell/nushell/pull/5599",target:"_blank",rel:"noopener noreferrer"},xe=e("Refer to the span of "),Ae=t("code",null,"error make",-1),ze=e(" if not given"),qe=e(", and "),Te={href:"https://github.com/nushell/nushell/pull/5598",target:"_blank",rel:"noopener noreferrer"},Fe=e("Use bleeding edge reedline, with fix for #5593"),Ne=e(", and "),Ce={href:"https://github.com/nushell/nushell/pull/5588",target:"_blank",rel:"noopener noreferrer"},De=e("Change miette theme based on ANSI config"),Ie=e(", and "),Se={href:"https://github.com/nushell/nushell/pull/5587",target:"_blank",rel:"noopener noreferrer"},je=e("Use effectively unlimited history size if not set"),Le=e(", and "),Ue={href:"https://github.com/nushell/nushell/pull/5510",target:"_blank",rel:"noopener noreferrer"},Re=e("Move help menu to canonical "),We=t("code",null,"F1",-1),Ee=e(" binding"),Me=e("WindSoilder created "),Pe={href:"https://github.com/nushell/nushell/pull/5619",target:"_blank",rel:"noopener noreferrer"},$e=e("fix date format"),Be=e(", and "),Ve={href:"https://github.com/nushell/nushell/pull/5618",target:"_blank",rel:"noopener noreferrer"},Oe=e("load config when requried"),He=e(", and "),Ke={href:"https://github.com/nushell/nushell/pull/5611",target:"_blank",rel:"noopener noreferrer"},Ze=e("Make flatten works better and predictable"),Je=e(", and "),Ye={href:"https://github.com/nushell/nushell/pull/5606",target:"_blank",rel:"noopener noreferrer"},Ge=e("adjust flatten default behavior"),Qe=e(", and "),Xe={href:"https://github.com/nushell/nushell/pull/5590",target:"_blank",rel:"noopener noreferrer"},et=e("Don't report error when cwd is not exists."),tt=e(", and "),ot={href:"https://github.com/nushell/nushell/pull/5584",target:"_blank",rel:"noopener noreferrer"},nt=e("Fix flatten behavior"),st=e(", and "),rt={href:"https://github.com/nushell/nushell/pull/5583",target:"_blank",rel:"noopener noreferrer"},lt=e("add quantile column in histogram "),ht=e(", and "),it={href:"https://github.com/nushell/nushell/pull/5577",target:"_blank",rel:"noopener noreferrer"},at=e("fix select tests"),dt=e(", and "),ct={href:"https://github.com/nushell/nushell/pull/5576",target:"_blank",rel:"noopener noreferrer"},_t=e("fix move test"),ut=e(", and "),pt={href:"https://github.com/nushell/nushell/pull/5570",target:"_blank",rel:"noopener noreferrer"},ft=e("Make format support nested column and use variable"),gt=e(", and "),bt={href:"https://github.com/nushell/nushell/pull/5553",target:"_blank",rel:"noopener noreferrer"},mt=e("use reverse iter on value search"),kt=e(", and "),yt={href:"https://github.com/nushell/nushell/pull/5541",target:"_blank",rel:"noopener noreferrer"},vt=e("Fix Value::Record compare logic, and pass uniq tests."),wt=e(", and "),xt={href:"https://github.com/nushell/nushell/pull/5536",target:"_blank",rel:"noopener noreferrer"},At=e("fix zip test"),zt=e(", and "),qt={href:"https://github.com/nushell/nushell/pull/5534",target:"_blank",rel:"noopener noreferrer"},Tt=e("add rename"),Ft=e(", and "),Nt={href:"https://github.com/nushell/nushell/pull/5518",target:"_blank",rel:"noopener noreferrer"},Ct=e("Implement histogram command"),Dt=e(", and "),It={href:"https://github.com/nushell/nushell/pull/5502",target:"_blank",rel:"noopener noreferrer"},St=e("keep metadata while format filesize"),jt=e(", and "),Lt={href:"https://github.com/nushell/nushell/pull/5498",target:"_blank",rel:"noopener noreferrer"},Ut=e("add format filesize"),Rt=e(", and "),Wt={href:"https://github.com/nushell/nushell/pull/5464",target:"_blank",rel:"noopener noreferrer"},Et=e("complete some commands tests"),Mt=e(", and "),Pt={href:"https://github.com/nushell/nushell/pull/5461",target:"_blank",rel:"noopener noreferrer"},$t=e("Document out positional argument type in help message"),Bt=e(", and created "),Vt={href:"https://github.com/nushell/nushell/pull/5454",target:"_blank",rel:"noopener noreferrer"},Ot=e("make cd recornize symblic link"),Ht=e(", and "),Kt={href:"https://github.com/nushell/nushell/pull/5453",target:"_blank",rel:"noopener noreferrer"},Zt=e("implement seq char command to generate single character sequence"),Jt=e("hustcer created "),Yt={href:"https://github.com/nushell/nushell/pull/5610",target:"_blank",rel:"noopener noreferrer"},Gt=e("fix typo for "),Qt=t("code",null,"version",-1),Xt=e(" command"),eo=e(", and "),to={href:"https://github.com/nushell/nushell/pull/5594",target:"_blank",rel:"noopener noreferrer"},oo=e("Fix #5578, assume pipe file be zero-sized"),no=e(", and "),so={href:"https://github.com/nushell/nushell/pull/5511",target:"_blank",rel:"noopener noreferrer"},ro=e("feat: add "),lo=t("code",null,"tutor list",-1),ho=e(" support, remove tutor "),io=t("code",null,"engine-q",-1),ao=e(", fix: #4950"),co=e(", and "),_o={href:"https://github.com/nushell/nushell/pull/5501",target:"_blank",rel:"noopener noreferrer"},uo=e("Fix #3899, make "),po=t("code",null,"mv",-1),fo=e(" and "),go=t("code",null,"rm",-1),bo=e(" to be quiet by default"),mo=e(", and "),ko={href:"https://github.com/nushell/nushell/pull/5500",target:"_blank",rel:"noopener noreferrer"},yo=e("opt: improve ls by call get_file_type only one time"),vo=e(", and "),wo={href:"https://github.com/nushell/nushell/pull/5494",target:"_blank",rel:"noopener noreferrer"},xo=e("Improve #4975 of filtering "),Ao=t("code",null,"ls",-1),zo=e(" output by size issue"),qo=e(", and "),To={href:"https://github.com/nushell/nushell/pull/5485",target:"_blank",rel:"noopener noreferrer"},Fo=e("Fix #5469, making $nothing or null convert to filesize of 0B"),No=e(", and "),Co={href:"https://github.com/nushell/nushell/pull/5483",target:"_blank",rel:"noopener noreferrer"},Do=e("Fix "),Io=t("code",null,"to csv",-1),So=e(" and "),jo=t("code",null,"to tsv",-1),Lo=e(" for simple list, close: #4780"),Uo=e(", and "),Ro={href:"https://github.com/nushell/nushell/pull/5467",target:"_blank",rel:"noopener noreferrer"},Wo=e("feat: add disable field type inferencing for "),Eo=t("code",null,"from csv",-1),Mo=e(" and "),Po=t("code",null,"from tsv",-1),$o=e(", fix: #3485 and #4217"),Bo=e("merelymyself created "),Vo={href:"https://github.com/nushell/nushell/pull/5609",target:"_blank",rel:"noopener noreferrer"},Oo=e("Allow for test_iteration_errors to work when run as root"),Ho=e(", and "),Ko={href:"https://github.com/nushell/nushell/pull/5601",target:"_blank",rel:"noopener noreferrer"},Zo=e("Allows the test "),Jo=t("code",null,"commands::ls::fails_with_ls_to_dir_without_permission",-1),Yo=e(" to work when run as root"),Go=e(", and "),Qo={href:"https://github.com/nushell/nushell/pull/5579",target:"_blank",rel:"noopener noreferrer"},Xo=e("Allowing for flags with '=' in them to register as flags."),en=e(", and "),tn={href:"https://github.com/nushell/nushell/pull/5493",target:"_blank",rel:"noopener noreferrer"},on=e("Adds fix for when multiple flags are in one line."),nn=e(", and created "),sn={href:"https://github.com/nushell/nushell/pull/5447",target:"_blank",rel:"noopener noreferrer"},rn=e("Fixing the flag issue"),ln=e(", and "),hn={href:"https://github.com/nushell/nushell/pull/5446",target:"_blank",rel:"noopener noreferrer"},an=e("Adds flags and optional arguments to view-source"),dn=e("Kangaxx-0 created "),cn={href:"https://github.com/nushell/nushell/pull/5607",target:"_blank",rel:"noopener noreferrer"},_n=e("Add config command"),un=e(", and "),pn={href:"https://github.com/nushell/nushell/pull/5512",target:"_blank",rel:"noopener noreferrer"},fn=e("Add verbose"),gn=e(", and "),bn={href:"https://github.com/nushell/nushell/pull/5482",target:"_blank",rel:"noopener noreferrer"},mn=e("Add feedback to cp"),kn=e("toffaletti created "),yn={href:"https://github.com/nushell/nushell/pull/5604",target:"_blank",rel:"noopener noreferrer"},vn=e("Add octal binary literals"),wn=e("victormanueltn created "),xn={href:"https://github.com/nushell/nushell/pull/5603",target:"_blank",rel:"noopener noreferrer"},An=e("Add search term to str substring command."),zn=e(", and "),qn={href:"https://github.com/nushell/nushell/pull/5557",target:"_blank",rel:"noopener noreferrer"},Tn=e("Add search terms to build-string command."),Fn=e("LawlietLi created "),Nn={href:"https://github.com/nushell/nushell/pull/5602",target:"_blank",rel:"noopener noreferrer"},Cn=e("feat: add search terms to network"),Dn=e("IanManske created "),In={href:"https://github.com/nushell/nushell/pull/5581",target:"_blank",rel:"noopener noreferrer"},Sn=e("Fix help menu panic."),jn=e("jaeheonji created "),Ln={href:"https://github.com/nushell/nushell/pull/5575",target:"_blank",rel:"noopener noreferrer"},Un=e("feat: apply the "),Rn=t("code",null,"--numbered",-1),Wn=e(" option to acc in "),En=t("code",null,"reduce",-1),Mn=e(" command."),Pn=e("krober created "),$n={href:"https://github.com/nushell/nushell/pull/5573",target:"_blank",rel:"noopener noreferrer"},Bn=e("Add str title-case"),Vn=e(", and "),On={href:"https://github.com/nushell/nushell/pull/5572",target:"_blank",rel:"noopener noreferrer"},Hn=e("Str casings reorganization & description updates"),Kn=e("fdncred created "),Zn={href:"https://github.com/nushell/nushell/pull/5569",target:"_blank",rel:"noopener noreferrer"},Jn=e("move items to showcase"),Yn=e(", and "),Gn={href:"https://github.com/nushell/nushell/pull/5567",target:"_blank",rel:"noopener noreferrer"},Qn=e("refactor all write_alls to ensure flushing"),Xn=e(", and "),es={href:"https://github.com/nushell/nushell/pull/5566",target:"_blank",rel:"noopener noreferrer"},ts=e("make print flush"),os=e(", and "),ns={href:"https://github.com/nushell/nushell/pull/5555",target:"_blank",rel:"noopener noreferrer"},ss=e("table refactor for readability"),rs=e(", and "),ls={href:"https://github.com/nushell/nushell/pull/5520",target:"_blank",rel:"noopener noreferrer"},hs=e("add the ability to change table mode when running script"),is=e(", and "),as={href:"https://github.com/nushell/nushell/pull/5513",target:"_blank",rel:"noopener noreferrer"},ds=e("add "),cs=t("code",null,"--table_mode",-1),_s=e(),us=t("code",null,"-m",-1),ps=e(" parameter"),fs=e(", and "),gs={href:"https://github.com/nushell/nushell/pull/5503",target:"_blank",rel:"noopener noreferrer"},bs=e("refactor for legibility"),ms=e(", and "),ks={href:"https://github.com/nushell/nushell/pull/5491",target:"_blank",rel:"noopener noreferrer"},ys=e("adjust where prompt markers go"),vs=e(", and "),ws={href:"https://github.com/nushell/nushell/pull/5458",target:"_blank",rel:"noopener noreferrer"},xs=e("add -n flag to print to print without a newline"),As=e(", and "),zs={href:"https://github.com/nushell/nushell/pull/5452",target:"_blank",rel:"noopener noreferrer"},qs=e("enable cd to work with directory abbreviations"),Ts=e(", and "),Fs={href:"https://github.com/nushell/nushell/pull/5450",target:"_blank",rel:"noopener noreferrer"},Ns=e("fix bug in shell_integration"),Cs=e("rgwood created "),Ds={href:"https://github.com/nushell/nushell/pull/5568",target:"_blank",rel:"noopener noreferrer"},Is=e('Revert "Enable backtraces by default (#5562)"'),Ss=e(", and "),js={href:"https://github.com/nushell/nushell/pull/5563",target:"_blank",rel:"noopener noreferrer"},Ls=e("Upgrade trash dependency"),Us=e(", and "),Rs={href:"https://github.com/nushell/nushell/pull/5562",target:"_blank",rel:"noopener noreferrer"},Ws=e("Enable backtraces by default"),Es=e(", and "),Ms={href:"https://github.com/nushell/nushell/pull/5556",target:"_blank",rel:"noopener noreferrer"},Ps=e("Remove doctests CI action"),$s=e(", and "),Bs={href:"https://github.com/nushell/nushell/pull/5550",target:"_blank",rel:"noopener noreferrer"},Vs=e("CI: bust caches"),Os=e(", and "),Hs={href:"https://github.com/nushell/nushell/pull/5548",target:"_blank",rel:"noopener noreferrer"},Ks=e("Look up git commit hash ourselves, drop libgit2 dependency"),Zs=e(", and "),Js={href:"https://github.com/nushell/nushell/pull/5527",target:"_blank",rel:"noopener noreferrer"},Ys=e("More CI work"),Gs=e(", and "),Qs={href:"https://github.com/nushell/nushell/pull/5507",target:"_blank",rel:"noopener noreferrer"},Xs=e("Change history menu keybinding from ctrl+x to ctrl+r"),er=e(", and "),tr={href:"https://github.com/nushell/nushell/pull/5489",target:"_blank",rel:"noopener noreferrer"},or=e("Enable converting dates to ints"),nr=e(", and "),sr={href:"https://github.com/nushell/nushell/pull/5488",target:"_blank",rel:"noopener noreferrer"},rr=e("Parse timestamps as UTC by default"),lr=e(", and "),hr={href:"https://github.com/nushell/nushell/pull/5487",target:"_blank",rel:"noopener noreferrer"},ir=e("Display range values better"),ar=e(", and "),dr={href:"https://github.com/nushell/nushell/pull/5484",target:"_blank",rel:"noopener noreferrer"},cr=e("Handle int input in "),_r=t("code",null,"into datetime",-1),ur=e(", and "),pr={href:"https://github.com/nushell/nushell/pull/5463",target:"_blank",rel:"noopener noreferrer"},fr=e("Enable string interpolation for environment shorthand"),gr=e("efugier created "),br={href:"https://github.com/nushell/nushell/pull/5564",target:"_blank",rel:"noopener noreferrer"},mr=e("feat(errors): more explicit module_or_overlay_not_found_error help me\u2026"),kr=e("ocitrev created "),yr={href:"https://github.com/nushell/nushell/pull/5554",target:"_blank",rel:"noopener noreferrer"},vr=e("Sync resources version"),wr=e("elferherrera created "),xr={href:"https://github.com/nushell/nushell/pull/5546",target:"_blank",rel:"noopener noreferrer"},Ar=e("Lazy dataframes"),zr=e(", and "),qr={href:"https://github.com/nushell/nushell/pull/5477",target:"_blank",rel:"noopener noreferrer"},Tr=e("join and from derived tables"),Fr=e(", and "),Nr={href:"https://github.com/nushell/nushell/pull/5466",target:"_blank",rel:"noopener noreferrer"},Cr=e("Database commands"),Dr=e("herlon214 created "),Ir={href:"https://github.com/nushell/nushell/pull/5543",target:"_blank",rel:"noopener noreferrer"},Sr=e("nu-cli/completions: add custom completion test"),jr=e(", and "),Lr={href:"https://github.com/nushell/nushell/pull/5537",target:"_blank",rel:"noopener noreferrer"},Ur=e("nu-glob: add fs::symlink_metadata to detect broken symlinks"),Rr=e(", and "),Wr={href:"https://github.com/nushell/nushell/pull/5524",target:"_blank",rel:"noopener noreferrer"},Er=e("nu-command/filesystem: fix rm .sock file"),Mr=e(", and "),Pr={href:"https://github.com/nushell/nushell/pull/5506",target:"_blank",rel:"noopener noreferrer"},$r=e("nu-cli/completions: verify case for matching dir, .nu, file and command"),Br=e(", and "),Vr={href:"https://github.com/nushell/nushell/pull/5504",target:"_blank",rel:"noopener noreferrer"},Or=e("nu-cli/completions: add variable completions test + refactor tests"),Hr=e(", and "),Kr={href:"https://github.com/nushell/nushell/pull/5468",target:"_blank",rel:"noopener noreferrer"},Zr=e("nu-cli/completions: add tests for flag completions"),Jr=e(", and "),Yr={href:"https://github.com/nushell/nushell/pull/5460",target:"_blank",rel:"noopener noreferrer"},Gr=e("nu-cli/completions: add tests for dotnu completions"),Qr=e(", and "),Xr={href:"https://github.com/nushell/nushell/pull/5459",target:"_blank",rel:"noopener noreferrer"},el=e("nu-cli/completions: send original line to custom completer"),tl=e("njbull4 created "),ol={href:"https://github.com/nushell/nushell/pull/5523",target:"_blank",rel:"noopener noreferrer"},nl=e("cp, mv, and rm commands need to support -i flag"),sl=e("CozyPenguin created "),rl={href:"https://github.com/nushell/nushell/pull/5514",target:"_blank",rel:"noopener noreferrer"},ll=e("bump umask crate to 2.0.0"),hl=e("jmoore34 created "),il={href:"https://github.com/nushell/nushell/pull/5496",target:"_blank",rel:"noopener noreferrer"},al=e("Update comment in default_config.nu [skip ci]"),dl=e("pejato created "),cl={href:"https://github.com/nushell/nushell/pull/5490",target:"_blank",rel:"noopener noreferrer"},_l=e('Make $nothing | into string == ""'),ul=e("onthebridgetonowhere created "),pl={href:"https://github.com/nushell/nushell/pull/5462",target:"_blank",rel:"noopener noreferrer"},fl=e("Fix cp bug"),gl=e("PurityLake created "),bl={href:"https://github.com/nushell/nushell/pull/5440",target:"_blank",rel:"noopener noreferrer"},ml=e("Made a change to completion resolution order"),kl=e("gipsyh created "),yl={href:"https://github.com/nushell/nushell/pull/5434",target:"_blank",rel:"noopener noreferrer"},vl=e("Add split number flag in "),wl=t("code",null,"split row",-1),xl=t("h2",{id:"documentation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#documentation","aria-hidden":"true"},"#"),e(" Documentation")],-1),Al=e("sholderbach created "),zl={href:"https://github.com/nushell/nushell.github.io/pull/446",target:"_blank",rel:"noopener noreferrer"},ql=e("Remove outdated reference to "),Tl=t("code",null,"open",-1),Fl=e(" pager"),Nl=e(", and "),Cl={href:"https://github.com/nushell/nushell.github.io/pull/445",target:"_blank",rel:"noopener noreferrer"},Dl=e("Document the octal binary literals"),Il=e(", and "),Sl={href:"https://github.com/nushell/nushell.github.io/pull/434",target:"_blank",rel:"noopener noreferrer"},jl=e("Mention default values for command parameters."),Ll=e("unional created "),Ul={href:"https://github.com/nushell/nushell.github.io/pull/444",target:"_blank",rel:"noopener noreferrer"},Rl=e("docs: add "),Wl=t("code",null,"pwd",-1),El=e(" to "),Ml=t("code",null,"coming_from_bash.md",-1),Pl=e("hustcer created "),$l={href:"https://github.com/nushell/nushell.github.io/pull/443",target:"_blank",rel:"noopener noreferrer"},Bl=e("Update zh-CN home page and keep the Chinese and English docs in sync"),Vl=e(", and "),Ol={href:"https://github.com/nushell/nushell.github.io/pull/442",target:"_blank",rel:"noopener noreferrer"},Hl=e("Update some zh-CN translations from commit: 008c89fc26"),Kl=e(", and "),Zl={href:"https://github.com/nushell/nushell.github.io/pull/438",target:"_blank",rel:"noopener noreferrer"},Jl=e("Update some zh-CN translatons from commit: 6f61fadb69"),Yl=e("rgwood created "),Gl={href:"https://github.com/nushell/nushell.github.io/pull/441",target:"_blank",rel:"noopener noreferrer"},Ql=e("Update front page"),Xl=e("mdmundo created "),eh={href:"https://github.com/nushell/nushell.github.io/pull/440",target:"_blank",rel:"noopener noreferrer"},th=e("Update windows_terminal_default_shell.sh"),oh=e("kubouch created "),nh={href:"https://github.com/nushell/nushell.github.io/pull/439",target:"_blank",rel:"noopener noreferrer"},sh=e("Add env.nu to env conversions section"),rh=e(", and "),lh={href:"https://github.com/nushell/nushell.github.io/pull/437",target:"_blank",rel:"noopener noreferrer"},hh=e("Document config as environment variable"),ih=e("TaKO8Ki created "),ah={href:"https://github.com/nushell/nushell.github.io/pull/436",target:"_blank",rel:"noopener noreferrer"},dh=e("Translate "),ch=t("code",null,"/ja/README.md",-1),_h=e(" to Japanese"),uh=e("flying-sheep created "),ph={href:"https://github.com/nushell/nushell.github.io/pull/435",target:"_blank",rel:"noopener noreferrer"},fh=e("Document $in"),gh=t("h2",{id:"nu-scripts",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#nu-scripts","aria-hidden":"true"},"#"),e(" Nu_Scripts")],-1),bh=e("thibran created "),mh={href:"https://github.com/nushell/nu_scripts/pull/229",target:"_blank",rel:"noopener noreferrer"},kh=e("Misc tools"),yh=e("Suyashtnt created "),vh={href:"https://github.com/nushell/nu_scripts/pull/228",target:"_blank",rel:"noopener noreferrer"},wh=e("feat(custom-completions): add yarn completion"),xh=e("jntrnr created "),Ah={href:"https://github.com/nushell/nu_scripts/pull/227",target:"_blank",rel:"noopener noreferrer"},zh=e("update nu weekly script"),qh=e("fdncred created "),Th={href:"https://github.com/nushell/nu_scripts/pull/226",target:"_blank",rel:"noopener noreferrer"},Fh=e("add html colors"),Nh=e(", and "),Ch={href:"https://github.com/nushell/nu_scripts/pull/224",target:"_blank",rel:"noopener noreferrer"},Dh=e("add progress bar examples + some benchmarks"),Ih=e(", and "),Sh={href:"https://github.com/nushell/nu_scripts/pull/220",target:"_blank",rel:"noopener noreferrer"},jh=e("help with pr"),Lh=e(", and "),Uh={href:"https://github.com/nushell/nu_scripts/pull/215",target:"_blank",rel:"noopener noreferrer"},Rh=e("remove title because it breaks kitty"),Wh=e("Yethal created "),Eh={href:"https://github.com/nushell/nu_scripts/pull/225",target:"_blank",rel:"noopener noreferrer"},Mh=e("Update remoting.nu"),Ph=e(", and "),$h={href:"https://github.com/nushell/nu_scripts/pull/222",target:"_blank",rel:"noopener noreferrer"},Bh=e("Added remoting.nu"),Vh=e("Jacobious52 created "),Oh={href:"https://github.com/nushell/nu_scripts/pull/223",target:"_blank",rel:"noopener noreferrer"},Hh=e("Auto generation completion help parser"),Kh=e("kurokirasama created "),Zh={href:"https://github.com/nushell/nu_scripts/pull/217",target:"_blank",rel:"noopener noreferrer"},Jh=e("added maths, defs and weather scripts"),Yh=e("drbrain created "),Gh={href:"https://github.com/nushell/nu_scripts/pull/216",target:"_blank",rel:"noopener noreferrer"},Qh=e("Allow relative entries in CDPATH"),Xh=t("h2",{id:"reedline",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#reedline","aria-hidden":"true"},"#"),e(" reedline")],-1),ei=e("sholderbach created "),ti={href:"https://github.com/nushell/reedline/pull/430",target:"_blank",rel:"noopener noreferrer"},oi=e("Prepare the v0.6.0 release"),ni=e(", and "),si={href:"https://github.com/nushell/reedline/pull/427",target:"_blank",rel:"noopener noreferrer"},ri=e("Do not allocate eagerly for full history capacity"),li=e(", and "),hi={href:"https://github.com/nushell/reedline/pull/424",target:"_blank",rel:"noopener noreferrer"},ii=e("Start developer documentation"),ai=e("petrisch created "),di={href:"https://github.com/nushell/reedline/pull/429",target:"_blank",rel:"noopener noreferrer"},ci=e("Typo"),_i=e("ahkrr created "),ui={href:"https://github.com/nushell/reedline/pull/428",target:"_blank",rel:"noopener noreferrer"},pi=e("fix: list_menu not accounting for index + indicator"),fi=e("sadmac7000 created "),gi={href:"https://github.com/nushell/reedline/pull/425",target:"_blank",rel:"noopener noreferrer"},bi=e("Fix vi-mode word motions"),mi=e("DhruvDh created "),ki={href:"https://github.com/nushell/reedline/pull/402",target:"_blank",rel:"noopener noreferrer"},yi=e("Use a default terminal size if reported terminal size is 0, 0");function vi(wi,xi){const o=l("ExternalLinkIcon");return h(),i("div",null,[d,c,_,u,t("p",null,[p,t("a",f,[g,n(o)]),b,t("a",m,[k,n(o)]),y,v,w]),x,t("ul",null,[t("li",null,[t("p",null,[A,t("a",z,[q,n(o)]),T])]),F]),N,t("ul",null,[t("li",null,[C,t("a",D,[I,n(o)]),S,t("a",j,[L,n(o)]),U,t("a",R,[W,n(o)])]),t("li",null,[E,t("a",M,[P,n(o)]),$,t("a",B,[V,n(o)]),O,t("a",H,[K,n(o)]),Z,t("a",J,[Y,n(o)]),G,t("a",Q,[X,n(o)]),ee,t("a",te,[oe,n(o)]),ne,t("a",se,[re,n(o)]),le,t("a",he,[ie,n(o)])]),t("li",null,[ae,t("a",de,[ce,n(o)]),_e,t("a",ue,[pe,n(o)]),fe,t("a",ge,[be,me,ke,ye,n(o)]),ve,t("a",we,[xe,Ae,ze,n(o)]),qe,t("a",Te,[Fe,n(o)]),Ne,t("a",Ce,[De,n(o)]),Ie,t("a",Se,[je,n(o)]),Le,t("a",Ue,[Re,We,Ee,n(o)])]),t("li",null,[Me,t("a",Pe,[$e,n(o)]),Be,t("a",Ve,[Oe,n(o)]),He,t("a",Ke,[Ze,n(o)]),Je,t("a",Ye,[Ge,n(o)]),Qe,t("a",Xe,[et,n(o)]),tt,t("a",ot,[nt,n(o)]),st,t("a",rt,[lt,n(o)]),ht,t("a",it,[at,n(o)]),dt,t("a",ct,[_t,n(o)]),ut,t("a",pt,[ft,n(o)]),gt,t("a",bt,[mt,n(o)]),kt,t("a",yt,[vt,n(o)]),wt,t("a",xt,[At,n(o)]),zt,t("a",qt,[Tt,n(o)]),Ft,t("a",Nt,[Ct,n(o)]),Dt,t("a",It,[St,n(o)]),jt,t("a",Lt,[Ut,n(o)]),Rt,t("a",Wt,[Et,n(o)]),Mt,t("a",Pt,[$t,n(o)]),Bt,t("a",Vt,[Ot,n(o)]),Ht,t("a",Kt,[Zt,n(o)])]),t("li",null,[Jt,t("a",Yt,[Gt,Qt,Xt,n(o)]),eo,t("a",to,[oo,n(o)]),no,t("a",so,[ro,lo,ho,io,ao,n(o)]),co,t("a",_o,[uo,po,fo,go,bo,n(o)]),mo,t("a",ko,[yo,n(o)]),vo,t("a",wo,[xo,Ao,zo,n(o)]),qo,t("a",To,[Fo,n(o)]),No,t("a",Co,[Do,Io,So,jo,Lo,n(o)]),Uo,t("a",Ro,[Wo,Eo,Mo,Po,$o,n(o)])]),t("li",null,[Bo,t("a",Vo,[Oo,n(o)]),Ho,t("a",Ko,[Zo,Jo,Yo,n(o)]),Go,t("a",Qo,[Xo,n(o)]),en,t("a",tn,[on,n(o)]),nn,t("a",sn,[rn,n(o)]),ln,t("a",hn,[an,n(o)])]),t("li",null,[dn,t("a",cn,[_n,n(o)]),un,t("a",pn,[fn,n(o)]),gn,t("a",bn,[mn,n(o)])]),t("li",null,[kn,t("a",yn,[vn,n(o)])]),t("li",null,[wn,t("a",xn,[An,n(o)]),zn,t("a",qn,[Tn,n(o)])]),t("li",null,[Fn,t("a",Nn,[Cn,n(o)])]),t("li",null,[Dn,t("a",In,[Sn,n(o)])]),t("li",null,[jn,t("a",Ln,[Un,Rn,Wn,En,Mn,n(o)])]),t("li",null,[Pn,t("a",$n,[Bn,n(o)]),Vn,t("a",On,[Hn,n(o)])]),t("li",null,[Kn,t("a",Zn,[Jn,n(o)]),Yn,t("a",Gn,[Qn,n(o)]),Xn,t("a",es,[ts,n(o)]),os,t("a",ns,[ss,n(o)]),rs,t("a",ls,[hs,n(o)]),is,t("a",as,[ds,cs,_s,us,ps,n(o)]),fs,t("a",gs,[bs,n(o)]),ms,t("a",ks,[ys,n(o)]),vs,t("a",ws,[xs,n(o)]),As,t("a",zs,[qs,n(o)]),Ts,t("a",Fs,[Ns,n(o)])]),t("li",null,[Cs,t("a",Ds,[Is,n(o)]),Ss,t("a",js,[Ls,n(o)]),Us,t("a",Rs,[Ws,n(o)]),Es,t("a",Ms,[Ps,n(o)]),$s,t("a",Bs,[Vs,n(o)]),Os,t("a",Hs,[Ks,n(o)]),Zs,t("a",Js,[Ys,n(o)]),Gs,t("a",Qs,[Xs,n(o)]),er,t("a",tr,[or,n(o)]),nr,t("a",sr,[rr,n(o)]),lr,t("a",hr,[ir,n(o)]),ar,t("a",dr,[cr,_r,n(o)]),ur,t("a",pr,[fr,n(o)])]),t("li",null,[gr,t("a",br,[mr,n(o)])]),t("li",null,[kr,t("a",yr,[vr,n(o)])]),t("li",null,[wr,t("a",xr,[Ar,n(o)]),zr,t("a",qr,[Tr,n(o)]),Fr,t("a",Nr,[Cr,n(o)])]),t("li",null,[Dr,t("a",Ir,[Sr,n(o)]),jr,t("a",Lr,[Ur,n(o)]),Rr,t("a",Wr,[Er,n(o)]),Mr,t("a",Pr,[$r,n(o)]),Br,t("a",Vr,[Or,n(o)]),Hr,t("a",Kr,[Zr,n(o)]),Jr,t("a",Yr,[Gr,n(o)]),Qr,t("a",Xr,[el,n(o)])]),t("li",null,[tl,t("a",ol,[nl,n(o)])]),t("li",null,[sl,t("a",rl,[ll,n(o)])]),t("li",null,[hl,t("a",il,[al,n(o)])]),t("li",null,[dl,t("a",cl,[_l,n(o)])]),t("li",null,[ul,t("a",pl,[fl,n(o)])]),t("li",null,[gl,t("a",bl,[ml,n(o)])]),t("li",null,[kl,t("a",yl,[vl,wl,n(o)])])]),xl,t("ul",null,[t("li",null,[Al,t("a",zl,[ql,Tl,Fl,n(o)]),Nl,t("a",Cl,[Dl,n(o)]),Il,t("a",Sl,[jl,n(o)])]),t("li",null,[Ll,t("a",Ul,[Rl,Wl,El,Ml,n(o)])]),t("li",null,[Pl,t("a",$l,[Bl,n(o)]),Vl,t("a",Ol,[Hl,n(o)]),Kl,t("a",Zl,[Jl,n(o)])]),t("li",null,[Yl,t("a",Gl,[Ql,n(o)])]),t("li",null,[Xl,t("a",eh,[th,n(o)])]),t("li",null,[oh,t("a",nh,[sh,n(o)]),rh,t("a",lh,[hh,n(o)])]),t("li",null,[ih,t("a",ah,[dh,ch,_h,n(o)])]),t("li",null,[uh,t("a",ph,[fh,n(o)])])]),gh,t("ul",null,[t("li",null,[bh,t("a",mh,[kh,n(o)])]),t("li",null,[yh,t("a",vh,[wh,n(o)])]),t("li",null,[xh,t("a",Ah,[zh,n(o)])]),t("li",null,[qh,t("a",Th,[Fh,n(o)]),Nh,t("a",Ch,[Dh,n(o)]),Ih,t("a",Sh,[jh,n(o)]),Lh,t("a",Uh,[Rh,n(o)])]),t("li",null,[Wh,t("a",Eh,[Mh,n(o)]),Ph,t("a",$h,[Bh,n(o)])]),t("li",null,[Vh,t("a",Oh,[Hh,n(o)])]),t("li",null,[Kh,t("a",Zh,[Jh,n(o)])]),t("li",null,[Yh,t("a",Gh,[Qh,n(o)])])]),Xh,t("ul",null,[t("li",null,[ei,t("a",ti,[oi,n(o)]),ni,t("a",si,[ri,n(o)]),li,t("a",hi,[ii,n(o)])]),t("li",null,[ai,t("a",di,[ci,n(o)])]),t("li",null,[_i,t("a",ui,[pi,n(o)])]),t("li",null,[fi,t("a",gi,[bi,n(o)])]),t("li",null,[mi,t("a",ki,[yi,n(o)])])])])}var zi=r(a,[["render",vi],["__file","2022-05-24-nushell_0_63.html.vue"]]);export{zi as default};
