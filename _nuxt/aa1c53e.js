(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{278:function(t,e,n){"use strict";n.r(e);n(48);var r={name:"DownloadSection",props:["editionName","screenshot","description","isoLink"],computed:{baseLink:function(){return"".concat("https://lapis.ultramarine-linux.org/pub/ultramarine","/").concat("36","/").concat(this.editionName,"/x86_64/iso")},downloadLink:function(){return this.isoLink?this.isoLink:"".concat(this.baseLink,"/Ultramarine-").concat(this.editionName,"-Live-x86_64-").concat("36","-").concat("1.1",".iso")},checksumLink:function(){return"".concat(this.baseLink,"/CHECKSUM")}}},o=n(19),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center"},[n("nuxt-img",{staticClass:"h-auto pb-4 rounded-sm w-96",attrs:{src:t.screenshot,alt:"Ultramarine"+t.editionName+"Screenshot",quality:"10"}}),t._v(" "),n("a",{staticClass:"flex flex-row rounded-lg",attrs:{href:t.downloadLink}},[n("div",{staticClass:"flex flex-col items-center"},[n("button",{staticClass:"px-4 py-2 font-semibold text-gray-900 bg-transparent border-2 border-blue-500 rounded-lg dark:text-gray-50 hover:bg-blue-600 hover:text-gray-50"},[t._v("\n        Download "+t._s(t.editionName)+" Edition\n      ")]),t._v(" "),n("a",{staticClass:"mt-1 text-gray-400",attrs:{href:t.checksumLink}},[t._v("View Checksum")])])]),t._v(" "),n("div",{staticClass:"pt-2"},[n("p",{staticClass:"max-w-md text-lg text-justify"},[t._v("\n      "+t._s(t.description)+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,n){"use strict";n.r(e);var r=n(19),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen text-gray-900 bg-gray-100 dark:text-gray-200 dark:bg-gray-900"},[n("div",{staticClass:"flex flex-col min-h-screen p-12 text-gray-900 bg-gray-100 place-content-center md:items-center dark:bg-gray-900 dark:text-gray-100"},[n("h1",{staticClass:"text-4xl"},[t._v("Pick your flavor of Ultramarine")]),t._v(" "),n("h2",{staticClass:"pt-1 text-gray-400"},[t._v("Latest Release: 36 (Rhode Island)")]),t._v(" "),n("div",{},[n("div",{staticClass:"grid grid-flow-row-dense grid-cols-1 gap-10 pt-12 md:grid-cols-2 md:flex-row"},[n("DownloadSection",{attrs:{editionName:"Flagship",screenshot:"ultramarine.png",description:"The flagship edition with the latest and greatest software and ourbest polish. Powered by Solus' Budgie Desktop. (Recommended)"}}),t._v(" "),n("DownloadSection",{attrs:{editionName:"GNOME",screenshot:"GNOME.png",description:"GNOME is a simple, elegant, and intuitive desktop environment with a focus on productivity."}}),t._v(" "),n("DownloadSection",{attrs:{editionName:"Pantheon",screenshot:"pantheon.png",description:"The default desktop of elementary OS focused on elegance and visual appeal."}}),t._v(" "),n("DownloadSection",{attrs:{editionName:"Cutefish",screenshot:"cutefish.png",description:"Simplicity, beauty, and practicality, with a familiar look. (In early development, only recommended for more advanced users)"}}),t._v(" "),n("DownloadSection",{attrs:{editionName:"Lapis",screenshot:"ultramarine.png",description:"The Flagship Edition, but immutable. Powered by OSTree.",isoLink:"https://lapis.ultramarine-linux.org/pub/ultramarine/36/Lapis/x86_64/iso/Ultramarine-36-20220519.0-Lapis-x86_64-ostree1.iso"}})],1)]),t._v(" "),n("h2",{staticClass:"text-3xl mt-20"},[t._v("Torrents")]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",{staticClass:"pt-1 text-gray-400 pb-12"},[t._v("You can also download Ultramarine Builds using Torrent clients from FOSS Torrents which are available\n        "),n("a",{staticClass:"text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-200",attrs:{href:"https://fosstorrents.com/distributions/ultramarine-linux/"}},[t._v("\n            here\n          ")]),t._v(".\n    ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DownloadSection:n(278).default})}}]);