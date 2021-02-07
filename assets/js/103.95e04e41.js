(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{490:function(t,s,a){"use strict";a.r(s);var n=a(43),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"域名文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#域名文件"}},[t._v("#")]),t._v(" 域名文件")]),t._v(" "),a("h2",{attrs:{id:"内置的域名文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置的域名文件"}},[t._v("#")]),t._v(" 内置的域名文件")]),t._v(" "),a("p",[t._v("在下载 V2Ray 的时候，下载的压缩包有一个 geosite.dat。这个文件是在路由功能里用到的，文件内置了许多"),a("a",{attrs:{href:"https://github.com/v2fly/domain-list-community",target:"_blank",rel:"noopener noreferrer"}},[t._v("常见的网站域名"),a("OutboundLink")],1),t._v("。配置方式如下，geosite 指 geosite.dat 文件，后面的 cn 是一个标签，代表着使用 geosite.dat 文件里的 cn 规则。")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"direct"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geosite:cn"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通过它可以设定这些国内域名走直连,这样就相当把规则的域名写到一个文件里，然后在配置中引用这个域名文件，其中有一个好处是配置比较简洁，看起来比较干净。")]),t._v(" "),a("h2",{attrs:{id:"外置的域名文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外置的域名文件"}},[t._v("#")]),t._v(" 外置的域名文件")]),t._v(" "),a("p",[t._v("很多时候，V2Ray 内置的国内域名不能满足使用。不过 V2Ray 可以使用外部自定义的像 geosite.dat 这样的域名文件，刚好我也制作了一个，可以供大家使用。")]),t._v(" "),a("ol",[a("li",[t._v("到 https://github.com/ToutyRater/V2Ray-SiteDAT/tree/master/geofiles 下载 h2y.dat 文件放到 V2Ray 运行文件的目录下。")]),t._v(" "),a("li",[t._v('按需要写路由规则，格式为 "ext:h2y.dat:tag"。ext 表示使用外部文件；h2y.dat 是具体的文件名；tag 泛指标签，有哪些标签由文件提供。步骤 1 下载的 h2y.dat 文件目前只有 '),a("code",[t._v("ad")]),t._v(" 和 "),a("code",[t._v("gfw")]),t._v(" 两个标签，ad 包含着常见的广告域名，gfw 包含着常见的被 gfw 屏蔽的域名。它们各自所包含的域名在"),a("a",{attrs:{href:"https://github.com/ToutyRater/v2ray-SiteDAT/tree/master/h2y",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v("可以看到。这个域名文件每星期自动更新，如果你使用了我提供的域名文件也请定期更新(打开 https://github.com/ToutyRater/V2Ray-SiteDAT/tree/master/geofiles 看到的都是当时的最新版本)。路由配置示例如下。")]),t._v(" "),a("li",[t._v("运行 V2Ray。")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"block"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//拦截广告相关域名")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:h2y.dat:ad"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"proxy"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//被 gfw 屏蔽的域名走代理")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"domain"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ext:h2y.dat:gfw"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"field"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tcp,udp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outboundTag"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"direct"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认直连")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("因为使用了 gfw 列表的用户，通常是想要默认情况下直连，但有时候习惯上在 outbounds 的第一个是代理的出站，所以在上面的配置中，最后加了一条直连的规则。那个"),a("code",[t._v('network:"tcp,udp"')]),t._v(" 是为了让所有流量都能匹配上。")]),t._v(" "),a("p",[t._v("需要注意的是，目前所有第三方的 V2Ray GUI 客户端都不支持加载外置的域名文件。")]),t._v(" "),a("h4",{attrs:{id:"更新历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新历史"}},[t._v("#")]),t._v(" 更新历史")]),t._v(" "),a("ul",[a("li",[t._v("2018-06-07 初版")]),t._v(" "),a("li",[t._v("2018-11-06 删除不必要的标签")]),t._v(" "),a("li",[t._v("2019-10-31 添加默认直连规则")])])])}),[],!1,null,null,null);s.default=r.exports}}]);