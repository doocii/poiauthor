!function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var a={};return e.m=t,e.c=a,e.p="/assets/",e(0)}([function(t,e,a){a(7)(),a(6)(),a(4)()},function(t,e){t.exports=function(t){"loading"!=document.readyState?t():document.addEventListener?document.addEventListener("DOMContentLoaded",t):document.attachEvent("onreadystatechange",function(){"loading"!=document.readyState&&t()})}},function(t,e,a){var n=a(10),i=a(8),c={},s=document;t.exports=function(t,e,a){function o(t){c.$c.innerHTML='<b class="number">'+t+"</b>"}function r(){c.$t_container.classList.remove("show")}c||(c={}),c.si||(c.si=!1),c.$t_container||(c.$c=s.createElement("i"),c.$c.setAttribute("class","btn-close fa fa-times fa-fw"),c.$t_container=s.createElement("div"),c.$t_container.id="ajax-loading-container",c.$t=s.createElement("div"),c.$t.id="ajax-loading",c.$t_container.appendChild(c.$t),c.$t_container.appendChild(c.$c),s.body.appendChild(c.$t_container),c.$c.addEventListener(i,function(){r(),clearInterval(c.si)})),clearInterval(c.si),a>0?(o(a),c.si=setInterval(function(){a--,o(a),0>=a&&(r(),c.$c.innerHTML="",c.si&&clearInterval(c.si))},1e3)):c.$c.innerHTML="","hide"===t?r():(setTimeout(function(){c.$t_container.className=t+" show"},1),c.$t.innerHTML=n(t,e))}},,function(t,e,a){var n=a(1);t.exports=function(){function t(){function t(){e.$paypal_fm=document.createElement("form"),e.$paypal_fm.setAttribute("accept-charset","GBK"),e.$paypal_fm.name="_xclick",e.$paypal_fm.action="https://www.paypal.com/cgi-bin/webscr",e.$paypal_fm.method="post",e.$paypal_fm.target="_blank",e.$paypal_fm.style.display="none",document.body.appendChild(e.$paypal_fm)}function a(t){var a={cmd:"_donations",item_name:t,amount:"",currency_code:"USD",business:"kmvan.com@gmail.com",lc:"US",no_note:"0"};for(var n in a){var i=document.createElement("input");i.type="hidden",i.name=n,i.value=a[n],e.$paypal_fm.appendChild(i)}}function n(){e.$paypal_fm.submit()}function i(){return e.$paypal_btn=document.getElementById("paypal_donate"),e.$paypal_btn?void e.$paypal_btn.addEventListener("click",function(e){t(),a(this.getAttribute("data-item-name")),n()}):!1}i()}var e={};n(t)}},,function(t,e,a){var n=a(2),i=a(1);t.exports=function(){function t(){e.fm=document.getElementById("backend-options-fm"),e.fm&&e.fm.addEventListener("submit",function(){return n("loading",a.lang.M01),!0})}var e={},a={lang:{M01:"Saving your settings, please wait...",M02:"Your settings have been saved."}};i(function(){t()})}},function(t,e,a){var n=a(1),i=a(11),c=a(9);t.exports=function(){"use strict";function t(){if($.$tab=b("backend-tab"),$.$tab){$.$tab_loading=document.querySelector(".backend-tab-loading"),$.$tab_header=$.$tab.querySelector(".tab-header"),$.$tab_header_items=$.$tab_header.querySelectorAll(".tab-item"),$.$tab_body=$.$tab.querySelector(".tab-body"),$.$tab_body_items=$.$tab_body.querySelectorAll(".tab-item"),$.len=$.$tab_header_items.length,$.last_active_i=0,$.active_i=0,$.actived=[];for(var t=0;t<$.len;t++)$.$tab_header_items[t].setAttribute("data-i",t),$.$tab_header_items[t].addEventListener("ontouchstart"in document.documentElement?"touchstart":"mouseover",e);$.$tab_loading.style.display="none",$.$tab.style.display="block",a(),r(),u()}}function e(t){return t.preventDefault(),t.stopPropagation(),$.active_i=this.getAttribute("data-i"),$.last_active_i==$.active_i?!1:(o($.last_active_i),s($.active_i),v($.last_active_i),_($.active_i),p(),$.last_active_i=$.active_i,void localStorage.setItem("backend-tab-last-active",$.active_i))}function a(){$.last_active_i=parseInt(localStorage.getItem("backend-tab-last-active")),$.last_active_i||($.last_active_i=0),$.active_i=$.last_active_i,s($.last_active_i)}function s(t){$.$tab_header_items[t].classList.add("active"),$.$tab_body_items[t].classList.add("active")}function o(t){$.$tab_header_items[t].classList.remove("active"),$.$tab_body_items[t].classList.remove("active")}function r(){$.$nav_container=document.createElement("div"),$.$nav_container.className="tab-nav-container",$.$tab_body.insertBefore($.$nav_container,$.$tab_body.firstChild),$.admin_bar_height=32,$.legend_tops=[],$.$tab_nav=[],$.$nav_items=[],$.$tab_legends=[];for(var t=0;t<$.len;t++)d(t);_($.last_active_i)}function d(t){if($.$tab_nav[t]=document.createElement("nav"),$.$tab_nav[t].className="tab-nav",$.$nav_items[t]={},$.$tab_legends[t]=$.$tab_body_items[t].querySelectorAll("legend"),$.last_tab_nav_active_i=0,!$.$tab_legends[t][0])return!1;for(var e=0,a=$.$tab_legends[t].length;a>e;e++){var n=$.$tab_legends[t][e].innerHTML,i=$.$tab_legends[t][e].textContent;$.$nav_items[t]||($.$nav_items[t]=[]),$.$nav_items[t][e]=document.createElement("span"),$.$tab_legends[t][e].addEventListener("click",function(){scrollTo(0,0)}),$.$tab_legends[t][e].id=encodeURI(i),$.$nav_items[t][e].setAttribute("data-hash",encodeURI(i)),$.$nav_items[t][e].setAttribute("data-i",t),$.$nav_items[t][e].setAttribute("data-j",e),$.$nav_items[t][e].innerHTML=n,$.$nav_items[t][e].addEventListener("click",l),$.$tab_nav[t].appendChild($.$nav_items[t][e])}$.$nav_container.appendChild($.$tab_nav[t])}function l(t){t.preventDefault();var e=$.$tab_legends[this.getAttribute("data-i")][this.getAttribute("data-j")],a=e.parentNode;scrollTo(0,c(e)-$.admin_bar_height),history.pushState(null,null,"#"+this.getAttribute("data-hash")),a.classList.add("active"),setTimeout(function(){a.classList.remove("active")},2e3)}function _(t){$.$tab_nav[t].classList.add("active")}function v(t){$.$tab_nav[t].classList.remove("active")}function u(){$.nav_ori_top=c($.$nav_container)-$.admin_bar_height,$.is_fixed=!1,p()}function p(){if(-1===$.actived.indexOf($.active_i)){$.$nav_items[$.active_i][0].classList.add("active");for(var t=0,e=$.$tab_legends[$.active_i].length;e>t;t++)$.legend_tops[$.active_i]||($.legend_tops[$.active_i]=[]),$.legend_tops[$.active_i][t]=parseInt(c($.$tab_legends[$.active_i][t]));i(function(t){m(t),f(t)}),$.actived.push($.active_i)}}function f(t){for(var e=$.legend_tops[$.active_i].length,a=0;e>a;a++)if(t>=$.legend_tops[$.active_i][a]-2*$.admin_bar_height&&t<$.legend_tops[$.active_i][a+1]&&$.tab_nav_last_active_i!==a){for(var n=0;e>n;n++)$.$nav_items[$.active_i][n].classList.remove("active");$.$nav_items[$.active_i][a].classList.add("active"),$.tab_nav_last_active_i=a}}function m(t){t>=$.nav_ori_top?$.is_fixed||($.$tab_nav[$.active_i].style.top=$.admin_bar_height+"px",$.$tab_nav[$.active_i].style.position="fixed",$.is_fixed=!0):$.is_fixed&&($.$tab_nav[$.active_i].style.top=0,$.$tab_nav[$.active_i].style.position="relative",$.is_fixed=!1)}function b(t){return document.getElementById(t)}n(t);var $={}}},function(t,e){t.exports="touchend"in document.documentElement?"touchend":"click"},function(t,e){t.exports=function(t){for(var e=t.offsetTop,a=t.offsetParent;null!==a;)e+=a.offsetTop,a=a.offsetParent;return e}},function(module,exports){module.exports=function(){var defaults=["type","size","content","wrapper"],types=["loading","success","error","question","info","ban","warning"],sizes=["small","middle","large"],wrappers=["div","span"],type,icon,size,wrapper,content,args=arguments;switch(args.length){case 0:return!1;case 1:content=args[0];break;case 2:type=args[0],content=args[1];break;default:for(var i in args)eval(defaults[i]+" = args[i];")}switch(type||(type=types[0]),size||(size=sizes[0]),wrapper||(wrapper=wrappers[0]),type){case"success":icon="check-circle";break;case"error":icon="times-circle";break;case"info":case"warning":icon="exclamation-circle";break;case"question":case"help":icon="question-circle";break;case"ban":icon="minus-circle";break;case"loading":case"spinner":icon="circle-o-notch fa-spin";break;default:icon=type}return"<"+wrapper+' class="tip-status tip-status-'+size+" tip-status-"+type+'"><i class="fa fa-'+icon+' fa-fw"></i> '+content+"</"+wrapper+">"}},function(t,e){t.exports=function(t){"use strict";function e(){i=window.pageYOffset,a()}function a(){c||(requestAnimationFrame(n),c=!0)}function n(){t(i),c=!1}var i=window.pageYOffset,c=!1;window.addEventListener("scroll",e)}}]);