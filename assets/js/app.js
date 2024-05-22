"use strict";function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function createNewEvent(t){if("function"==typeof Event)var e=new Event(t);else(e=document.createEvent("Event")).initEvent(t,!0,!0);return e}function isElement(t){return t instanceof Element}function nodify(t){return 0==t?[]:Array.isArray(t)&&Element.prototype.isPrototypeOf(t[0])?t:NodeList.prototype.isPrototypeOf(t)?t:Element.prototype.isPrototypeOf(t)?[t]:document.querySelectorAll(t)}function remove(t){t.parentNode.removeChild(t)}function forEach(t,e){(t=nodify(t))&&Array.prototype.forEach.call(t,e)}function addEventListeners(t,n,i){var s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:this,o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:[];0!==t.length?forEach(t,function(t,e){t.addEventListener(n,i.bind.apply(i,[s].concat(_toConsumableArray(o),[t,e])))}):t.addEventListener(n,i.bind.apply(i,[s].concat(_toConsumableArray(o),[t])))}function removeEventListeners(t,n,i){var s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:this,o=4<arguments.length&&void 0!==arguments[4]?arguments[4]:[];0!==t.length?forEach(t,function(t,e){t.removeEventListener(n,i.bind.apply(i,[s].concat(_toConsumableArray(o),[t,e])))}):t.removeEventListener(n,i.bind.apply(i,[s].concat(_toConsumableArray(o),[t])))}function hasClass(t,e){var n=new RegExp(e,"g");return null!==t.className.match(n)}function addClass(t,e){hasClass(t,e)||(t.className+=" "+e)}function getCSS(t,e){return window.getComputedStyle(t,null)[e]}function getPrefix(){var t=window.getComputedStyle(document.documentElement,""),e=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.OLink&&["","o"])[1];return{dom:"WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1],lowercase:e,css:"-"+e+"-",js:e[0].toUpperCase()+e.substr(1)}}function setCSS(t,e,n){for(var i in e)t.style[i]=e[i],-1<properties_to_prefix.indexOf(i)&&(t.style[getPrefix().css+i]=e[i]);n&&"function"==typeof n&&setTimeout(function(){n()},getTransitionDuration(t))}function toDuration(t){return-1<t.indexOf(",")&&(t=(t=t.split(","))[0]),-1<t.indexOf("ms")?t.replace(/[a-zA-Z]+/g,""):1e3*t.replace(/[a-zA-Z]+/g,"")}function postAjax(t,e,n,i){var s="string"==typeof e?e:Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&"),o=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return o.open("POST",t),o.onreadystatechange=function(){if(200==o.status)3<o.readyState&&n(o.responseText);else{var t={message:o.statusText,status:o.status};i(t)}},o.setRequestHeader("X-Requested-With","XMLHttpRequest"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(s),o}function throttle(n,i,s){var o,r,a,l=null,u=0;s||(s={});var c=function(){u=!1===s.leading?0:Date.now(),l=null,a=n.apply(o,r),l||(o=r=null)};return function(){var t=Date.now();u||!1!==s.leading||(u=t);var e=i-(t-u);return o=this,r=arguments,e<=0||i<e?(l&&(clearTimeout(l),l=null),u=t,a=n.apply(o,r),l||(o=r=null)):l||!1===s.trailing||(l=setTimeout(c,e)),a}}function debounce(i,s,o){var r;return function(){var t=this,e=arguments,n=o&&!r;clearTimeout(r),r=setTimeout(function(){r=null,o||i.apply(t,e)},s),n&&i.apply(t,e)}}function wrap(t,e){e||(e="div");var n=document.createElement(e);return t.parentNode.insertBefore(n,t),n.appendChild(t),n}function wrapChildren(t,e){e||(e="div");for(var n=document.createElement(e);t.firstChild;)n.appendChild(t.firstChild);return t.innerHTML="",t.appendChild(n),n}var _get=function t(e,n,i){null===e&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,n);if(void 0===s){var o=Object.getPrototypeOf(e);return null===o?void 0:t(o,n,i)}if("value"in s)return s.value;var r=s.get;return void 0!==r?r.call(i):void 0},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_createClass=function(){function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}}(),removeClass=function(t,e){var n=" "+t.className.replace(/[\t\r\n]/g," ")+" ";if(hasClass(t,e)){for(;0<=n.indexOf(" "+e+" ");)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}},properties_to_prefix=["transform","appearance","filter","animation"],getClosest=function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),n=e.length;0<=--n&&e.item(n)!==this;);return-1<n});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null},Counter=function(){function i(t,e){if(_classCallCheck(this,i),e&&e.name?this.name=e.name:this.name=(void 0===t?"undefined":_typeof(t))==String?t:".a-counter",this.$=nodify(t)[0],!this.$)return console.warn("Counter : element not found"),!1;if(this.defs={start:1,total:1},e)for(var n in this.defs)(e[n]||0==e[n])&&(this.defs[n]=e[n]);console.log(this.$),this.$index=this.$.querySelector(this.name+"--index"),this.$total=this.$.querySelector(this.name+"--total"),this.index=this.defs.start,this.total=this.defs.total,this.init()}return _createClass(i,[{key:"init",value:function(){if(this.initiated)return!1;this.initiated=!0}},{key:"index",set:function(t){if(t>this.total)return!1;this._index=t,this.$index.innerHTML=t},get:function(){return this._index}},{key:"total",set:function(t){this._total=t,this.$total.innerHTML=t},get:function(){return this._total}}]),i}(),Questions=function(){function n(t,e){if(_classCallCheck(this,n),this.name=".c-question",this.$=nodify(t)[0],!this.$)return console.warn("Questions : element not found"),!1;this.$section=this.$.querySelector(this.name+"--section"),this.$title=this.$.querySelector(this.name+"--title"),this.$text=this.$.querySelector(this.name+"--text"),this.$answers=this.$.querySelectorAll(this.name+"--answer"),this.$next=this.$.querySelector(".js-next"),this.$prev=this.$.querySelector(".js-prev"),this.counter=new Counter(".a-counter",{index:1,total:this.getTotal()}),this.section=0,this.index=0,setTimeout(this.init.bind(this),0)}return _createClass(n,[{key:"init",value:function(){this.initiated||(this.initiated=!0,this.bindEvents()),console.log(app),this.setup()}},{key:"bindEvents",value:function(){var n=this;this.$next.addEventListener("click",this.next.bind(this)),this.$prev.addEventListener("click",this.prev.bind(this)),forEach(this.$answers,function(t,e){t.addEventListener("mousedown",n.answer.bind(n,e)),t.querySelector("input").addEventListener("change",n.answer.bind(n,e))})}},{key:"setup",value:function(){this.updateInfo()}},{key:"getTotal",value:function(){for(var t=0,e=0;e<data.length;e++)for(var n=0;n<data[e].questions.length;n++)t++;return t}},{key:"next",value:function(){this.index+1>data[this.section].questions.length-1?this.section+1>data.length-1?(this.hide(),app.page.result.show()):this.goTo(this.section+1,0):this.goTo(this.section,this.index+1),this.counter.index++}},{key:"prev",value:function(){this.index-1<0?this.section-1<0||this.goTo(this.section-1,data[this.section-1].questions.length-1):this.goTo(this.section,this.index-1),this.counter.index--}},{key:"answer",value:function(t){this.displayAnswer(t),data[this.section].questions[this.index].answer=t,this.$next.disabled=!1}},{key:"console",value:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){for(var t=[],e=0;e<data.length;e++)for(var n=0;n<data[e].questions.length;n++){var i=data[e].questions[n].answer;void 0!==i&&t.push(i)}console.log(t)})},{key:"goTo",value:function(t,e){this.section=t,this.index=e,this.transition(-1,this.updateInfo.bind(this,this.transition.bind(this,1))),window.scrollTo(0,0)}},{key:"updateInfo",value:function(t){this.$section.innerHTML=data[this.section].title,this.$title.innerHTML=data[this.section].questions[this.index].title,this.$text.innerHTML=data[this.section].questions[this.index].text;var e=document.querySelector("input[name=answer]:checked");e&&(e.checked=!1),this.checkForAnswer(),t&&t()}},{key:"checkForAnswer",value:function(){var t=data[this.section].questions[this.index].answer;this.displayAnswer(t),void 0!==t?(document.querySelectorAll("input[name=answer]")[t].checked=!0,this.$next.disabled=!1):this.$next.disabled=!0}},{key:"displayAnswer",value:function(t){forEach(this.$answers,function(t){t.classList.remove("m-checked")}),void 0!==t&&this.$answers[t].classList.add("m-checked")}},{key:"transition",value:function(t,e){e&&e()}},{key:"show",value:function(){this.$.style.display=""}},{key:"hide",value:function(){this.$.classList.add("m-hidden")}}]),n}(),Result=function(){function i(t,e){if(_classCallCheck(this,i),this.name=".s-result",this.$=nodify(t)[0],!this.$)return console.warn("Result : element not found"),!1;if(this.$title=this.$.querySelector(this.name+"--title"),this.$text=this.$.querySelector(this.name+"--text"),this.$table=this.$.querySelector(this.name+"--table"),this.$download=this.$.querySelector(".js-download"),this.defs={},e)for(var n in this.defs)(e[n]||0==e[n])&&(this.defs[n]=e[n]);this.init()}return _createClass(i,[{key:"init",value:function(){this.initiated||(this.initiated=!0,this.bindEvents())}},{key:"bindEvents",value:function(){this.$download.addEventListener("click",this.download.bind(this))}},{key:"calculate",value:function(){this.data=[],this.highest=null;for(var t=0,e=0;e<data.length;e++){for(var n=0,i=0;i<data[e].questions.length;i++)n+=data[e].questions[i].answer/3;var s=n/data[e].questions.length;t<=s&&(t=s,this.highest=e),this.data.push(s)}null!==this.highest&&this.setupGraph()}},{key:"setupGraph",value:function(){for(var t=0;t<data.length;t++)this.$.querySelector("#section-"+(t+1)).style.fill=this.getColor(this.data[t])}},{key:"createTable",value:function(){for(var t=0;t<data.length;t++){this.data[t];var e="\n            <tr>\n                <td>"+data[t].title+"</td>\n                <td>"+parseInt(100*this.data[t])+"%</td>\n            </tr>\n            ";this.$table.innerHTML+=e}}},{key:"getColor",value:function(t){var e=["#DC5450","#E2A122","#69BB59"];return t<.33?e[0]:t<.66?e[1]:e[2]}},{key:"show",value:function(){this.calculate(),this.createTable(),this.$.classList.remove("m-hidden")}},{key:"hide",value:function(){}},{key:"download",value:function(){window.print()}}]),i}(),Page=function(){function e(t){_classCallCheck(this,e),this.wait=[],this.onleave=[],this.ondestroy=[],this.init()}return _createClass(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){for(var t=0;t<this.ondestroy.length;t++)this.ondestroy[t]()}},{key:"leave",value:function(){for(var t=0;t<this.onleave.length;t++)this.onleave[t]()}}]),e}(),HomePage=function(t){function n(t){_classCallCheck(this,n);var e=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return _get(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",e).call(e),e}return _inherits(n,Page),_createClass(n,[{key:"init",value:function(){}}]),n}(),Quizz=function(t){function n(t){_classCallCheck(this,n);var e=_possibleConstructorReturn(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return _get(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"init",e).call(e),e}return _inherits(n,Page),_createClass(n,[{key:"init",value:function(){this.questions=new Questions(".s-question"),this.result=new Result(".s-result")}}]),n}(),App=function(){function t(){_classCallCheck(this,t),this.width=window.innerWidth,this.height=window.innerWidth,this.events={resize:createNewEvent("appresize"),scroll:createNewEvent("appscroll")},window.addEventListener("load",this.init.bind(this))}return _createClass(t,[{key:"init",value:function(){this.initPage(),this.bindEvents()}},{key:"bindEvents",value:function(){window.addEventListener("resize",debounce(this.resize.bind(this),200)),window.addEventListener("scroll",throttle(this.scroll.bind(this),20))}},{key:"resize",value:function(){if(this.height=window.innerWidth,window.innerWidth==this.width)return!1;this.width=window.innerWidth,window.dispatchEvent(this.events.resize)}},{key:"scroll",value:function(){window.dispatchEvent(this.events.scroll)}},{key:"initPage",value:function(t){if(void 0===t&&(t=document.getElementsByTagName("main")[0]),!t)return console.error("App : No page found"),!1;switch(t.id){case"p-home":this.page=new Home;break;case"p-quizz":this.page=new Quizz;break;default:this.page=new Page}}}]),t}(),app=new App;