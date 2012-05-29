/*!
	Name: autoComplete
	Author: Raymond Camden & Andy Matthews
	Contributors: Jim Pease (@jmpease)
	Website: http://raymondcamden.com/
			http://andyMatthews.net
	Packed With: http://jsutility.pjoneil.net/
	Version: 1.3

	Modified for wildcard support and caseSensitive searching
	inspired by Tom Coote jsonSuggest jQuery plugin
	http://tomcoote.co.uk/javascript/jquery-json-suggestsearch-box-v2/

 */
(function(e){var f={target:e(),source:null,callback:null,link:null,wildcard:"",caseSensitive:false,minLength:0,transition:"fade"},h=function(k,j,i){var l=[];e.each(j,function(m,n){if(e.isPlainObject(n)){l.push("<li><a href='javascript:selectItem("+n.areaid+',"'+n.name+"\")'>"+n.name+"</a></li>")}else{l.push("<li><a href='javascript:selectItem("+areaid+',"'+areaid+"\")'>"+areaid+"</a></li>")}});e(i.target).html(l.join("")).listview("refresh");if(i.callback!==null&&e.isFunction(i.callback)){d(i)}if(l.length>0){k.trigger("targetUpdated.autocomplete")}else{k.trigger("targetCleared.autocomplete")}},d=function(i){e("li a",e(i.target)).bind("click.autocomplete",function(j){j.stopPropagation();j.preventDefault();i.callback(j)})},c=function(j,n){var k=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];if(n){for(var m=0;m<k.length;m++){if(k[m]===n){k.splice(m,1)}}}var l=new RegExp("(\\"+k.join("|\\")+")","g");return j.replace(l,"\\$1")},b=function(j,i){i.html("").listview("refresh");j.trigger("targetCleared.autocomplete")},g=function(n){var m=e(this),o,l,j=m.jqmData("autocomplete");if(j){o=m.val();var i=(!j.wildcard)?c(o):c(o,j.wildcard).replace(k,".*");i=i||".*";i=j.wildcard?"^"+i:i;if(o.length<j.minLength){b(m,e(j.target))}else{if(e.isArray(j.source)){var k=new RegExp(c(j.wildcard||""),"g");l=j.source.sort().filter(function(q){var p,r=j.caseSensitive?new RegExp(i):new RegExp(i,"i");if(e.isPlainObject(q)){p=q.name}else{p=q}return r.test(p)});h(m,l,j)}else{e.get(j.source,{term:o},function(p){h(m,p,j)},"json")}}}},a={init:function(i){this.jqmData("autocomplete",e.extend({},f,i));return this.unbind("input.autocomplete").bind("input.autocomplete",g)},update:function(i){var j=this.jqmData("autocomplete");if(j){this.jqmData("autocomplete",e.extend(j,i))}return this},clear:function(){var i=this.jqmData("autocomplete");if(i){b(this,e(i.target))}return this},destroy:function(){var i=this.jqmData("autocomplete");if(i){b(this,e(i.target));this.jqmRemoveData("autocomplete");this.unbind(".autocomplete")}return this}};e.fn.autocomplete=function(i){if(a[i]){return a[i].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof i==="object"||!i){return a.init.apply(this,arguments)}}}})(jQuery);
