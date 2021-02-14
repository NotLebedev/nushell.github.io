(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{544:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"pipelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipelines"}},[e._v("#")]),e._v(" Pipelines")]),e._v(" "),a("p",[e._v("One of the core designs of Nu is the pipeline, a design idea that tracks its roots back decades to some of the original philosophy behind Unix. Just as Nu extends from the single string data type of Unix, Nu also extends the idea of the pipeline to include more than just text.")]),e._v(" "),a("h2",{attrs:{id:"basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),a("p",[e._v("A pipeline is constructed with three parts: the input, the filter, and the output.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('> open "Cargo.toml" | inc package.version | save "Cargo_new.toml"\n')])])]),a("p",[e._v("The first command, "),a("code",[e._v('open "Cargo.toml"')]),e._v(', is an input (sometimes also called a "source" or "producer"). This creates or loads data and feeds it into a pipeline. It\'s from input that pipelines have values to work with.  Commands like '),a("code",[e._v("ls")]),e._v(" are also inputs, as they take data from the filesystem and send it through the pipelines so that it can be used.")]),e._v(" "),a("p",[e._v("The second command, "),a("code",[e._v("inc package.version")]),e._v(", is a filter. Filters take the data they are given and often do something with it. They may change it (as with the "),a("code",[e._v("inc")]),e._v(" command in our example), or they may do another operation, like logging, as the values pass through.")]),e._v(" "),a("p",[e._v("The last command, "),a("code",[e._v('save "Cargo_new.toml"')]),e._v(', is an output (sometimes called a "sink"). An output takes input from the pipeline and does some final operation on it. In our example, we save what comes through the pipeline to a file as the final step. Other types of output commands may take the values and view them for the user.')]),e._v(" "),a("h2",{attrs:{id:"working-with-external-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-external-commands"}},[e._v("#")]),e._v(" Working with external commands")]),e._v(" "),a("p",[e._v("Nu commands communicate with each other using the Nu data types (see "),a("RouterLink",{attrs:{to:"/book/types_of_data.html"}},[e._v("types of data")]),e._v("), but what about commands outside of Nu?  Let's look at some examples of working with external commands:")],1),e._v(" "),a("p",[a("code",[e._v("internal_command | external_command")])]),e._v(" "),a("p",[e._v("Data will flow from the internal_command to the external_command. This data is expected to be strings, so that they can be sent to the "),a("code",[e._v("stdin")]),e._v(" of the external_command.")]),e._v(" "),a("p",[a("code",[e._v("external_command | internal_command")])]),e._v(" "),a("p",[e._v("Data coming from an external command into Nu will collect into a single string, and then will be passed into internal_command. Commands like "),a("code",[e._v("lines")]),e._v(" help make it easier to bring in data from external commands in such a way that it's easier to work with.")]),e._v(" "),a("p",[a("code",[e._v("external_command_1 | external_command_2")])]),e._v(" "),a("p",[e._v("Nu works with data piped between two external commands in the same way as other shells, like Bash would. The "),a("code",[e._v("stdout")]),e._v(" of external_command_1 is connected to the "),a("code",[e._v("stdin")]),e._v(" of external_command_2. This lets data flow naturally between the two commands.")]),e._v(" "),a("h2",{attrs:{id:"behind-the-scenes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#behind-the-scenes"}},[e._v("#")]),e._v(" Behind the scenes")]),e._v(" "),a("p",[e._v("You may have wondered how we see a table if "),a("code",[e._v("ls")]),e._v(" is an input and not an output. Nu adds this output for us automatically using another command called "),a("code",[e._v("autoview")]),e._v(". The "),a("code",[e._v("autoview")]),e._v(" command is appended to any pipeline that doesn't have an output allowing us to see the result.")]),e._v(" "),a("p",[e._v("In effect, the command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls\n")])])]),a("p",[e._v("And the pipeline:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> ls | autoview\n")])])]),a("p",[e._v("Are one and the same.")])])}),[],!1,null,null,null);t.default=n.exports}}]);